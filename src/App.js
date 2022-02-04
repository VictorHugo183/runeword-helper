import React from 'react';
import './Styles/App.css';
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
import {
  filterHelms, filterShields, filterBodyArmors, filterAllArmor, filterAllWeapons, filterMeleeWeapons,
  filterMissileWeapons, filterAxes, filterClaws, filterClubs, filterHammers, filterMaces, filterPolearms, filterScepters,
  filterStaves, filterSwords, filterWands
} from './Helpers/filterFunctions';

/* sort runewords alphabetically, runewords were originally organized by which patch introduced them, but for this app that is unnecessary */
runewords.sort((a, b) => a.title.localeCompare(b.title));
d2rRunewords.sort((a, b) => a.title.localeCompare(b.title));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      runewords: runewords,
      d2rRunewords: d2rRunewords,
      searchfield: '',
      selectedRunes: {
        El: false, Eld: false, Tir: false, Nef: false, Eth: false, Ith: false, Tal: false,
        Ral: false, Ort: false, Thul: false, Amn: false, Sol: false, Shael: false,
        Dol: false, Hel: false, Io: false, Lum: false, Ko: false, Fal: false, Lem: false,
        Pul: false, Um: false, Mal: false, Ist: false, Gul: false, Vex: false, Ohm: false,
        Lo: false, Sur: false, Ber: false, Jah: false, Cham: false, Zod: false
      },
      activatedD2R: true,
      filterListVisible: false,
      selectedFilters: {
        'All Armor': false, 'Body Armors': false, 'Helms': false, 'Shields': false, 'All Weapons': false, 'Melee Weapons': false,
        'Missile Weapons': false, 'Axes': false, 'Claws': false, 'Clubs': false, 'Hammers': false, 'Maces': false, 'Polearms': false,
        'Scepters': false, 'Staves': false, 'Swords': false, 'Wands': false
      },
      socketValue: 'Any'
    }
  }
  /* this only runs once when the component is first loaded, it will retrieve the state saved on local storage and use it instead of the default state if it exists*/
  componentDidMount() {
    const data = JSON.parse(window.localStorage.getItem('runeword-helper'));
    if (data) {
      this.setState({ selectedRunes: data.selectedRunes });
      this.setState({ activatedD2R: data.activatedD2Rmode });
    }
  }

  /* every time that state changes, this function will run and we'll save state to local storage */
  /*   componentDidUpdate(){
      window.localStorage.setItem('runeword-helper', JSON.stringify(this.state.selectedRunes));
    }
   */
  componentDidUpdate() {
    const selectedRunes = this.state.selectedRunes;
    const activatedD2Rmode = this.state.activatedD2R;
    const valuesToSave = { selectedRunes, activatedD2Rmode };
    window.localStorage.setItem('runeword-helper', JSON.stringify(valuesToSave));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  //toggle the state of the clicked Rune to true or false
  onRuneSelect = (value) => {
    if (this.state.selectedRunes[value] === false) {
      this.setState(prevState => ({
        selectedRunes: {
          ...prevState.selectedRunes,
          [value]: true
        }
      }));
    }
    else {
      this.setState(prevState => ({
        selectedRunes: {
          ...prevState.selectedRunes,
          [value]: false
        }
      }));
    }
  }

  selectAll = () => {
    for (let i in this.state.selectedRunes) {
      this.setState(prevState => ({ selectedRunes: { ...prevState.selectedRunes, [i]: true } }));
    }
  }

  deselectAll = () => {
    for (let i in this.state.selectedRunes) {
      this.setState(prevState => ({ selectedRunes: { ...prevState.selectedRunes, [i]: false } }));
    }
  }

  modeToggle = () => {
    if (this.state.activatedD2R === true) {
      this.setState({ activatedD2R: false });
    }
    else {
      this.setState({ activatedD2R: true });
    }
  }

  //generate two arrays: one for runewords we can make, and one for runewords we can't make.
  filterRunes = (runewords) => {
    const trueRunewords = [];
    const falseRunewords = [];
    for (let i = 0; i < runewords.length; i++) {
      if (runewords[i].title.toLowerCase().includes(this.state.searchfield.toLowerCase()) && runewords[i].runes.every(rune => this.state.selectedRunes[rune])) {
        trueRunewords.push(runewords[i]);
      } else {
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

  onSocketChange = (event) => {
    this.setState({ socketValue: event.target.value });
  }

  render() {
    const runeNames = runes.map(rune => rune.name);
    let filteredRW;

    //decide whether to use LoD or D2R runeword data
    let originalRunewords;
    if (this.state.activatedD2R) {
      originalRunewords = this.state.d2rRunewords;
    } else {
      originalRunewords = this.state.runewords;
    }

    //run sockets filter before running any other filter
    if (this.state.socketValue !== 'Any') {
      let value = Number(this.state.socketValue);
      originalRunewords = originalRunewords.filter(item => {
        return item.runes.length === value;
      })
    }

    //if a filter is not applied, the filter function will return the original runeword, if that happens we don't need to push it to the allFiltered array
    //filter functions are imported from filterFunctions.js, only run filter functions if there is one or more filter applied.
    //Old way of filtering without using filterResult variable. (required two function calls per filter instead of one)
    /*if (originalRunewords !== filterBodyArmors(this.state.selectedFilters, originalRunewords)) { allFiltered.push(filterBodyArmors(this.state.selectedFilters, originalRunewords)); } */
    let allFiltered = [];
    let filterResult;

    if (Object.values(this.state.selectedFilters).some(item => item === true)) {

      filterResult = filterAllArmor(this.state.selectedFilters, originalRunewords);
      if (filterResult) { allFiltered.push(filterResult); }

      if(!this.state.selectedFilters['All Armor']){
        filterResult = filterBodyArmors(this.state.selectedFilters, originalRunewords);
        if (filterResult) { allFiltered.push(filterResult); }

        filterResult = filterHelms(this.state.selectedFilters, originalRunewords);
        if (filterResult) { allFiltered.push(filterResult); }

        filterResult = filterShields(this.state.selectedFilters, originalRunewords);
        if (filterResult) { allFiltered.push(filterResult); }
      }

      filterResult = filterAllWeapons(this.state.selectedFilters, originalRunewords)
      if (filterResult) { allFiltered.push(filterResult); }

      if(!this.state.selectedFilters['All Weapons']){
        filterResult = filterMeleeWeapons(this.state.selectedFilters, originalRunewords);
        if (filterResult) { allFiltered.push(filterResult); }

        filterResult = filterMissileWeapons(this.state.selectedFilters, originalRunewords);
        if (filterResult) { allFiltered.push(filterResult); }
        
        if(!this.state.selectedFilters['Melee Weapons']){
          filterResult = filterAxes(this.state.selectedFilters, originalRunewords);
          if (filterResult) { allFiltered.push(filterResult); }

          filterResult = filterClaws(this.state.selectedFilters, originalRunewords);
          if (filterResult) { allFiltered.push(filterResult); }

          filterResult = filterClubs(this.state.selectedFilters, originalRunewords)
          if (filterResult) { allFiltered.push(filterResult); }

          filterResult = filterHammers(this.state.selectedFilters, originalRunewords)
          if (filterResult) { allFiltered.push(filterResult); }

          filterResult = filterMaces(this.state.selectedFilters, originalRunewords)
          if (filterResult) { allFiltered.push(filterResult); }

          filterResult = filterPolearms(this.state.selectedFilters, originalRunewords)
          if (filterResult) { allFiltered.push(filterResult); }

          filterResult = filterScepters(this.state.selectedFilters, originalRunewords)
          if (filterResult) { allFiltered.push(filterResult); }

          filterResult = filterStaves(this.state.selectedFilters, originalRunewords)
          if (filterResult) { allFiltered.push(filterResult); }

          filterResult = filterSwords(this.state.selectedFilters, originalRunewords)
          if (filterResult) { allFiltered.push(filterResult); }

          filterResult = filterWands(this.state.selectedFilters, originalRunewords)
          if (filterResult) { allFiltered.push(filterResult); }
        }
      }
    }

    //flatten and remove all duplicate entries in the array of objects allFiltered
    const noDuplicatesFiltered = allFiltered.flat().filter((item, i, arr) => {
      return i === arr.findIndex((element) => (element.title === item.title))
    })

    //Alternative to the above, Map will be more efficient for larger arrays but will not preserve order.
    /*const test = [...new Map(allFiltered.flat().map(item => [JSON.stringify([item.title]), item])).values()] */

    //sort the filtered results alphabetically
    noDuplicatesFiltered.sort((a, b) => a.title.localeCompare(b.title));

    //if all filters are false: display all runewords, if any filter is applied display filtered runewords
    if (Object.values(this.state.selectedFilters).every(item => item === false)) {
      filteredRW = this.filterRunes(originalRunewords);
    } else {
      filteredRW = this.filterRunes(noDuplicatesFiltered);
    }

    const filterBtnText = this.state.filterListVisible ? "Hide Filters" : "More Filters";
    const arrowDirection = this.state.filterListVisible ? "arrow up" : "arrow down";

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={this.onSearchChange} />
        <ModeToggle activatedD2R={this.state.activatedD2R} modeToggle={this.modeToggle} />
        <SelectButtons selectAll={this.selectAll} deselectAll={this.deselectAll} />
        <h3
          className="filterToggle"
          onClick={() => {
            this.setState({ filterListVisible: !this.state.filterListVisible })
          }}
        >
          {filterBtnText}
          <i className={arrowDirection}></i>
        </h3>
        <div style={this.state.filterListVisible ? {} : { display: 'none' }}>
          <FilterList onFilterChange={this.onFilterChange} socketValue={this.state.socketValue} onSocketChange={this.onSocketChange} />
        </div>
        <RuneList runeNames={runeNames} runeSelect={this.onRuneSelect} selectedRunes={this.state.selectedRunes} />
        {this.state.activatedD2R ?
          <CardList searchInput={this.state.searchfield} trueRunewords={filteredRW[0]} falseRunewords={filteredRW[1]}
            runewordsDesc={d2rRunewordsDesc} selectedRunes={this.state.selectedRunes}
          />
          :
          <CardList searchInput={this.state.searchfield} trueRunewords={filteredRW[0]} falseRunewords={filteredRW[1]}
            runewordsDesc={runewordsDesc} selectedRunes={this.state.selectedRunes}
          />
        }
        <ScrollToTop smooth style={{ backgroundColor: "transparent", boxShadow: "none", right: "0.8em" }} color="#fff" viewBox="0 0 255 255" preserveAspectRatio="none" />
        <Footer />
      </div>
    );
  }
}

export default App;