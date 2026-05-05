import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementar = () => {
    setCount(count+1);
  };

  const decrementar = () => {
    setCount(count-1);
  };

  return (
    <div>
      <h1>Valor actual: {count}</h1>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  )
}

export default App
