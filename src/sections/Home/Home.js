import React from "react";
import "./Home.css";
import Icon from "../../components/Icon/Icon";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <h1>
          Guia para desenvolver banners de consentimento de cookies{" "}
          <strong className="legally">legalmente</strong> e{" "}
          <strong className="cool">legais</strong>
        </h1>
        <a href="#guide" className="down-arrow">
          <Icon svgPath={"down_arrow.svg"} className="icon" size={64} />
        </a>
      </div>
    </section>
  );
};

export default Home;
