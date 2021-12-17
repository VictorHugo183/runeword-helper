import React from 'react';
import logo from './githubLogo.png';
import './Footer.css';

const Footer = () => {
  return(
    <div className="footer">
      Development:  <a href="https://github.com/VictorHugo183/runeword-helper" target="_blank" rel="noreferrer">
        <img src={logo} alt="icon" className="footerImg"/> VictorHugo183/runeword-helper</a>
    </div>
  );
}

export default Footer;