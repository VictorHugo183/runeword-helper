import React from 'react';
import '../Styles/SearchBox.css';

const SearchBox = ({searchChange}) =>{
  return(
    <div className="pa2">
      <input 
      className="searchBox"
      type="search"
      placeholder="search runewords"
      onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;