import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>Sobre o Projeto</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Este projeto foi criado para ajudar desenvolvedores e empresas a implementarem 
              banners de consentimento que estejam em conformidade com a LGPD (Lei Geral de 
              Proteção de Dados) e GDPR (General Data Protection Regulation).
            </p>
            <p>
              Oferecemos templates, boas práticas e exemplos práticos para que você possa 
              implementar soluções de consentimento de forma eficiente e legal.
            </p>
          </div>
          <div className="about-features">
            <div className="feature">
              <h3>🛡️ Conformidade Legal</h3>
              <p>Templates em conformidade com LGPD e GDPR</p>
            </div>
            <div className="feature">
              <h3>⚡ Fácil Implementação</h3>
              <p>Códigos prontos e documentação clara</p>
            </div>
            <div className="feature">
              <h3>🎨 Customizável</h3>
              <p>Designs adaptáveis à sua marca</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;