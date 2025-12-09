import "./Examples.css";
import figmaAnimation from "../../assets/images/figma_animation.gif";

const Examples = () => {
  return (
    <section id="examples" className="section examples-section">
      <h2>Pegue um protótipo do Figma</h2>
      <h3>Clique na imagem para abrir o projeto que deseja</h3>
      <div className="examples-group">
        <ul className="examples-list">
          <li className="examples-item">
            <iframe
              title="Cookie Consent Banner Example 1"
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width="450"
              height="450"
              src="https://embed.figma.com/design/2prJ4RUgsjFpGgnAr5Rk5c/Cookie-Consent-Banner?node-id=0-1&embed-host=share"
              allowFullScreen
            ></iframe>
            <h4>Exemplo 1</h4>
          </li>
          <li className="examples-item">
            <iframe
              title="Cookie Consent Banner Example 2"
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width="450"
              height="450"
              src="https://embed.figma.com/design/2prJ4RUgsjFpGgnAr5Rk5c/Cookie-Consent-Banner?node-id=1-2&embed-host=share"
              allowFullScreen
            ></iframe>
            <h4>Exemplo 2</h4>
          </li>
          <li className="examples-item">
            <iframe
              title="Cookie Consent Banner Example 3"
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width="450"
              height="450"
              src="https://embed.figma.com/design/2prJ4RUgsjFpGgnAr5Rk5c/Cookie-Consent-Banner?node-id=1-3&embed-host=share"
              allowFullScreen
            ></iframe>
            <h4>Exemplo 3</h4>
          </li>
        </ul>
        <div className="examples-animation">
          <img
            className="examples-animation"
            src={figmaAnimation}
            alt="Gif animation of letter F from Figma logo"
          />
          <p>Animação por Sérgio Cabañero</p>
        </div>
      </div>
    </section>
  );
};

export default Examples;
