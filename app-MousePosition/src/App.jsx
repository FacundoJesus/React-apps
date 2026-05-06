import { useEffect,useState } from 'react'
import './App.css'

function App() {

  const [mousePosition, setMousePosition] = useState( {
    x: 0,
    y: 0
  });

  useEffect(() => {
    
    const handleMouseMove = (event) => {
      setMousePosition({x: event.clientX, y: event.clientY})
    };
    
    window.addEventListener('mousemove',handleMouseMove);

    // Limpieza
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

  },[]);
  
  return (
    <div>
      <h1>Mouse Position</h1>
      <h3>X: {mousePosition.x} - Y: {mousePosition.y}</h3>
    </div>
  )

}

export default App
