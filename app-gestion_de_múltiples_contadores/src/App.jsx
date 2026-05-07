import { useState } from 'react'
import './App.css'

function App() {

  //Estado inicial de los contadores
  const [counters, setCounters] = useState([{id:1,value:0}]);


  //Funcion añadir contador
  const addCounters = () => {
    setCounters([...counters, {id:counters.length+1, value:0}]);
  };

  //Funcion quitar contador
  const quitCounters = () => {
    setCounters(counters.slice(0, -1));
  };

  //Funcion para incrementar
  const incrementCounter = (id) => {
    setCounters(counters.map( counter =>
      counter.id === id ? {...counter, value:counter.value+1} : counter 
    )
    );
  };

  //Funcion para decrementar
  const decrementCounter = (id) => {
    setCounters(counters.map( counter =>
      counter.id === id ? {...counter, value:counter.value-1} : counter 
    )
    );
  };

  return (
    
    <div className='app-container'>

    <div className='top-buttons'>
      <button onClick= {addCounters}>Add Counter</button>
      <button onClick= {quitCounters}>Quit Counter</button>
    </div>

      <ul>
        {counters.map(counter => 
        <li key={counter.id}>

        <span  className='counter-info'>
          Counter {counter.id}: {counter.value}
        </span>

        <div className='button-group'> 
          <button onClick={() => incrementCounter(counter.id)}>Increment</button>
          <button onClick={() => decrementCounter(counter.id)}>Decrement</button>
        </div>

        </li>)}
      </ul>
      
    </div>
   
  )
}

export default App
