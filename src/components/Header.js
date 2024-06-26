// src/components/Header.js
import React, { useState } from 'react';
// import './Header.css';
import './Style.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <a href="#" className="logo">Samia Dewan Ria</a>
      {/* <FontAwesomeIcon icon={faBars} id="menu-icon" on
      Click={toggleMenu} /> */}
      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Experinces & Skills</a>
        <a href="#portfolio">Projects</a>
        <a href="#problemsolve">ProblemSolve</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
