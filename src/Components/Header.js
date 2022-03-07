import React from 'react';
import '../Styles/Header.css';
import logo from '../title.png';

const Header = () => {
  return(
    <>
    <div className="container">
      <img alt="Runeword Helper" src={logo}/>
        <p className="patch-text">Up to date with Diablo II: Resurrected patch <span>2.4</span></p>
    </div>

    </>
  );
}

export default Header;