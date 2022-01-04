import React from 'react';
import '../Styles/Rune.css';

const Rune = (props) =>{
  const {name, runeSelect, selectedRunes} = props;
  let className= "";
  if (selectedRunes[name] === false) {
     className = `pa2 ${name}-not-selected rune`;
  }
  else {
     className = `pa2 ${name}-selected rune`;
  }
  return(
      <span 
      className={`${className}`}
      onClick={() => runeSelect(name)}
      >
        <span className="label">{name}</span>
      </span>
  );
}

export default Rune;