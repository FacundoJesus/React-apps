import './App.css'
import DarkModeToggle from './DarkModeToggle'

function App() {
  

  return (

    <div className='p-4 bg-white min-h-screen dark:bg-gray-900 dark:text-white'>
    <DarkModeToggle />
      <h1 className="text-2xl">
        Hello world!
      </h1>
      <p>
        This is an excample of implementing dark mode using Tailwind CSS.
      </p>
    </div>

  )
}

export default App
