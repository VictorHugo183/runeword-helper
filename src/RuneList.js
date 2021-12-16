import React from 'react';
import Rune from './Rune';
import './RuneList.css';

const RuneList = ({runeNames, runeSelect, selectedRunes}) =>{
  return(
    <div className="runeList">
      {
      runeNames.map(item => {
        return <Rune key={item} name={item} runeSelect={runeSelect} selectedRunes={selectedRunes}/>
      })
      }
    </div>
  );
}

export default RuneList;