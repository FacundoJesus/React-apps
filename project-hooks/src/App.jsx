import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incrementTwice = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);

  }
  const incrementar = () => {
    setCount(count+step);
  };

  const decrementar = () => {
    setCount(count-step);
  };

  return (
    <div className='app-container'>
      <h1>Valor actual: {count}</h1>
      <input type="number" value={step} onChange={(e) => setStep(parseInt(e.target.value))}></input>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={incrementTwice}>+2</button>
    </div>
  )
}

export default App
