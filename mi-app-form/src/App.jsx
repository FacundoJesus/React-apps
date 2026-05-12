import './App.css'
import {useForm} from "react-hook-form"

function App() {

  const {register, handleSubmit, formState: {errors}, reset} = useForm();

  const onSubmit = (data) => {
    console.log(data); 

    // Limpio campos
    reset();
  }

  const validateAdmin = (value) => {
    if(value !== 'admin') {
      return 'Only admin is allowed.';
    }
    return true;
  }

  const validateName = (value) => {
    if(!isNaN(value)) {
      return 'Name cannot be number.';
    }
    return true;
  }


  return (

    <div>
      <h1>Forms in React</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label>Name:</label>
        {/*<input{...register('name', {required: true, minLength:2}) }></input>*/}
        {/*errors.name && <span style={{color:'red'}}>The Name Field es required and should be atleast 2 characters.</span>*/}
        <input {...register('name', {required: 'Name is required.', 
                                     minLength: {value:2,
                                                 message: 'Name should be atleast 2 characters.'
                                                },
                                     validate: {
                                      isNotNumber: validateName,
                                      isAdmin: validateAdmin
                                      }
                                     })}>
        </input>
        {errors.name && <span style={{color:'red'}}>{errors.name.message}</span>}

        <label>Email:</label>
        <input{...register('email', {required:'Email is required',
                                     pattern: { value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'Email should be have "@".'
                                     }})}>
        </input>
        {errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}

        <label>DNI:</label>
        <input {...register('dni')}></input>
        
        <button type='submit'>Submit</button>
        <button type='button' onClick={() => reset()}>Reset</button>

      </form>

    </div>
  )
}

export default App
