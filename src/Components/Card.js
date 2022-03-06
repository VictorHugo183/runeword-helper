import React from 'react';
import '../Styles/Card.css'

const Card = (props) => {
  const { title, desc, types, level, ladder, canMake, selectedRunes, runesList } = props;
  let runeElements = [];

  //For every rune needed to make the runeword, check if you own it (state is true), create new Span element containing the rune name
  //and set its class according to if it is true or false (this will determine the text colour).
  for(let i = 0; i < runesList.length; i++){
    if(selectedRunes[runesList[i]] === true){
      runeElements.push(<span className="runes" key={runesList[i] + i}>{runesList[i]} </span>)
    }
    else{
      runeElements.push(<span className="level" key={runesList[i] + i}>{runesList[i]} </span>)
    }
  }

  let canMakeClass = canMake ? 'canMake' : 'cantMake';

  return (
    <div className={`rw-card dib br2 pa1 ma2 tc bw1 ${canMakeClass}`}>
      {ladder && <div className="ladder-ribbon">Ladder</div>}
      <h2>{title}</h2>
      <p>{runeElements}</p>
      <p className="types">{types}</p>
      <p className="level">Required level: {level}</p>
      <p className="description">{desc}</p>
      {ladder && <p className="ladder">Ladder Only</p>}
    </div>
  );
}

export default Card;