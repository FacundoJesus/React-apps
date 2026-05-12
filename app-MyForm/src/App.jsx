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
  const validarApellido = (apellido) => {
    if(!isNaN(apellido)) {
      return 'El nombre no debe ser un número.';
    }
    return true;
  }

  const validarNombre = (nombre) => {
    if(!isNaN(nombre)) {
      return 'El nombre no debe ser un número.';
    }
    return true;
  }

  const validarConfirmarContraseña = (confirmarContraseña) => {
    if(confirmarContraseña !== watch('password')) {
      return 'La contraseña no coincide.'
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
                                                isNotNumber: validarNombre,
                                               }
                                    })}>
       </input>
       {errors.name && <span style={{color:'red'}}>{errors.name.message}</span>}

       <label>Apellido:</label>
       <input {...register('apellido', {required: 'El apellido es requerido.', 
                                        minLength: {value: 4,
                                                    message: 'El nombre debe tener al menos 4 caracteres.'
                                                },
                                        validate: {isNotNumber: validarApellido,
                                               }
                                    })}>
       </input>
       {errors.apellido && <span style={{color:'red'}}>{errors.apellido.message}</span>}

       <label>Email:</label>
       <input {...register('email', {required: 'El email es requerido.', 
                                     pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'El Email esta mal formulado.'
                                              }
                                    })}>
       </input>
       {errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}

       <label>DNI:</label>
       <input {...register('dni', {required: 'El DNI es requerido.', 
                                     pattern: { value: /^\d{7,8}$/,
                                                message: 'El DNI debe tener entre 7 y 8 números.'
                                              }
                                    })}>
       </input>
       {errors.dni && <span style={{color:'red'}}>{errors.dni.message}</span>}

       <label>Contraseña:</label>
       <input {...register('password', {required: 'La contraseña es requerida.', 
                                     pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/,
                                                message: 'Debe tener mayúscula, minúscula, número y carácter especial.'
                                              }
                                    })}>
       </input>
       {errors.password && <span style={{color:'red'}}>{errors.password.message}</span>}

       <label>Confirmar contraseña:</label>
       <input {...register('confirmPassword', {required: 'La contraseña es requerida.', 
                                               pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/,
                                                          message: 'Debe tener mayúscula, minúscula, número y carácter especial.'
                                              },
                                              validate: validarConfirmarContraseña
                                    })}>
       </input>
       {errors.confirmPassword && <span style={{color:'red'}}>{errors.confirmPassword.message}</span>}
        



        <button type='submit'>Enviar</button>
        <button onClick={() => reset()}>Reiniciar</button>

      </form>
    </div>
  )
}

export default App
