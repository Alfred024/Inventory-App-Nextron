import { useRouter } from "next/router";
import { AuthLayout } from "../../components"
import NextLink from 'next/link';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { validations } from '../../utils';

const register = () => {

  const { onRegisterUser } = useContext(AuthContext);


  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  type FormData = {
    name: string;
    email: string;
    password: string;
  };

  const onRegisterForm = async ({ name, email, password }: FormData) => {

    setShowError(false);
    const { hasError, message } = await onRegisterUser(name, email, password);

    if (hasError) {
      setShowError(true);
      setErrorMessage(message!);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    await signIn('credentials', { email, password });
  }

  return (
    <AuthLayout title="Registro">
      <form onSubmit={handleSubmit(onRegisterForm)} noValidate className="form">
      {
          showError && <p>{errorMessage}</p>
        }
        <div className="form-box">
          <span className="title">Registro</span>
          <br />
          <span className="subtitle">Crea una cuenta totalmente gratis con tu correo.</span>
          <div className="form-container">
            <input type="text" className="input" placeholder="Nombre"                                 {...register('name', {
              required: 'Este campo es requerido',
              minLength: { value: 2, message: 'Mínimo 2 caracteres' }
            })} />
            <input type="email" className="input" placeholder="Correo electrónico"
              {...register('email', {
                required: 'Este campo es requerido',
                validate: validations.isEmail

              })} />
            <input type="password" className="input" placeholder="Contraseña"
              {...register('password', {
                required: 'Este campo es requerido',
                minLength: { value: 6, message: 'Mínimo 6 caracteres' }
              })} />
          </div>
          <button type="submit">Registrarme</button>
          <div className="form-section">
            <p style={{ backgroundColor: 'transparent' }}>Ya tienes una cuenta? <NextLink href="/auth/login">Iniciar sesión</NextLink> </p>
          </div>
        </div>
      </form>
    </AuthLayout>
  )
}

export default register