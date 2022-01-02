import React from 'react';
import CardList from './Components/CardList';
import runewords from './Data/runewords';
import d2rRunewords from './Data/d2r-runewords';
import runewordsDesc from './Data/runewords-descriptions';
import d2rRunewordsDesc from './Data/d2r-runewords-descriptions';
import SearchBox from './Components/SearchBox'
import runes from './Data/runes';
import RuneList from './Components/RuneList';
import SelectButtons from './Components/SelectButtons';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ModeToggle from './Components/ModeToggle';
import ScrollToTop from 'react-scroll-to-top';
import FilterList from './Components/FilterList';
import { filterHelms, filterShields, filterBodyArmors, filterAllArmor, filterAllWeapons, filterMeleeWeapons,
filterMissileWeapons, filterAxes, filterClaws, filterClubs, filterHammers, filterMaces, filterPolearms, filterScepters} from './Helpers/filterFunctions';

/* sort runewords alphabetically, runewords were originally organized by which patch introduced them, but for this app that is unnecessary */
runewords.sort((a,b) => a.title.localeCompare(b.title));
d2rRunewords.sort((a,b) => a.title.localeCompare(b.title));

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      runewords: runewords,
      d2rRunewords: d2rRunewords,
      searchfield: '',
      selectedRunes: {
        El: true, Eld: true, Tir: true, Nef: true, Eth: true, Ith: true, Tal: true,
        Ral: true, Ort: true, Thul: true, Amn: true, Sol: true, Shael: true,
        Dol: true, Hel: true, Io: true, Lum: true, Ko: true, Fal: true, Lem: true,
        Pul: true, Um: true, Mal: true, Ist: true, Gul:true, Vex: true, Ohm: true,
        Lo: true, Sur:true, Ber: true, Jah:true, Cham: true, Zod:true
      },
      activatedD2R : true,
      filterListVisible: false,
      selectedFilters: {
        'All Armor':false, 'Body Armors': false, 'Helms' : false, 'Shields' : false, 'All Weapons':false, 'Melee Weapons':false,
        'Missile Weapons':false, 'Axes':false, 'Claws': false, 'Clubs': false, 'Hammers':false, 'Maces':false, 'Polearms':false,
        'Scepters':false
      }
    }
  }
  /* this only runs once when the component is first loaded, it will retrieve the state saved on local storage and use it instead of the default state if it exists*/
  componentDidMount(){
    const data = JSON.parse(window.localStorage.getItem('runeword-helper'));
    if(data){
      this.setState({selectedRunes: data.selectedRunes});
      this.setState({activatedD2R: data.activatedD2Rmode});
    }
  }

  /* every time that state changes, this function will run and we'll save state to local storage */
