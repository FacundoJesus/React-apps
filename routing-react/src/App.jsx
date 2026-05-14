import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'  
import About from './About'
import Contact from './Contact'

/*
-> Home
-> About
-> Contact
*/

function App() {

  return (
    <Router>
    <div className='min-h-screen bg-gray-50'>
      <nav className='bg-blue-400'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
