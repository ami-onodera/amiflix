import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img className="Logo" src={Logo} alt="AmiFlix logo" />
      </Link>
      <p>
        Created with JavaScript and React
        {' '}
        <a href="https://github.com/ami-onodera" target="blank">
          by Ami Onodera
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
