// cspell:disable
import React, { useState } from "react";
import Card from "../../components/Card/Card";
import MiniSite from "../../components/MiniSite/MiniSite";
import BannerShowcase from "../../components/BannerDemo/BannerDemo";
import "./Guide.css";

const recommendations = [
  {
    text: "Devemos ter um banner de consetimento, sem restringir a navegação.",
    tags: ["UX", "LGPD"],
    image: "rec1.png",
  },
  {
    text: "Livre escolha das pessoas, deve ter formas diretas para rejeitar, aceitar e gerenciar.",
    tags: ["UX", "LGPD"],
    image: "rec2.png",
  },
  {
    text: "Informar que a coleta de cookies utilizada está de acordo a LGPD.",
    tags: ["UX"],
    image: "rec3.png",
  },
  {
    text: "Diga quais dados serão coletados e qual a finalidade disso. Simples e direto.",
    tags: ["LGPD"],
    image: "rec4.png",
  },
  {
    text: " Aponte onde encontrar a sua política de privacidade.",
    tags: ["UX"],
    image: "rec5.png",
  },
  {
    text: "Permitir a pessoa usuária alterar suas escolhas iniciais.",
    tags: ["LGPD"],
    image: "rec6.png",
  },
  {
    text: "Tenha um meio facilitado de gerenciar as preferências de quais cookies a pessoa aceita.",
    tags: ["UX", "LGPD"],
    image: "rec7.png",
  },
];

const Guide = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  const scrollToRecommendation = (index) => {
    const guideItems = document.querySelectorAll(".guide-item");
    if (guideItems[index]) {
      guideItems[index].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleFilterClick = (tag) => {
    setActiveFilter(activeFilter === tag ? null : tag);
  };

  const filteredRecommendations = activeFilter
    ? recommendations.filter((rec) => rec.tags.includes(activeFilter))
    : recommendations;

  return (
    <section id="guide" className="section guide-section">
      <div className="guide-header">
        <h2>Guia interativo</h2>
        <h3>Recomendações básicas para desenvolver banners</h3>
      </div>

      <div className="guide-filter">
        <p className="filter-description">
          As tags indicam se a recomendação tem origem nas boas práticas de UX ou nos princípios da LGPD.
        </p>
        <div className="filter-buttons">
          <h4>Filtre por uma tag</h4>
          <button
            className={`filter-btn filter-btn-ux ${activeFilter === "UX" ? "active" : ""}`}
            onClick={() => handleFilterClick("UX")}
          >
            UX
          </button>
          <button
            className={`filter-btn filter-btn-lgpd ${activeFilter === "LGPD" ? "active" : ""}`}
            onClick={() => handleFilterClick("LGPD")}
          >
            LGPD
          </button>
          {activeFilter && (
            <button
              className="filter-btn filter-btn-clear"
              onClick={() => setActiveFilter(null)}
            >
              Limpar filtro
            </button>
          )}
        </div>
      </div>

      <div className="guide-list">
        {filteredRecommendations.map((rec) => {
          const originalIndex = recommendations.indexOf(rec);
          return (
            <div className="guide-item" key={originalIndex + 1}>
              <Card number={originalIndex + 1} text={rec.text} tags={rec.tags} />
              <div className="guide-image">
                {originalIndex === 0 ? (
                  <MiniSite onButtonClick={() => scrollToRecommendation(1)} />
                ) : (
                  <BannerShowcase recommendationNumber={originalIndex + 1} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Guide;
