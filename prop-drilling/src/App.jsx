import { createContext, useContext, useState } from 'react'
import './App.css'

function ComponentA() {

  const contextValue = useContext(ThemeContext);
  return (
    <div style={{border: '2px solid blue', padding:'20px'}}>
      <h2>Commponent A (Child)</h2>
      <div>The current theme is: {contextValue}</div>
      <ComponentB />
    </div>
  )
}

function ComponentB() {

  const contextValue = useContext(ThemeContext);
  return (
    <div style={{border: '2px solid green', padding:'20px'}}>
      <h2>Commponent B (Child)</h2>
      <div>The current theme is: {contextValue}</div>
      <ComponentC />
    </div>
  )
}

function ComponentC() {

  //Lo uso aqui
  const contextValue = useContext(ThemeContext);

  return (
    <div style={{border: '2px solid red', padding:'20px'}}>
      <h3>Commponent C (Great-GrandChild)</h3>
      <div>The current theme is: {contextValue}</div>
    </div>
  )
}




function GlobalComponent() {

  //Lo uso aqui
  const contextValue = useContext(ThemeContext);
  return (
    <div style={{border: '2px solid yellow', padding:'20px'}}>
      <h3>Global Component (Outside Provider)</h3>
      <div>The current theme is: {contextValue}</div>
    </div>
  )

}

//Creo contexto
const ThemeContext = createContext('Light');

function App() {

  const [theme,setTheme] = useState('Light');

  const toggleTheme = () => {
    setTheme(prevTheme => ((prevTheme === 'Light') ? 'Dark' : 'Light'));
  }


  return (
    
    <div>

      <GlobalComponent />

      <ThemeContext.Provider value={theme}>
        <div style={{border: '2px solid black', padding:'20px'}}>
          <h1>Hello (Parent)</h1>
          <button onClick={toggleTheme}>Change Theme</button>
          <ComponentA />
        </div>
      </ThemeContext.Provider>

      <ThemeContext.Provider value='Dark'>
        <GlobalComponent />
      </ThemeContext.Provider>
      
    </div>

    
  )
}

export default App
