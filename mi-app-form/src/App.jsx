import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState( {
    name: '',
    email:''
  })
  
  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }
    else {
      console.log('Form Data Submitted', formData);
    }
    
  }

  const handleChange = (e) => {
    const {name,value} = e.target;

    setFormData({...formData, [e.target.name]: e.target.value})

    if(errors[name]) {
      const newErrors = {...errors};
      delete newErrors[name];
      setErrors(newErrors);
    }
  }

  // Validaciones
  const [errors,setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if(!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    return newErrors;
  }

  return (

    <div>
      <h1>Forms in React</h1>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange}></input>
        {errors.name && <span>{errors.name}</span>}
        <br></br>

        <label>Email:</label>
        <input type='text' name='email' value={formData.email} onChange={handleChange}></input>
        

        <button type='submit'>Submit</button>

      </form>

    </div>
    
  )
}

export default App
