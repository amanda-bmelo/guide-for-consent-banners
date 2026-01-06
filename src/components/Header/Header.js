//cspell:disable
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Icon from "../Icon/Icon";
import "./Header.css";

function Header({ onOpenCounterExample }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleCounterExample = () => {
    closeMenu();
    if (onOpenCounterExample) {
      onOpenCounterExample();
    }
  };

  return (
    <Router>
      <nav className="header-nav">
        <div className="header-logo">
          <a href="#home" onClick={closeMenu}>
            <Icon svgPath={"cookie.svg"} className="icon" size={40} />
          </a>
        </div>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className={isMenuOpen ? 'open' : ''}>
          <li>
            <a href="#guide" onClick={closeMenu}>Guia</a>
          </li>
          <li>
            <a href="#preferences" onClick={closeMenu}>Preferências</a>
          </li>
          <li>
            <a href="#examples" onClick={closeMenu}>Exemplos</a>
          </li>
          <li>
            <a href="#checklist" onClick={closeMenu}>Checklist</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>Informações</a>
          </li>
          <li>
            <button className="counter-example-btn" onClick={handleCounterExample}>
              ⚠️ Contra-exemplo
            </button>
          </li>
        </ul>
      </nav>
    </Router>
  );
}

export default Header;
