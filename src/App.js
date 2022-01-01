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
      activatedD2R : true
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

  render(){
    const runeNames = runes.map(rune => rune.name);
    let filteredRW;

    if(this.state.activatedD2R){
      filteredRW = this.filterRunes(this.state.d2rRunewords);
    } else{
      filteredRW = this.filterRunes(this.state.runewords);
    }

    if(this.state.activatedD2R){
      return (
        <div className="tc">
          <Header />
          <SearchBox searchChange={this.onSearchChange} />
          <ModeToggle activatedD2R={this.state.activatedD2R} modeToggle={this.modeToggle} />
          <SelectButtons selectAll={this.selectAll} deselectAll={this.deselectAll} />
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