// cspell:disable
import "./Examples.css";

const Examples = () => {
  return (
    <section id="examples" className="section examples-section">
      <h2>Pegue um exemplo de banner</h2>
      <h3>Você pode usar os protótipos abaixo</h3>
      <div className="examples-group">
        <ul className="examples-list">
          <li className="examples-item">
            <iframe
              title="Cookie Consent Banner Example 1"
              src="https://embed.figma.com/design/2prJ4RUgsjFpGgnAr5Rk5c/Cookie-Consent-Banner?node-id=0-1&embed-host=share"
              allowFullScreen
            ></iframe>
            <h4>Exemplo 1</h4>
          </li>
          <li className="examples-item">
            <iframe
              title="Cookie Consent Banner Example 2"
              src="https://embed.figma.com/design/2prJ4RUgsjFpGgnAr5Rk5c/Cookie-Consent-Banner?node-id=1-2&embed-host=share"
              allowFullScreen
            ></iframe>
            <h4>Exemplo 2</h4>
          </li>
          <li className="examples-item">
            <iframe
              title="Cookie Consent Banner Example 3"
              src="https://embed.figma.com/design/2prJ4RUgsjFpGgnAr5Rk5c/Cookie-Consent-Banner?node-id=1-3&embed-host=share"
              allowFullScreen
            ></iframe>
            <h4>Exemplo 3</h4>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Examples;
