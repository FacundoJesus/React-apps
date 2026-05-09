import { createContext, useContext } from 'react'
import './App.css'




function ComponentA() {
  return (
    <div style={{border: '2px solid blue', padding:'5px'}}>
      <h2>Commponent A (Child)</h2>
      <ComponentB />
    </div>
  )
}

function ComponentB() {
  return (
    <div style={{border: '2px solid green', padding:'5px'}}>
      <h2>Commponent B (Child)</h2>
      <ComponentC />
    </div>
  )
}

function ComponentC() {
  
  //Lo uso aqui
  const contextValue = useContext(themeContext);
  return (
    <div style={{border: '2px solid red', padding:'5px'}}>
      <h2>Commponent C (Great-GrandChild)</h2>
      <div>The current theme is: {contextValue}</div>
    </div>
  )
}

//Creo contexto
const themeContext = createContext('Light');

function App() {
  
  return (
    <div style={{border: '2px solid black', padding:'5px'}}>
      <h1>Hello (Parent)</h1>
      <ComponentA />
    </div>
    
  )
}

export default App
