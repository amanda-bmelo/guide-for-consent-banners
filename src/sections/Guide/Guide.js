// cspell:disable
import React from "react";
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
  const scrollToRecommendation = (index) => {
    const guideItems = document.querySelectorAll(".guide-item");
    if (guideItems[index]) {
      guideItems[index].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="guide" className="section guide-section">
      <div className="guide-header">
        <h2>Guia interativo</h2>
        <h3>Recomendações básicas para desenvolver banners</h3>
      </div>
      <div className="guide-list">
        {recommendations.map((rec, idx) => (
          <div className="guide-item" key={idx + 1}>
            <Card number={idx + 1} text={rec.text} tags={rec.tags} />
            <div className="guide-image">
              {idx === 0 ? (
                <MiniSite onButtonClick={() => scrollToRecommendation(1)} />
              ) : (
                <BannerShowcase recommendationNumber={idx + 1} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guide;
