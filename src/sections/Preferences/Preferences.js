// cspell:disable
import React, { useState, useRef } from "react";
import Card from "../../components/Card/Card";
import PreferencesModal from "../../components/PreferencesModal/PreferencesModal";
import "./Preferences.css";

const recommendations = [
  {
    text: "Quando temos muitas categorias de cookies, usamos um modal de preferências.",
    tags: ["UX"],
    highlightId: "modal",
  },
  {
    text: "Nesse modal, deve ter como recusar todos os cookies, ou desselecionar todos os não essenciais. (caso exista cookie essencial)",
    tags: ["LGPD", "UX"],
    highlightId: "buttons",
  },
  {
    text: "Cada categoria deve ter uma descrição sobre o que é. Mas não desperdice palavras. Exemplos são bem vindos para agilizar o entendimento.",
    tags: ["LGPD", "UX"],
    highlightId: "categories",
  },
  {
    text: "Tenha uma forma de confirmar as preferências selecionadas, geralmente, temos um botão.",
    tags: ["UX"],
    highlightId: "confirm",
  },
  {
    text: "Informe os parceiros envolvidos em qualquer compartilhamento de dados, quais são o nome dos envolvidos.",
    tags: ["LGPD"],
    highlightId: "partners",
  },
];

const Preferences = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const listRef = useRef(null);

  const highlightedElement = selectedElement || hoveredElement;

  const handleCardHover = (highlightId) => {
    setHoveredElement(highlightId);
  };

  const handleCardLeave = () => {
    setHoveredElement(null);
  };

  const handleCardClick = (highlightId, event) => {
    event.stopPropagation();
    setSelectedElement(highlightId);
  };

  const handleClearSelection = () => {
    setSelectedElement(null);
  };

  return (
    <section
      id="preferences"
      className="section preferences-section"
      onClick={handleClearSelection}
    >
      <div className="preferences-header">
        <h2>Modal de preferências</h2>
        <h3>Uma alternativa para gerenciar as categorias de cookies</h3>
      </div>
      <div className="preferences-content">
        <div className="preferences-modal-container">
          <PreferencesModal highlightedElement={highlightedElement} />
        </div>
        <div className="preferences-list" ref={listRef}>
          {recommendations.map((rec, idx) => (
            <div
              className={`preferences-item ${
                selectedElement === rec.highlightId ? "selected" : ""
              }`}
              key={idx + 1}
              onMouseEnter={() => handleCardHover(rec.highlightId)}
              onMouseLeave={handleCardLeave}
              onClick={(e) => handleCardClick(rec.highlightId, e)}
            >
              <Card
                number={idx + 1}
                text={rec.text}
                tags={rec.tags}
                variant="horizontal"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Preferences;
