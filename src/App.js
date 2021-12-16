import React from 'react';
import CardList from './CardList';
import runewords from './runewords';
import runewordsDesc from './runewords-descriptions';
import SearchBox from './SearchBox'
import runes from './runes';
import RuneList from './RuneList';
import SelectButtons from './SelectButtons';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      runewords: runewords,
      searchfield: '',
      selectedRunes: {
        El: true, Eld: true, Tir: true, Nef: true, Eth: true, Ith: true, Tal: true,
        Ral: true, Ort: true, Thul: true, Amn: true, Sol: true, Shael: true,
        Dol: true, Hel: true, Io: true, Lum: true, Ko: true, Fal: true, Lem: true,
        Pul: true, Um: true, Mal: true, Ist: true, Gul:true, Vex: true, Ohm: true,
        Lo: true, Sur:true, Ber: true, Jah:true, Cham: true, Zod:true
      }
    }
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

  render(){
    const runeNames = runes.map(rune => rune.name);

    /* filter by searchbox input, then filter by runewords which ALL the required runes are true */
    const trueFilter = this.state.runewords.filter(item =>{
      return item.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    }).filter(item => {
      return item.runes.every(rune => this.state.selectedRunes[rune])
    })

    return(
      <div className="tc">
        <Header />
        <SearchBox searchChange={this.onSearchChange}/>
        <SelectButtons selectAll={this.selectAll} deselectAll={this.deselectAll} />
        <RuneList runeNames={runeNames} runeSelect={this.onRuneSelect} selectedRunes={this.state.selectedRunes}/>
        <CardList runewords={trueFilter} runewordsDesc={runewordsDesc} />
        <Footer />
      </div>
    )
  }
}

export default App;