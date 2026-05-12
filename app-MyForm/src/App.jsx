import './App.css'
import { useForm } from "react-hook-form"

function App() {
  
   const {register, handleSubmit, formState: {errors}, reset, watch} = useForm({
    //mode: 'onChange'
  });

  return (
    <div>
      <h1>Formulario</h1>
    </div>
  )
}

export default App
