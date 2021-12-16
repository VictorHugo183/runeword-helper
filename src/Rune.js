import React from 'react';
import './Rune.css';

const Rune = (props) =>{
  const {name, runeSelect, selectedRunes} = props;
  let className= "";
  if (selectedRunes[name] === false) {
     className = "pa2 not-selected rune";
  }
  else {
     className = " pa2 selected rune";
  }
  return(
      <span 
      className={`${className}`}
      onClick={() => runeSelect(name)}
      >
        {name}
      </span>
  );
}

export default Rune;