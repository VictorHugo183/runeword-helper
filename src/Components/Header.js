import React from 'react';
import '../Styles/Header.css';
import logo from '../title.png';

const Header = () => {
  return(
    <>
    <div className="container">
      <img alt="Runeword Helper" src={logo}/>
    </div>
    <p className="patch-text">Up to date with Diablo II: Resurrected patch 2.4</p>
    </>
  );
}

export default Header;