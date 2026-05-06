import { useEffect,useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [anotherValue, setAnotherValue] = useState(10);

  useEffect (() => {
    document.title = `Count: ${count} - AnotherValue: ${anotherValue}` ;
  },[count,anotherValue])



  const incrementCount = () => {
    setCount(count+1);
  }

  const incrementAnotherValueCount = () => {
    setAnotherValue(anotherValue+10);
  }

  return (
    <div>
      <h1>useEffect Hook</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={incrementAnotherValueCount}>Increment Another Value</button>
    </div>
  )
}

export default App
