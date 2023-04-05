import { AuthLayout } from "../../components"
import NextLink from 'next/link';

const login = () => {
  return (
    <AuthLayout title="Login">
      <div className="form-box">
        <form className="form">
          <span className="title">Inicio de sesión</span>
          <span className="subtitle">Ingresa a tu cuenta y empieza a gestionar tu empresa.</span>
          <div className="form-container">
            <input type="email" className="input" placeholder="Correo electrónico" />
            <input type="password" className="input" placeholder="Contraseña" />
          </div>
          <button>Iniciar sesión</button>
        </form>
        <div className="form-section">
          <p>¿No tienes una cuenta? <NextLink href="/auth/register">Registrarme</NextLink> </p>
        </div>
      </div>
    </AuthLayout>
  )
}

export default login