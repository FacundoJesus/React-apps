import './App.css'

function ComponentA({theme}) {
  return (
    <div style={{border: '2px solid blue', padding:'5px'}}>
      <h2>Commponent A (Child)</h2>
      <ComponentB theme={theme}/>
    </div>
  )
}

function ComponentB({theme}) {
  return (
    <div style={{border: '2px solid green', padding:'5px'}}>
      <h2>Commponent B (Child)</h2>
      <ComponentC theme={theme}/>
    </div>
  )
}

function ComponentC({theme}) {
  return (
    <div style={{border: '2px solid red', padding:'5px'}}>
      <h2>Commponent C (Great-GrandChild)</h2>
      <div>The current theme is: {theme}</div>
    </div>
  )
}


function App() {
  
  const theme = 'Dark';

  return (
    <div style={{border: '2px solid black', padding:'5px'}}>
      <h1>Hello (Parent)</h1>
      <ComponentA theme={theme}/>
    </div>
    
  )
}

export default App
