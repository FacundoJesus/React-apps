import './App.css'



function App() {

  const nombre = "Facundo Jesús Citera";
  const profesion = "Programador Jr.";
  const proyectos = [
    {
    title: "Primer proyecto",
    description: "Aplicación  web construida usando React y Node",
    link: "#"
    },
    {
    title: "Segundo proyecto",
    description: "Aplicación E-commerce con Java + SpringBoot 4.0",
    link: "#"
    }
]

  return (
    <div className="App">
    {/* Cabezera */}
      <header className="Header">
        <h1>{nombre}</h1>
        <p>{profesion}</p>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* Sección "Sobre" */}
      <section id="sobre" className="seccion-sobre">
        <h2>Sobre mi...</h2>
        <p>Hola! Soy {nombre}, un {profesion}. Amo construir aplicaciones web que resuelvan problemas del mundo real.</p>
      </section>
      
      {/* Sección "Proyectos" */}
      <section id="proyectos" className="seccion-proyectos">
        <h2>Proyectos</h2>
        <div className="lista-proyectos">
        {proyectos.map((proyecto,idx) => (
          <div key={idx} className="item-proyecto">
          <h3>{proyecto.title}</h3>
          <h3>{proyecto.description}</h3>
          <h3>{proyecto.link}</h3>
        </div>
      ))}
      </div>
      </section>

      {/* Sección "Contacto" */}
      <section id="contacto" className="seccion-contacto">
        <h2>Contacto</h2>
        <p>Si quieres ponerte en contacto conmigo, no dudes en escribirme a esta dirección: <a href="mailto:facundojesus10@hotmail.com">facundojesus10@hotmail.com</a></p>
      </section>

      {/* Seccion "Footer*/}
      <footer clasName="footer">
        <p>2026. Citera, Facundo Jesús</p>
      </footer>
    </div>
    
  )
}

export default App
