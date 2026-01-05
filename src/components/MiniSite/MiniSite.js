// cspell:disable
import React from "react";
import "./MiniSite.css";

const MiniSite = ({ onButtonClick }) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div className="mini-site">
      {/* Browser Chrome */}
      <div className="browser-header">
        <div className="browser-buttons">
          <span className="browser-btn green"></span>
          <span className="browser-btn yellow"></span>
          <span className="browser-btn red"></span>
        </div>
        <div className="browser-address-bar">
          <span>www.exemplo.com.br</span>
        </div>
      </div>

      {/* Browser Content */}
      <div className="browser-content">
        <div className="site-content">
          {/* Hero Section */}
          <div className="placeholder-box hero">
            <div className="scroll-indicator">
              <span>↓</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="content-row">
            <div className="placeholder-box sidebar"></div>
            <div className="placeholder-lines">
              <div className="placeholder-line long"></div>
              <div className="placeholder-line medium"></div>
              <div className="placeholder-line long"></div>
              <div className="placeholder-line short"></div>
            </div>
          </div>

          {/* Tabs/Navigation */}
          <div className="placeholder-tabs">
            <div className="placeholder-tab"></div>
            <div className="placeholder-tab"></div>
            <div className="placeholder-tab"></div>
            <div className="placeholder-tab"></div>
            <div className="placeholder-tab"></div>
            <div className="placeholder-tab"></div>
          </div>

          {/* Content Section */}
          <div className="content-row">
            <div className="placeholder-lines">
              <div className="placeholder-line long"></div>
              <div className="placeholder-line medium"></div>
              <div className="placeholder-line long"></div>
              <div className="placeholder-line short"></div>
            </div>
            <div className="placeholder-box sidebar"></div>
          </div>

          {/* Fake Footer */}
          <div className="mini-footer">
            <div className="footer-lines">
              <div className="footer-line long"></div>
              <div className="footer-line medium"></div>
              <div className="footer-line short"></div>
              <div className="footer-line extra-short"></div>
            </div>
            <div className="footer-circles">
              <span className="footer-circle"></span>
              <span className="footer-circle"></span>
              <span className="footer-circle"></span>
              <span className="footer-circle"></span>
            </div>
          </div>
        </div>

        {/* Consent Banner */}
        <div className="mini-consent-banner">
          <div className="banner-content">
            <div className="banner-lines">
              <div className="banner-line long"></div>
              <div className="banner-line medium"></div>
            </div>
            <div className="banner-buttons">
              <button className="banner-btn accept" onClick={handleButtonClick}>
                Aceitar
              </button>
              <button className="banner-btn reject" onClick={handleButtonClick}>
                Recusar
              </button>
              <button className="banner-btn manage" onClick={handleButtonClick}>
                Gerenciar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniSite;
