import React, { useState } from "react";
import "./BannerDemo.css";
import bannerCookie1 from "../../assets/icons/banner_cookie_1.svg";
import bannerCookie2 from "../../assets/icons/banner_cookie_2.svg";
import bannerCookie3 from "../../assets/icons/banner_cookie_3.svg";

const cookieIcons = {
  1: bannerCookie1,
  2: bannerCookie2,
  3: bannerCookie3,
};

// Banner 1 - Simples com 3 botões
export const Banner1 = ({ recommendationNumber = 0, onAction }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleAction = (action) => {
    if (onAction) onAction(action);
    setIsMinimized(true);
  };

  if (isMinimized) {
    return (
      <div className="banner-minimized" onClick={() => setIsMinimized(false)}>
        <img src={cookieIcons[1]} alt="Cookie" />
      </div>
    );
  }

  return (
    <div className="banner-demo banner-1">
      <div className="banner-text-content">
        <p className={`${recommendationNumber < 3 ? "blurred" : ""}`}>
          Nós usamos cookies para coletar dados pessoais, e estamos de acordo
          com a LGPD para realizar a coleta, o tratamento e o compartilhamento
          desses dados.
        </p>
        <p className={`${recommendationNumber < 4 ? "display-none" : ""}`}>
          Os dados que coletaremos é sobre a sua navegação no site, escolhas e
          buscas realizadas. Nosso objetivo é criar métricas para melhorar o
          nosso negócio.
        </p>
        <p className={`${recommendationNumber < 5 ? "display-none" : ""}`}>
          Saiba mais em nossa{" "}
          <a href="https://www.gov.br/pt-br/termos-de-uso">
            política de privacidade
          </a>
          .
        </p>
        <p
          className={`banner-subtext ${
            recommendationNumber < 6 ? "display-none" : ""
          }`}
        >
          Quando fizer sua escolha, não se preocupe, o banner será minimizado.
        </p>
      </div>
      <div className="banner-actions">
        <button className="btn-accept" onClick={() => handleAction("accept")}>
          Aceitar
        </button>
        <button className="btn-reject" onClick={() => handleAction("reject")}>
          Recusar
        </button>
        <button className="btn-manage" onClick={() => handleAction("manage")}>
          Gerenciar
        </button>
      </div>
    </div>
  );
};

// Banner 2 - Com toggles de cookies
export const Banner2 = ({ recommendationNumber = 0, onAction }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [cookies, setCookies] = useState({
    analytics: true,
    marketing: true,
    preferences: true,
  });

  const handleToggle = (cookie) => {
    setCookies((prev) => ({ ...prev, [cookie]: !prev[cookie] }));
  };

  const handleAction = (action) => {
    if (onAction) onAction(action);
    setIsMinimized(true);
  };

  if (isMinimized) {
    return (
      <div className="banner-minimized" onClick={() => setIsMinimized(false)}>
        <img src={cookieIcons[2]} alt="Cookie" />
      </div>
    );
  }

  return (
    <div className="banner-demo banner-2">
      {/* Texto principal no topo */}
      <div className="banner-text-content banner-2-top">
        <p className={`${recommendationNumber < 3 ? "blurred" : ""}`}>
          Usamos cookies para coletar dados de como é a sua interação com o
          site, clicks, pesquisas, escolhas, perfil. Para isso, seguimos as
          normas da LGPD.
        </p>
        <p className={`${recommendationNumber < 4 ? "display-none" : ""}`}>
          Nossa finalidade é entregar conteúdos mais próximos do seu interesse
          e aumentar o engajamento com o site.
        </p>
      </div>
      
      {/* Layout dividido: texto secundário + toggles */}
      <div className="banner-2-layout">
        <div className="banner-text-content banner-2-secondary">
          <p
            className={`banner-subtext ${
              recommendationNumber < 6 ? "display-none" : ""
            }`}
          >
            Ao confirmar suas escolhas ou recusar todos, o banner será
            minimizado. Assim, você pode reabrir e mudar quando quiser.
          </p>
          <p className={`${recommendationNumber < 5 ? "display-none" : ""}`}>
            <a href="https://www.gov.br/pt-br/termos-de-uso">
              Declaração de cookies
            </a>
          </p>
        </div>
        <div
          className={`banner-toggles ${
            recommendationNumber < 7 ? "display-none" : ""
          }`}
        >
          <div className="toggle-item">
            <label className="toggle">
              <input
                type="checkbox"
                checked={cookies.analytics}
                onChange={() => handleToggle("analytics")}
              />
              <span className="toggle-slider"></span>
            </label>
            <div className="toggle-lines">
              <span className="line">
                <strong>Cookie de Linguagem:</strong> Serve para redirecionar a
                pessoa para a pasta de idioma correta. Dura 7 dias.
              </span>
            </div>
          </div>
          <div className="toggle-item">
            <label className="toggle">
              <input
                type="checkbox"
                checked={cookies.marketing}
                onChange={() => handleToggle("marketing")}
              />
              <span className="toggle-slider"></span>
            </label>
            <div className="toggle-lines">
              <span className="line">
                <strong>Cookie de Captcha:</strong> Tem como finalidade fornecer
                a análise de risco do usuário. Dura 180 dias.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-actions banner-2-actions">
        <button className="btn-confirm" onClick={() => handleAction("confirm")}>
          Confirmar escolhas
        </button>
        <button
          className="btn-reject-all"
          onClick={() => handleAction("reject")}
        >
          Recusar todos
        </button>
      </div>
    </div>
  );
};

