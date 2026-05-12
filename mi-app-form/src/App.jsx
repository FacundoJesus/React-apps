import './App.css'
import { useForm} from "react-hook-form"

function App() {

  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => console.log(data); 

  return (
    <div>
      <h1>Forms in React</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label>Name:</label>
        <input{...register('name')}></input>

        <label>Email:</label>
        <input{...register('email')}></input>

        <label>DNI:</label>
        <input {...register('dni')}></input>
        

        <button type='submit'>Submit</button>

      </form>

    </div>
  )
}

export default App
