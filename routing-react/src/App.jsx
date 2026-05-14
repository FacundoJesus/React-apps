import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'  
import About from './About'
import Contact from './Contact'
import Team from './Team'
import NotFound from './NotFound'

/*
-> Home
-> About -> Team
-> Contact
*/

function App() {

  return (
    <Router>
    <div className='min-h-screen bg-gray-50'>
        <nav className='bg-blue-400 p-4'>
          <ul className='flex justify-center space-x-6'>
            <li><Link
                className='text-white hover:text-yellow-300 font-medium transition duration-300'
                to="/">Home  
                </Link>
            </li>
            <li><Link
                className='text-white hover:text-yellow-300 font-medium transition duration-300'
                to="/about">About
                </Link>
            </li>
            <li><Link
                className='text-white hover:text-yellow-300 font-medium transition duration-300'
                to="/contact">Contact
                </Link>
            </li>
          </ul>
        </nav>

        <div className='container mx-auto py-8'>
          <Routes>
            <Route path='/' element={<Home/>} />

            <Route path='/about' element={<About/>} >
                <Route path='team' element= {<Team/>}></Route>
            </Route>

            <Route path='/contact' element={<Contact/>} />

            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>

      </div>
    </Router>
    
  )
}

export default App
