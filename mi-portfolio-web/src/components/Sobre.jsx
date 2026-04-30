const nombre = "Facundo Jesús Citera";
const profesion = "Programador Jr.";


function Sobre() {
    return (<section id="sobre" className="seccion-sobre">
        <h2>Sobre mi...</h2>
        <p>Hola! Soy {nombre}, un {profesion}. Amo construir aplicaciones web que resuelvan problemas del mundo real.</p>
      </section>)
}

export default Sobre;