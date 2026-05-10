import './App.css'
import useCounter from './useCounter.jsx';

function App() {

  const {count,increment,decrement} = useCounter();

  return (

    <div>
      <h1>Custom Hook</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
  
}

export default App
