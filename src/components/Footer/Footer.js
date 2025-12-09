import React from "react";
import "./Footer.css";
import tccSvg from "../../assets/images/tcc.svg";
import wesleySvg from "../../assets/images/wesley.svg";
import uffLogo from "../../assets/images/uff_logo.png";
import icLogo from "../../assets/images/ic_logo.png";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <img
            src={wesleySvg}
            alt="Black man with glasses and mortarboard hat"
          ></img>
          <p>
            A Idéia desse site foi inspirada por uma pesquisa de mestrado!{" "}
            <a href="https://www.ic.uff.br/teses-e-dissertacoes/">Nesse site</a>
            , vá em Dissertações, pesquise por Wesley Nunes.
          </p>
        </li>
        <li className="footer-logos">
          <img src={uffLogo} alt="Universidade Federal Fluminense logo"></img>
          <img src={icLogo} alt="Computer Institute logo"></img>
        </li>
        <li>
          <img src={tccSvg} alt="Document icon"></img>
          <p>
            Site desenvolvido pela aluna Amanda Melo como resultado do seu Trabalho de Conclusão de Curso.{" "}
            <a href="https://www.ic.uff.br/teses-e-dissertacoes/">Saiba mais</a>
          </p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
