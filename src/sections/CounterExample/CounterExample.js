//cspell:disable
import React, { useState } from "react";
import "./CounterExample.css";

const CounterExample = ({ isOpen, onClose }) => {
  const [showPreferences, setShowPreferences] = useState(false);

  if (!isOpen) return null;

  const handleFakeClose = () => {
  };

  const handleDefine = () => {
    setShowPreferences(true);
  };

  const handleBack = () => {
    setShowPreferences(false);
  };

  const handleConfirm = () => {
    onClose();
  };

  return (
    <div className="counter-overlay">
      <div className="counter-modal">
        <div className="counter-badge">
          <span className="counter-badge-icon">⚠️</span>
          <span>CONTRA-EXEMPLO</span>
        </div>

        <button className="counter-close" onClick={handleFakeClose} title="Fechar">
          ✕
        </button>

        {!showPreferences ? (
          <div className="counter-content">
            <h2 className="counter-title">Nós usamos cookies</h2>
            
            <p className="counter-text">
              Seus dados pessoais serão coletados devido ao nosso interesse legítimo. 
              Tratamos as suas informações pessoais para medir e melhorar os nossos sites, 
              não vamos dizer quais sites. Também vamos usá-los para personalizar a sua 
              experiência, para melhorar nossas campanhas de marketing e fornecer conteúdo 
              de publicidade personalizado! Você pode exercer os seus direitos de privacidade, 
              clicando no último botão. Para mais informações consulte o nosso aviso de 
              privacidade e política de cookies. Não vamos contar onde você pode encontrá-los.
            </p>

            <div className="counter-actions">
              <button className="counter-btn-accept" onClick={onClose}>
                Aceitar Cookies
              </button>
              <button className="counter-btn-define" onClick={handleDefine}>
                Definir Cookies
              </button>
            </div>
          </div>
        ) : (
          <div className="counter-content">
            <h2 className="counter-title">Definir cookies</h2>
            
            <div className="counter-categories">
              <div className="counter-category">
                <label className="counter-toggle">
                  <input type="checkbox" checked disabled />
                  <span className="counter-toggle-slider"></span>
                </label>
                <div className="counter-category-info">
                  <strong>Cookies funcionais</strong>
                  <p>Estes cookies são essenciais para o funcionamento do website.</p>
                </div>
              </div>

              <div className="counter-category">
                <label className="counter-toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="counter-toggle-slider"></span>
                </label>
                <div className="counter-category-info">
                  <strong>Cookies analíticos</strong>
                  <p>Os cookies analíticos nos permitem analisar padrões do comportamento do visitante.</p>
                </div>
              </div>

              <div className="counter-category">
                <label className="counter-toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="counter-toggle-slider"></span>
                </label>
                <div className="counter-category-info">
                  <strong>Cookies promocionais</strong>
                  <p>Estes cookies são utilizados para localizar visitantes através de websites.</p>
                </div>
              </div>
            </div>

            <div className="counter-actions">
              <button className="counter-btn-confirm" onClick={handleConfirm}>
                Confirmar escolhas
              </button>
            </div>

            <button className="counter-back" onClick={handleBack}>
              ← Voltar
            </button>
          </div>
        )}

        <div className="counter-warning">
          <strong>🚫 Este é um exemplo de banner MAL feito!</strong>
          <p>Identifique os problemas: texto confuso, botões manipulativos, sem opção de rejeitar facilmente, o botão de fechar é falso...</p>
        </div>
      </div>
    </div>
  );
};

export default CounterExample;
