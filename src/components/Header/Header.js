import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Icon from "../Icon/Icon";
import "./Header.css";

function Header() {
  return (
    <Router>
      <nav className="header-nav">
        <div className="header-logo">
          <a href="#home">
            <Icon svgPath={"cookie.svg"} className="icon" size={40} />
          </a>
        </div>
        <ul>
          <li>
            <a href="#guide">Guia</a>
          </li>
          <li>
            <a href="#preferences">Preferências</a>
          </li>
          <li>
            <a href="#examples">Exemplos</a>
          </li>
          <li>
            <a href="#about">Informações</a>
          </li>
        </ul>
      </nav>
    </Router>
  );
}

export default Header;
