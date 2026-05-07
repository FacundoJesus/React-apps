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
      minute: '2-digit',
      second: '2-digit'
    } 
  )

  const formattedDate = time.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
  });

  return (
    
    <div className='clock-container'>

      <div className='clock'>
        {formattedTime}
      </div>

      <p className='date'>
        {formattedDate}
      </p>

    </div>
  )
}

export default App
