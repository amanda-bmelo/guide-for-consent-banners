import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../../sections/Home";
import About from "../../sections/About";
import Examples from "../../sections/Examples";
import Preferences from "../../sections/Preferences/Preferences";
import Guide from "../../sections/Guide/Guide";
import Icon from "../Icon/Icon";

function Header() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <Icon svgPath={"cookie.svg"} />
            </Link>
          </li>
          <li>
            <Link to="/guide">Guide</Link>
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
