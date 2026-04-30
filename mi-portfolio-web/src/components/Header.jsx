
const nombre = "Facundo Jesús Citera";
const profesion = "Programador Jr.";

function Header() {
    return (
        <header className="header">
            <h1>{nombre}</h1>
            <p>{profesion}</p>
            <nav>
                <a href="#sobre">Sobre</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#contacto">Contacto</a>
            </nav>
      </header>
    )
}

export default Header;