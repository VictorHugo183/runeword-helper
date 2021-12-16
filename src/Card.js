import React from 'react';
import './Card.css'

const Card = (props) => {
  const {title,desc,runes,types,level,ladder} = props;
    if(ladder){
    return(
      <div className='rw-card dib br2 pa1 ma2 grow tc bw2'>
        <h2>{title}</h2>
        <p className="runes">{runes}</p>
        <p className="types">{types}</p>
        <p className="level">Required level: {level}</p>
        <p className="description">{desc}</p>
        <p className="ladder">Ladder Only</p>
      </div>
    );
  } else{
      return (
        <div className='rw-card dib br2 pa1 ma2 grow tc bw2'>
          <h2>{title}</h2>
          <p className="runes">{runes}</p>
          <p className="types">{types}</p>
          <p className="level">Required level: {level}</p>
          <p className="description">{desc}</p>
        </div>
          );
  }
}

export default Card;