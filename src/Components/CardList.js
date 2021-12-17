import React from 'react';
import Card from './Card';

const CardList = (props) => {
  const {runewords, runewordsDesc} = props;

  const cardsArray = runewords.map((item, i) =>{
    return( 
      <Card 
        key={runewords[i].title}
        title={runewords[i].title}
        desc={runewordsDesc[runewords[i].title]}
        runes={runewords[i].runes.map(item => `${item} `)}
        types={runewords[i].ttypes.map(item => `${item} `)}
        level={runewords[i].level}
        ladder={runewords[i].ladder}
      />
    );
  })
  
  return(
    <div>
      {cardsArray}
    </div>
  );
}

export default CardList;