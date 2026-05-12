import './App.css'
import {useForm} from "react-hook-form"

function App() {

  const {register, handleSubmit, formState: {errors}, reset, watch} = useForm({
    mode: 'onChange'
  });

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

  const existingUserNames = ['user123', 'facu', 'john']
  const checkIfUserNameExist = async(username) => {
    await new Promise(resolve => setTimeout(resolve,3000));
    return existingUserNames.includes(username);
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
                                      isAdmin: validateAdmin,
                                      checkUserName: async(value) => {
                                        const exist = await checkIfUserNameExist(value);
                                        return !exist || 'Username already taken';
                                        }
                                      }
                                    })}>
        </input>
        {errors.name && <span style={{color:'red'}}>{errors.name.message}</span>}

        <br></br>


        <label>Password:</label>
        <input type='password' {...register('password', {required: 'Password is required.', 
                                             minLength: {value:2,
                                                         message: 'Password should be atleast 2 characters.'
                                                        }
                                })}>
        </input>
        {errors.password && <span style={{color:'red'}}>{errors.password.message}</span>}

        <br></br>


        <label>Confirm Password:</label>
        <input type='password' {...register('confirmPassword', {required: 'Confirm Password is required.', 
                                             minLength: {value:2,
                                                         message: 'Confirm Password should be atleast 2 characters.'
                                                        },
                                             validate: value => value === watch('password') || 'Passwords do not match.'
                                })}>
        </input>
        {errors.confirmPassword && <span style={{color:'red'}}>{errors.confirmPassword.message}</span>}

        <br></br>


        <label>Email:</label>
        <input{...register('email', {required:'Email is required',
                                     pattern: { value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'Email should be have "@".'
                                     }})}>
        </input>
        {errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}

        <br></br>

        <label>DNI:</label>
        <input {...register('dni')}></input>
        <br></br>
        
        <button type='submit'>Submit</button>

        <br></br>

        <button type='button' onClick={() => reset()}>Reset</button>

      </form>

    </div>
  )
}

export default App
