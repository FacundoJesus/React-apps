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
    },
    {
    title: "Tercer proyecto",
    description: "Página web con HTML, CSS Y Javascript.",
    link: "#"
    }
]

function Proyectos() {
    return (      
    <section id="proyectos" className="seccion-proyectos">
        <h2>Proyectos</h2>
        <div className="lista-proyectos">
        {proyectos.map((proyecto,idx) => (
          <div key={idx} className="item-proyecto">
          <h3>{proyecto.title}</h3>
          <h4>{proyecto.description}</h4>
          <a href={proyecto.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
        </div>
      ))}
        </div>
      </section>)
}

export default Proyectos;