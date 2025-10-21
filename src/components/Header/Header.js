

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../../sections/Home";
import About from "../../sections/About";
import Examples from "../../sections/Examples";
import Preferences from "../../sections/Preferences/Preferences";
import Guide from "../../sections/Guide/Guide";
import Icon from "../Icon/Icon";
import "./Header.css";

function Header() {
  return (
    <Router>
      <nav className="header-nav">
        <div className="header-logo">
          <Link to="/">
            <Icon svgPath={"cookie.svg"} className="icon" size={40} />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/guide">Guia</Link>
          </li>
          <li>
            <Link to="/preferences">Preferências</Link>
          </li>
          <li>
            <Link to="/examples">Exemplos</Link>
          </li>
          <li>
            <Link to="/about">Informações</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Header;
