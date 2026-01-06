// cspell:disable
import React, { useState, useEffect } from "react";
import "./Checklist.css";

const guideRecommendations = [
  "Devemos ter um banner de consentimento, sem restringir a navegação.",
  "Livre escolha das pessoas, deve ter formas diretas para rejeitar, aceitar e gerenciar.",
  "Informar que a coleta de cookies utilizada está de acordo a LGPD.",
  "Diga quais dados serão coletados e qual a finalidade disso. Simples e direto.",
  "Aponte onde encontrar a sua política de privacidade.",
  "Permitir a pessoa usuária alterar suas escolhas iniciais.",
  "Tenha um meio facilitado de gerenciar as preferências de quais cookies a pessoa aceita.",
];

const preferencesRecommendations = [
  "Quando temos muitas categorias de cookies, usamos um modal de preferências.",
  "Nesse modal, deve ter como recusar todos os cookies, ou desselecionar todos os não essenciais.",
  "Cada categoria deve ter uma descrição sobre o que é. Exemplos são bem vindos para agilizar o entendimento.",
  "Tenha uma forma de confirmar as preferências selecionadas, geralmente, temos um botão.",
  "Informe os parceiros envolvidos em qualquer compartilhamento de dados.",
];

const Checklist = () => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem("checklistItems");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("checklistItems", JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleClearAll = () => {
    setCheckedItems({});
  };

  const totalItems = guideRecommendations.length + preferencesRecommendations.length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (checkedCount / totalItems) * 100;

  return (
    <section id="checklist" className="section checklist-section">
      <div className="checklist-header">
        <h2>Checklist</h2>
        <h3>Resumo das recomendações para verificar no seu banner</h3>
      </div>

      <div className="checklist-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="progress-text">
          {checkedCount} de {totalItems} concluídos
        </span>
        {checkedCount > 0 && (
          <button className="clear-btn" onClick={handleClearAll}>
            Limpar tudo
          </button>
        )}
      </div>

      <div className="checklist-content">
        <div className="checklist-group">
          <h4 className="group-title group-title-guide">
            Recomendações do Banner
          </h4>
          <ul className="checklist-list">
            {guideRecommendations.map((item, idx) => (
              <li 
                key={`guide-${idx}`} 
                className={`checklist-item ${checkedItems[`guide-${idx}`] ? "checked" : ""}`}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={checkedItems[`guide-${idx}`] || false}
                    onChange={() => handleCheck(`guide-${idx}`)}
                  />
                  <span className="checkmark"></span>
                  <span className="item-number">{idx + 1}.</span>
                  <span className="item-text">{item}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="checklist-group">
          <h4 className="group-title group-title-preferences">
            Recomendações do Modal de Preferências
          </h4>
          <ul className="checklist-list">
            {preferencesRecommendations.map((item, idx) => (
              <li 
                key={`pref-${idx}`} 
                className={`checklist-item ${checkedItems[`pref-${idx}`] ? "checked" : ""}`}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={checkedItems[`pref-${idx}`] || false}
                    onChange={() => handleCheck(`pref-${idx}`)}
                  />
                  <span className="checkmark"></span>
                  <span className="item-number">{idx + 1}.</span>
                  <span className="item-text">{item}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Checklist;
