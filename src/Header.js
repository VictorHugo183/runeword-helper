import React from 'react';
import './Header.css';
import logo from './title.png';

const Header = () => {
  return(
    <div className="container">
      <img alt="Runeword Helper" src={logo}/>
    </div>
  );
}

export default Header;