import './App.css'
import { useForm } from "react-hook-form"

function App() {
  
  const {register, handleSubmit, formState: {errors}, reset, watch} = useForm();

  const onSubmit = (datos) => {
    console.log(datos);

    // Limpio Formulario
    reset();
  }

  // Validaciones
  const validateName = (nombre) => {
    if(!isNaN(nombre)) {
      return 'El nombre no debe ser un número.';
    }
    return true;
  }



  return (

    <div>
      <h1>Formulario</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

       <label>Nombre:</label>
       <input {...register('name', {required: 'El nombre es requerido.', 
                                     minLength: {value: 4,
                                                 message: 'El nombre debe tener al menos 4 caracteres.'
                                                },
                                     validate: {
                                                isNotNumber: validateName,
                                               }
                                    })}>
       </input>
       {errors.name && <span style={{color:'red'}}>{errors.name.message}</span>}
        



        <button type='submit'>Enviar</button>
        <button onClick={() => reset()}>Reiniciar</button>

      </form>
    </div>
  )
}

export default App
