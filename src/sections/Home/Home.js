import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <h1>Bem-vindo ao Guia de Banners de Consentimento</h1>
        <p>Seu guia completo para implementar banners de consentimento conforme LGPD e GDPR</p>
        <button className="cta-button">Começar Agora</button>
      </div>
    </section>
  );
};

export default Home;