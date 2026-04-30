import './App.css'



function App() {

  const name = "Facundo Jesús Citera";
  const profession = "Programador Jr.";
  const projects = [
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
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* Sección "Sobre" */}
      <section id="sobre" className="sobre-seccion">
        <h2>Sobre mi...</h2>
        <p>Hola! Soy {name}, un {profession}. Amo construir aplicaciones web que resuelvan problemas del mundo real.</p>
      </section>
      
      {/* Sección "Proyectos" */}
      <section id="proyectos" className="proyectos-seccion">
      <h2></h2>

      </section>
    </div>
    
  )
}

export default App
