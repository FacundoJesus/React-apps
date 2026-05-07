import { useEffect , useState } from 'react'

import './App.css'

function App() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const timerId = setInterval(() => {setTime(new Date())}, 1000);

    //Limpieza
    return () => clearInterval(timerId);
  },[]);

  const formattedTime = time.toLocaleTimeString('en-US', 
    { hour: '2-digit',
      



    } )

  return (
    <div>
      <h1>Hello</h1>
      {formattedTime}
    </div>
  )
}

export default App
