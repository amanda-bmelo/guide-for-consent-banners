// cspell:disable
import React from "react";
import "./About.css";
import mapImage from "../../assets/images/map.svg";
import lawImage from "../../assets/images/law.svg";
import jarImage from "../../assets/images/cookie_jar.svg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>Informações</h2>
      <div className="about-list">
        <div className="about-item">
          <div className="section about-content">
            <h3>Sobre o Guia</h3>
            <p>
              A ideia do Guia surge da pesquisa de mestrado do Wesley da Silva,
              em que foi descoberto que a maioria dos sites que utilizam
              banners, para coletar o consentimento das pessoas, estão
              infringindo a LGPD. Em outros casos, os banners utilizam de
              estratégias de persuasão conhecidas como padrões enganosos ou
              decepcionantes.
            </p>
            <p>Principais motivações:</p>
            <ul className="guide-subsection">
              <li>Compartilhar descobertas</li>
              <li>Entender sobre interatividade em banners</li>
              <li>Pouca documentação sobre banners</li>
              <li>Faltam pesquisas em LGPD e UX</li>
            </ul>
          </div>
          <div className="about-image">
            <img src={mapImage} alt="Mapa do tesouro" />
          </div>
        </div>
      </div>
      <div className="about-list">
        <div className="about-item">
          <div className="about-image">
            <img src={jarImage} alt="Pote de cookies" />
          </div>
          <div className="section about-content">
            <h3>O que são cookies?</h3>
            <p>
              Um arquivo de texto que é enviado por um servidor web para o
              navegador de internet no momento em que o usuário acessa um
              endereço web, o arquivo é armazenado no disco rígido do
              dispositivo (computador ou smartphone).
            </p>
            <p>Exemplos de informações coletadas através de cookies:</p>
            <ul className="cookies-subsection">
              <li>Páginas e conteúdos acessados</li>
              <li>Endereço IP7</li>
              <li>Data e hora</li>
              <li>Informações de localização</li>
              <li>Sistema Operacional</li>
              <li>Tipo de navegador</li>
              <li>Informações do dispositivo usado</li>
              <li className="saiba-mais about-cookies">
                <a
                  href="https://goadopt.io/blog/cookies-e-lgpd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saiba mais
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-list">
        <div className="about-item">
          <div className="section about-content">
            <h3>O que é a LGPD?</h3>
            <p>
              A Lei Geral de Proteção de Dados foi criada para o contexto
              brasileiro em 2018, é proposta para estabelecer princípios,
              direitos e obrigações relacionados a utilização de dados pessoais.
            </p>
            <p>Princípios da LGPD para o tratamento de dados:</p>
            <ul className="lgpd-subsection">
              <li>prestação de contas</li>
              <li>finalidade</li>
              <li>livre acesso</li>
              <li>segurança</li>
              <li>prevenção da não discriminação</li>
              <li>adequação</li>
              <li>necessidade</li>
              <li>transparência</li>
              <li>qualidade dos dados</li>
              <li>responsabilização</li>
              <li className="saiba-mais about-lgpd">
                <a
                  href="https://www.gov.br/esporte/pt-br/acesso-a-informacao/lgpd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saiba mais
                </a>
              </li>
            </ul>
          </div>
          <div className="about-image">
            <img src={lawImage} alt="Imagem da lei" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
