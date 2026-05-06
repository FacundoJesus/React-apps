import { useState } from 'react'
import './App.css'



function App() {

  const [backgroundColor, setBackroundColor] = useState("#ffffff");
  
  const colors = ['#6746EA','#B846EA','#EA46C9','#C9EA46','#46EA67'];

  const handleColorChange = (color) => {
    setBackroundColor(color);
  }

  return (

    <div style={{backgroundColor}} className=''>
    
      <h1>Color Picker</h1>

      <div className='color-palette'>
      {colors.map((color,index) => (
        <div key= {index} className='color-box' style={{backgroundColor:color}} onClick={() => {handleColorChange(color)}}>  
        </div>
      ))}
      </div>

    </div>
      
  )
  
}

export default App
