import './App.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    //watch
  } = useForm({
    mode: 'onChange'
  });

  const onSubmit = async(data) => {

  setLoading(true);
  setSuccess(false);

  // Simulación API
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log(data);

  setLoading(false);

  // Mostrar mensaje
  setSuccess(true);

  // Limpiar formulario
  reset();

  // Ocultar mensaje después de 3 segundos
  setTimeout(() => {
    setSuccess(false);
  }, 3000);
};

  // Validación texto
  const validarTexto = (texto) => {

    if(texto.trim() === '') {
      return 'Este campo es obligatorio.';
    }

    if(!isNaN(texto)) {
      return 'No debe ser un número.';
    }

    return true;
  };

  // Confirmar contraseña
  /*const validarConfirmarPassword = (value) => {

    if(value !== watch('password')) {
      return 'Las contraseñas no coinciden.';
    }

    return true;
  };*/

  return (

    <div className='container'>

      <form className='formulario' onSubmit={handleSubmit(onSubmit)}>

        <h1>Formulario de Registro</h1>
        {
          success && (
          <div className='success-message'>
            ✅ Formulario enviado exitosamente.
          </div>
          )
        }

        {/* Nombre */}
        <div className='campo'>

          <label htmlFor='name'>Nombre</label>

          <input
            id='name'
            type='text'
            placeholder='Ingrese su nombre'
            {...register('name', {
              required: 'El nombre es obligatorio.',
              minLength: {
                value: 4,
                message: 'Debe tener al menos 4 caracteres.'
              },
              validate: validarTexto
            })}
          />

          {errors.name && (
            <span className='error'>{errors.name.message}</span>
          )}

        </div>

        {/* Apellido */}
        <div className='campo'>

          <label htmlFor='lastName'>Apellido</label>

          <input
            id='lastName'
            type='text'
            placeholder='Ingrese su apellido'
            {...register('lastName', {
              required: 'El apellido es obligatorio.',
              minLength: {
                value: 4,
                message: 'Debe tener al menos 4 caracteres.'
              },
              validate: validarTexto
            })}
          />

          {errors.lastName && (
            <span className='error'>{errors.lastName.message}</span>
          )}

        </div>

        {/* Email */}
        <div className='campo'>

          <label htmlFor='email'>Email</label>

          <input
            id='email'
            type='email'
            placeholder='ejemplo@email.com'
            {...register('email', {
              required: 'El email es obligatorio.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Ingrese un email válido.'
              }
            })}
          />

          {errors.email && (
            <span className='error'>{errors.email.message}</span>
          )}

        </div>

        {/* DNI */}
        <div className='campo'>

          <label htmlFor='dni'>DNI</label>

          <input
            id='dni'
            type='text'
            placeholder='Ingrese su DNI'
            {...register('dni', {
              required: 'El DNI es obligatorio.',
              pattern: {
                value: /^\d{7,8}$/,
                message: 'Debe tener entre 7 y 8 números.'
              }
            })}
          />

          {errors.dni && (
            <span className='error'>{errors.dni.message}</span>
          )}

        </div>

        {/* Password */}
        <div className='campo'>

          <label htmlFor='password'>Contraseña</label>

          <div className='password-container'>

            <input
              id='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Ingrese una contraseña'
              {...register('password', {
                required: 'La contraseña es obligatoria.',
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/,
                  message:
                    'Debe tener mayúscula, minúscula, número y carácter especial.'
                }
              })}
            />

            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>

          </div>

          {errors.password && (
            <span className='error'>{errors.password.message}</span>
          )}

        </div>

        {/* Confirm Password */}
        <div className='campo'>

          <label htmlFor='confirmPassword'>
            Confirmar Contraseña
          </label>

          <div className='password-container'>

            <input
              id='confirmPassword'
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder='Repita la contraseña'
              {...register('confirmPassword', {
                required: 'Debe confirmar la contraseña.',
                //validate: validarConfirmarPassword
              })}
            />

            <button
              type='button'
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? 'Ocultar' : 'Mostrar'}
            </button>

          </div>

          {errors.confirmPassword && (
            <span className='error'>
              {errors.confirmPassword.message}
            </span>
          )}

        </div>

        {/* Botones */}
        <div className='buttons'>

          <button type='submit' disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>

          <button
            type='button'
            onClick={() => reset()}
          >
            Reiniciar
          </button>

        </div>

      </form>

    </div>
  );
}

export default App;