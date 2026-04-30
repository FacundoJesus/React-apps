import './App.css'
import MiBoton from './MiBoton.js'
import NombrePerfil from './NombrePerfil.js'

function App() {

  return (
    <div>
      <h1>Hello</h1>

        <NombrePerfil name="Facundo" age={29} esMiembro={false} hobbies={["Salir a correr", "Leer", "Jugar a la play"]}/>
        
        <MiBoton />
    </div>
  )
}

export default App;
