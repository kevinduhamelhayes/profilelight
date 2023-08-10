import "./App.css"

function App() {
  return (
    <>
      <div className="title">
        <h1>Kevin Duhamel Hayes</h1>
      </div>
      <div className="sub-title">
        <h2 className="subtitle">DEV front-end en continuo aprendisaje</h2>
      </div>
      <div className="container">
        <div className="grid-30-70">
          <div className="grid-colum-1">
            <div>
              <h2 className="about-me-h2">sobre mi</h2>
              <p className="p-about-me">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                quibusdam, vero quas dolorum mollitia animi cum dolores
                reprehenderit quia. Corporis voluptates deleniti tempore quod,
                tenetur aliquam repudiandae optio voluptate in quia dolore
                possimus magnam temporibus incidunt eum minima, iure blanditiis
                sit minus, dolorum quam molestiae sed at! Praesentium, labore.
                Nihil, maiores maxime?
              </p>
            </div>
            <div>
              <h2 className="about-me-h2">contacto</h2>
              <li>
                <a href=""></a>email
              </li>
              <li>
                <a href=""></a> github
              </li>
              <li>
                <a href=""></a> linkedin
              </li>
            </div>
          </div>
          <div className="grid-colum-2">
            <div>
              <h2>experiencia laboral</h2>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora?
              </p>
              <ul>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              </ul>
              <div className="educacion">
                <h2>educacion</h2>
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
              </div>
              <h2>habilidades</h2>
              <div className="habilidades">
                <ul>
                  {" "}
                  <h2>leguages</h2>
                  <li>html</li>
                  <li>css</li>
                  <li>javascript</li>
                  <li>react</li>
                  <li>git</li>
                  <li>github</li>
                </ul>
                <ul>
                  {" "}
                  <h2>herramientas</h2>
                  <li>vscode</li>
                  <li>figma</li>
                  <li>photoshop</li>
                  <li>illustrator</li>
                </ul>
                <ul>
                  <h2>idiomas</h2>
                  <li>español</li>
                  <li>ingles</li>
                  <li>frances</li>
                </ul>
                <ul>
                  <h2>Frameworks</h2>
                  <li>bootstrap</li>
                  <li>materialize</li>
                  <li>bulma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
