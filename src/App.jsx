import "./App.css"

function App() {
  return (
    <>
    <main>
      <div className="title-section">
        <h1 className="main-title">Kevin Duhamel Hayes</h1>
        <h2 className="subtitle">
          Desarrollador Front-End en continuo aprendizaje
        </h2>
      </div>

      <div className="container">
        <div className="grid-30-70">
          <div className="side-panel">
            <section className="about-section">
              <h2 className="section-title">Sobre mí</h2>
              <p className="section-description">
                Soy Kevin, un apasionado desarrollador front-end. Nací el
                07/11/1992 y vivo en Argentina. Me encanta enfrentar nuevos
                desafíos y aprender constantemente en el ámbito del desarrollo
                web.
              </p>
            </section>

            <section className="contact-section">
              <h2 className="section-title">Contacto</h2>
              <ul className="contact-list">
                <li className="contact-item">
                  <a href="mailto:tuemail@example.com">Email</a>
                </li>
                <li className="contact-item">
                  <a href="https://github.com/tu_usuario">GitHub</a>
                </li>
                <li className="contact-item">
                  <a href="https://www.linkedin.com/in/tu_usuario/">LinkedIn</a>
                </li>
              </ul>
            </section>
          </div>

          <div className="main-panel">
            <section className="experience-section">
              <h2 className="section-title">Experiencia laboral</h2>
              <h3 className="job-title">
                Desarrollador Front-End en [Nombre de la empresa]
              </h3>
              <p className="job-description">
                En este puesto trabajé en varios proyectos utilizando
                tecnologías modernas y colaboré activamente con equipos
                multidisciplinarios.
              </p>
            </section>

            <section className="education-section">
              <h2 className="section-title">Educación</h2>
              <h3 className="course-title">
                Grado en Ingeniería Informática - [Nombre de la Universidad]
              </h3>
              <p className="course-description">
                Durante mi formación, adquirí habilidades fundamentales en
                programación y diseño web.
              </p>
            </section>

            <section className="skills-section">
              <h2 className="section-title">Habilidades</h2>
              <div className="skills-grid">
                <ul className="skills-list">
                  <h3 className="skills-category">Lenguajes</h3>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>

                <ul className="skills-list">
                  <h3 className="skills-category">Herramientas</h3>
                  <li>VSCode</li>
                  <li>Figma</li>
                  <li>Photoshop</li>
                </ul>

                <ul className="skills-list">
                  <h3 className="skills-category">Idiomas</h3>
                  <li>Español (Nativo)</li>
                  <li>Inglés (Intermedio)</li>
                </ul>

                <ul className="skills-list">
                  <h3 className="skills-category">Frameworks y Librerías</h3>
                  <li>Bootstrap</li>
                  <li>Materialize</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}

export default App
