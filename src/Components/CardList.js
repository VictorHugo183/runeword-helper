import React from 'react';
import Card from './Card';

const CardList = (props) => {
  const {trueRunewords, falseRunewords, runewordsDesc, searchInput, selectedRunes} = props;

  const trueCardsArray = trueRunewords.map((item, i) =>{
    return (
      <Card
        key={trueRunewords[i].title + i}
        title={trueRunewords[i].title}
        desc={runewordsDesc[trueRunewords[i].title]}
        runes={trueRunewords[i].runes.map(item => `${item} `)}
        runesList={trueRunewords[i].runes}
        types={trueRunewords[i].ttypes.map(item => `${item} `)}
        level={trueRunewords[i].level}
        ladder={trueRunewords[i].ladder}
        canMake={true}
        selectedRunes={selectedRunes}
      />
    );
  })

  const falseCardsArray = falseRunewords.map((item, i) => {
    return(
      <Card
        key={falseRunewords[i].title + i}
        title={falseRunewords[i].title}
        desc={runewordsDesc[falseRunewords[i].title]}
        runes={falseRunewords[i].runes.map(item => `${item} `)}
        runesList={falseRunewords[i].runes}
        types={falseRunewords[i].ttypes.map(item => `${item} `)}
        level={falseRunewords[i].level}
        ladder={falseRunewords[i].ladder}
        canMake={false}
        selectedRunes={selectedRunes}
      />
    );
  })

  const filteredTrueCards = trueCardsArray.filter((item, i) =>{
    return item.props.title.toLowerCase().includes(searchInput.toLowerCase());
  })

  const filteredFalseCards = falseCardsArray.filter((item, i) =>{
    return item.props.title.toLowerCase().includes(searchInput.toLowerCase());
  })

  return(
    <div className="cardsContainer">
      {filteredTrueCards}
      {filteredFalseCards}
    </div>
  );
}

export default CardList;
