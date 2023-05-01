import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthLayout } from "../../components";
import { validations } from "../../utils";
import NextLink from 'next/link';
import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

type FormData = {
  email: string,
  password: string,
}

const loginPage: NextPage = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormData>();
  const [showError, setShowError] = useState(false);

  const onLoginUser = async ({ email, password }: FormData) => {
    setShowError(false);
    await signIn('credentials', { email, password });
    router.push('/');
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onLoginUser)} noValidate className="form">
        {
          showError && <p>No se ha podido iniciar sesión, intente de nuevo.</p>
        }
        <div className="form-box">
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', justifyContent:'center' }}>
            <Image src='/static/logo.png' alt="" width={100} height={100} style={{ backgroundColor: 'transparent' }}/>
            <span className="title">Inicio de sesión</span>
          </div>
          <br />
          <span className="subtitle">Ingresa a tu cuenta y empieza a gestionar tu empresa.</span>
          <div className="form-container">
            <input type="email" className="input" placeholder="Correo electrónico"
              {...register('email', {
                required: 'Este campo es requerido',
                validate: validations.isEmail
              })} />
            <input type="password" className="input" placeholder="Contraseña"
              {...register('password', {
                required: 'Este campo es requerido',
                minLength: { value: 6, message: 'Mínimo 6 caracteres' }
              })}
            />
          </div>
          <button type="submit">Iniciar sesión</button>
          <div className="form-section">
            <p style={{ backgroundColor: 'transparent' }}>¿No tienes una cuenta? <NextLink href="/auth/register">Registrarme</NextLink> </p>
          </div>
        </div>
      </form>
    </AuthLayout>
  )
}

export default loginPage;