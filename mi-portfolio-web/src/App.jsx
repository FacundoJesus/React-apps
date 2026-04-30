import './App.css'
import Header from './components/Header.jsx'
import Sobre from './components/Sobre.jsx'
import Proyectos from './components/Proyectos.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <div className="App">
    
      {/* Cabezera */}
      <Header />

      {/* Sección "Sobre" */}
      <Sobre />
      
      {/* Sección "Proyectos" */}
      <Proyectos />

      {/* Sección "Contacto" */}
      <Contacto />

      {/* Footer */}
      <Footer />

    </div>
    
  )
}

export default App;
