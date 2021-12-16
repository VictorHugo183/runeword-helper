import React from 'react';
import logo from './githubLogo.png';
import './Footer.css';

const Footer = () => {
  return(
    <div className="footer">
    Development:  <a href=""><img src={logo} alt="icon" className="footerImg"/> VictorHugo183</a>
    </div>
  );
}

export default Footer;