/*   componentDidUpdate(){
    window.localStorage.setItem('runeword-helper', JSON.stringify(this.state.selectedRunes));
  }
 */
  componentDidUpdate(){
    const selectedRunes = this.state.selectedRunes;
    const activatedD2Rmode = this.state.activatedD2R;
    const valuesToSave = {selectedRunes, activatedD2Rmode};
    window.localStorage.setItem('runeword-helper', JSON.stringify(valuesToSave));
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  onRuneSelect = (value) => {
    if(this.state.selectedRunes[value] === false){
      this.setState(prevState => ({
        selectedRunes: {
          ...prevState.selectedRunes,
          [value]: true
        }
      }));
    }
    else{
      this.setState(prevState => ({
        selectedRunes: {
          ...prevState.selectedRunes,
          [value]: false
        }
      }));
    }
  }

  selectAll = () => {
    for(let i in this.state.selectedRunes){this.setState(prevState => ({selectedRunes:{...prevState.selectedRunes, [i] : true}}));
  }}

  deselectAll = () => {
    for (let i in this.state.selectedRunes) {
      this.setState(prevState => ({ selectedRunes: { ...prevState.selectedRunes, [i]: false } }));
    }
  }

  modeToggle = () => {
    if(this.state.activatedD2R === true){
      this.setState({activatedD2R : false});
    }
    else{
      this.setState({ activatedD2R: true });
    }
  }

  //generate two arrays: one for runewords we can make, and one for runewords we can't make.
  filterRunes = (runewords) => {
    const trueRunewords = [];
    const falseRunewords = [];
    for(let i = 0; i < runewords.length; i++){
      if(runewords[i].title.toLowerCase().includes(this.state.searchfield.toLowerCase()) && runewords[i].runes.every(rune => this.state.selectedRunes[rune])){
        trueRunewords.push(runewords[i]);
      } else{
        falseRunewords.push(runewords[i]);
      }
    }
    return [trueRunewords, falseRunewords];
  }

  onFilterChange = (value) => {
    if (this.state.selectedFilters[value] === false) {
      this.setState(prevState => ({
        selectedFilters: {
          ...prevState.selectedFilters,
          [value]: true
        }
      }));
    }
    else {
      this.setState(prevState => ({
        selectedFilters: {
          ...prevState.selectedFilters,
          [value]: false
        }
      }));
    }
  }

  //old filter function before using external helper functions
  /*  filterHelms = (runewords) => {
     if (this.state.selectedFilters['All Armor'] === true) { return runewords }
     if (this.state.selectedFilters['Helms'] === true) {
       return runewords.filter(item => {
         return item.ttypes.includes("Helms")
       })
     } else {
       return runewords;
     }
   } */

  render(){
    const runeNames = runes.map(rune => rune.name);
    let filteredRW;

    let originalRunewords;
    if(this.state.activatedD2R){
      originalRunewords = this.state.d2rRunewords;
    } else{
      originalRunewords = this.state.runewords;
    }

    let allFiltered = [];
    //if a filter is not applied, the filter function will return the original runeword, if that happens we don't need to push it to the allFiltered array
    //old way when there were filter methods and not external filter functions:
    /* if (originalRunewords !== this.filterAllArmor(originalRunewords)) { allFiltered.push(this.filterAllArmor(originalRunewords)); } */
    if (originalRunewords !== filterAllArmor(this.state.selectedFilters, originalRunewords)) { allFiltered.push(filterAllArmor(this.state.selectedFilters, originalRunewords)); }
    if (originalRunewords !== filterBodyArmors(this.state.selectedFilters, originalRunewords)) { allFiltered.push(filterBodyArmors(this.state.selectedFilters,originalRunewords));}
    if (originalRunewords !== filterHelms(this.state.selectedFilters, originalRunewords)) { allFiltered.push(filterHelms(this.state.selectedFilters, originalRunewords));}
    if (originalRunewords !== filterShields(this.state.selectedFilters, originalRunewords)) { allFiltered.push(filterShields(this.state.selectedFilters, originalRunewords));}

    if (originalRunewords !== filterAllWeapons(this.state.selectedFilters, originalRunewords)) { allFiltered.push(filterAllWeapons(this.state.selectedFilters, originalRunewords));}
    if (originalRunewords !== filterMeleeWeapons(this.state.selectedFilters, originalRunewords)) { allFiltered.push(filterMeleeWeapons(this.state.selectedFilters, originalRunewords));}
    if (originalRunewords !== filterMissileWeapons(this.state.selectedFilters, originalRunewords)) { allFiltered.push(filterMissileWeapons(this.state.selectedFilters, originalRunewords));}
    if (originalRunewords !== filterAxes(this.state.selectedFilters, originalRunewords)) { allFiltered.push(filterAxes(this.state.selectedFilters, originalRunewords));}
    if (originalRunewords !== filterClaws(this.state.selectedFilters, originalRunewords)) { allFiltered.push(filterClaws(this.state.selectedFilters, originalRunewords));}
    if (originalRunewords !== filterClubs(this.state.selectedFilters, originalRunewords)) { allFiltered.push(filterClubs(this.state.selectedFilters, originalRunewords));}
    if (originalRunewords !== filterHammers(this.state.selectedFilters, originalRunewords)) { allFiltered.push(filterHammers(this.state.selectedFilters, originalRunewords));}
    if (originalRunewords !== filterMaces(this.state.selectedFilters, originalRunewords)) { allFiltered.push(filterMaces(this.state.selectedFilters, originalRunewords));}
    if (originalRunewords !== filterPolearms(this.state.selectedFilters, originalRunewords)) { allFiltered.push(filterPolearms(this.state.selectedFilters, originalRunewords));}
    if (originalRunewords !== filterScepters(this.state.selectedFilters, originalRunewords)) { allFiltered.push(filterScepters(this.state.selectedFilters, originalRunewords));}
    
    //remove all duplicate entries in the array of objects allFiltered
    const noDuplicatesFiltered = allFiltered.flat().filter((item,i,arr) =>{
      return i === arr.findIndex((element) => (element.title === item.title))
    }
    )
    //Alternative to the above, Map will be more efficient for larger arrays but will not preserve order.
    /*const test = [...new Map(allFiltered.flat().map(item => [JSON.stringify([item.title]), item])).values()] */

    //sort the filtered results alphabetically
    noDuplicatesFiltered.sort((a, b) => a.title.localeCompare(b.title));

    //if all filters are false: display all runewords, if any filter is applied display equipment filtered runewords
    if(Object.values(this.state.selectedFilters).every(item => item === false)){
      filteredRW = this.filterRunes(originalRunewords);
    } else{
      filteredRW = this.filterRunes(noDuplicatesFiltered);
      console.log(noDuplicatesFiltered)
    }

    const filterBtnText = this.state.filterListVisible ? "Hide Filters" : "Show Filters";

    if(this.state.activatedD2R){
      return (
        <div className="tc">
          <Header />
          <SearchBox searchChange={this.onSearchChange} />
          <ModeToggle activatedD2R={this.state.activatedD2R} modeToggle={this.modeToggle} />
          <SelectButtons selectAll={this.selectAll} deselectAll={this.deselectAll} />
          <button 
          onClick={() => {
            this.setState({filterListVisible : !this.state.filterListVisible})
          }}>
            {filterBtnText}
          </button>
          <div style={this.state.filterListVisible ? {} : {display: 'none'}}>
            <FilterList onFilterChange={this.onFilterChange} />
          </div>
          <RuneList runeNames={runeNames} runeSelect={this.onRuneSelect} selectedRunes={this.state.selectedRunes} />
          <CardList searchInput={this.state.searchfield} trueRunewords={filteredRW[0]} falseRunewords={filteredRW[1]}
           runewordsDesc={d2rRunewordsDesc} selectedRunes={this.state.selectedRunes}/>
          <ScrollToTop smooth style={{ backgroundColor: "#777", right: "0.5em" }} color="262626" viewBox="0 0 255 255" preserveAspectRatio="none"/>
          <Footer />
        </div>
      );
    }
    else{
      return (
        <div className="tc">
          <Header />
          <SearchBox searchChange={this.onSearchChange} />
          <ModeToggle activatedD2R={this.state.activatedD2R} modeToggle={this.modeToggle} />
          <SelectButtons selectAll={this.selectAll} deselectAll={this.deselectAll} />
          <button
            onClick={() => {
              this.setState({ filterListVisible: !this.state.filterListVisible })
            }}>
            {filterBtnText}
          </button>
          <div style={this.state.filterListVisible ? {} : { display: 'none' }}>
            <FilterList onFilterChange={this.onFilterChange} />
          </div>
          <RuneList runeNames={runeNames} runeSelect={this.onRuneSelect} selectedRunes={this.state.selectedRunes} />
          <CardList searchInput={this.state.searchfield} trueRunewords={filteredRW[0]} falseRunewords={filteredRW[1]}
           runewordsDesc={runewordsDesc} selectedRunes={this.state.selectedRunes} />
          <ScrollToTop smooth style={{ backgroundColor: "#777", right: "0.5em" }} color="262626" viewBox="0 0 255 255" preserveAspectRatio="none"/>
          <Footer />
        </div>
      )
    }
  }
}

export default App;