// Banner 3 - Com 3 opções de aceite
export const Banner3 = ({ recommendationNumber = 0, onAction }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleAction = (action) => {
    if (onAction) onAction(action);
    setIsMinimized(true);
  };

  if (isMinimized) {
    return (
      <div className="banner-minimized" onClick={() => setIsMinimized(false)}>
        <img src={cookieIcons[3]} alt="Cookie" />
      </div>
    );
  }

  return (
    <div className="banner-demo banner-3">
      <div className="banner-text-content">
        <p className={`${recommendationNumber < 3 ? "blurred" : ""}`}>
          Nós usamos cookies! Estamos de acordo com a LGPD para lidar com os
          seus dados de forma segura.
        </p>
        <p className={`${recommendationNumber < 4 ? "display-none" : ""}`}>
          Coletamos dados de como você interage na nossa plataforma, quais são
          os conteúdos que te interessam, e qual o seu perfil, para melhorar a
          priorização de conteúdos que sejam do seu interesse.
        </p>
        <p className={`${recommendationNumber < 5 ? "display-none" : ""}`}>
          Para maiores detalhes acesse o nosso{" "}
          <a href="https://www.gov.br/pt-br/termos-de-uso">
            Termo de privacidade
          </a>
          .
        </p>
        <p
          className={`banner-subtext ${
            recommendationNumber < 6 ? "display-none" : ""
          }`}
        >
          Ao finalizar com o banner, ele será minimizado, você pode mudar as
          escolhas sempre que quiser!
        </p>
      </div>
      <div className="banner-actions banner-3-actions">
        <button
          className="btn-accept-necessary"
          onClick={() => handleAction("necessary")}
        >
          Aceitar somente os necessários
        </button>
        <button
          className="btn-accept-all"
          onClick={() => handleAction("accept")}
        >
          Aceitar todos
        </button>
        <button
          className="btn-manage-alt"
          onClick={() => handleAction("manage")}
        >
          Gerenciar
        </button>
      </div>
    </div>
  );
};

// Container que mostra os 3 banners
export const BannerShowcase = ({ recommendationNumber = 0 }) => {
  return (
    <div className="banner-showcase">
      <Banner1 recommendationNumber={recommendationNumber} />
      <Banner2 recommendationNumber={recommendationNumber} />
      <Banner3 recommendationNumber={recommendationNumber} />
    </div>
  );
};

export default BannerShowcase;
