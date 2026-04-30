import './App.css'
import MiBoton from './MiBoton.js'
import NombrePerfil from './NombrePerfil.js'

function App() {

  const handleHobbyClick = (hobby:string) => {
    alert(`You clicked on: ${hobby}`);
  };

  const facundoProfile = {
    name:"Facundo",
    age:29,
    isMember: true,
    hobbies: ["Salir a correr", "Leer", "Jugar a la play"],
    onHobbyClick: handleHobbyClick
  }


  return (
    <div>
      <h1>Hello</h1>

        <NombrePerfil {...facundoProfile}/>
        
        <MiBoton />
    </div>
  )
}

export default App;
