import './App.css'

function WelcomeMessage(name) {
  return (<h1>Hello, {name} !</h1>);
}

function Greeting(isMorning) {
  if(isMorning) {
    return <h1>Good Morning!</h1>
  }
  return <h1>Good Evening!</h1>
}

function alertBox(message) {
  return <div className="alert">{message}</div>
}

function showAlert(condition,message) {
  if(condition) {
    return alertBox(message);
  }
  return null;

}

function App() {
  const now = new Date();
  const isMorning = now.getHours() < 12;
  
  return(
    <div>  
      {WelcomeMessage("Facundo")}
      {Greeting(isMorning)}
      {/*comment*/}
      {showAlert(true,"This is important!")}
    </div>

  )
}

export default App
