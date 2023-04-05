import { AuthLayout } from "../../components"
import NextLink from 'next/link';

const register = () => {
  return (
    <AuthLayout title="Registro">
      <div className="form-box">
        <form className="form">
          <span className="title">Registro</span>
          <span className="subtitle">Crea una cuenta totalmente gratis con tu correo.</span>
          <div className="form-container">
            <input type="text" className="input" placeholder="Nombre" />
            <input type="email" className="input" placeholder="Correo electrónico" />
            <input type="password" className="input" placeholder="Contraseña" />
          </div>
          <button>Registrarme</button>
        </form>
        <div className="form-section">
          <p>Ya tienes una cuenta? <NextLink href="/auth/login">Iniciar sesión</NextLink> </p>
        </div>
      </div>
    </AuthLayout>
  )
}

export default register