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
/*   componentDidMount(){
    const data = JSON.parse(window.localStorage.getItem('runeword-helper'));
    if(data){
      this.setState({selectedRunes: data})
    }
  } */
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

  render(){
    const runeNames = runes.map(rune => rune.name);
    let trueFilter;

    /* filter by searchbox input, then filter by runewords which ALL the required runes are true */
    if(this.state.activatedD2R){
      trueFilter = this.state.d2rRunewords.filter(item => {
        return item.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
      }).filter(item => {
        //true if EVERY rune present in the runes array of a runeword has a corresponding true value in the selectedRunes state
        return item.runes.every(rune => this.state.selectedRunes[rune])
      })
    }
    else{
      trueFilter = this.state.runewords.filter(item => {
        return item.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
      }).filter(item => {
        return item.runes.every(rune => this.state.selectedRunes[rune])
      })
    }

    if(this.state.activatedD2R){
      return (
        <div className="tc">
          <Header />
          <SearchBox searchChange={this.onSearchChange} />
          <ModeToggle activatedD2R={this.state.activatedD2R} modeToggle={this.modeToggle} />
          <SelectButtons selectAll={this.selectAll} deselectAll={this.deselectAll} />
          <RuneList runeNames={runeNames} runeSelect={this.onRuneSelect} selectedRunes={this.state.selectedRunes} />
          <CardList runewords={trueFilter} runewordsDesc={d2rRunewordsDesc} />
          <ScrollToTop smooth style={{ backgroundColor: "#777", right: "10px" }} color="262626" viewBox="0 0 256 256" preserveAspectRatio="none"/>
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
          <CardList runewords={trueFilter} runewordsDesc={runewordsDesc} />
          <ScrollToTop smooth style={{ backgroundColor: "#777", right: "10px" }} color="262626" viewBox="0 0 256 256" preserveAspectRatio="none"/>
          <Footer />
        </div>
      )
    }
  }
}

export default App;