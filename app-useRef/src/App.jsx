import { useRef} from 'react'
import './App.css'

function App() {

  const inputRef = useRef(null);
  const inputRefNext = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'yellow';
  }

  const focusInputNext = () => {
    inputRefNext.current.focus();
    inputRefNext.current.style.backgroundColor = 'yellow';
  }

  const resetFocus = () => {
    inputRef.current.style.backgroundColor = 'white';
    inputRefNext.current.style.backgroundColor = 'white';
  }


  return (
    <div>
      <h1>Learn React</h1>
      <input ref={inputRef} type='text' placeholder='Focus me' ></input>
      <button onClick={focusInput}>Focus and Highlight</button>

      <input ref={inputRefNext} type='text' placeholder='Focus me' ></input>
      <button onClick={focusInputNext}>Focus and Next</button>

      <button onClick={resetFocus}>Reset</button>
    </div>
   
  )

}

export default App
