
import { Layout } from "../components";
import { UserCard } from "../components/ui/UserCard";
import { OptionsCard } from "../components/ui/OptionsCard";
import { User } from "../models";
import { useState } from "react";
import { PasswordOptions } from "../components/ui/PasswordOptions";

const profile = () => {

  const [show, setShow] = useState(false);

  const showPassword = ( show ) => {

    setShow(show);

  }


  return (
    <Layout title="Perfil">
      <h1 id='profile-header'>Perfil</h1>
      <div className="separator">
        <div id="profile-section">
          <UserCard
            name={"Alfredito Jimenez Telles"}
            email={"fredogodofredo@gmail.com"}
            rol={"Wev Developer"}
            description={
              "Desarrollador de closet en proceso, descubriendo mis motivaciones y ampliando mis horizontes"
            }
          ></UserCard>
        </div>


        <div className="options-container">
          <OptionsCard title={'Cambiar nombre'}>
            <div>
              <form action="">
                <label htmlFor="nombre">Nombre:</label>
                <span className="search-input">
                      <input type="text" name="nombre" placeholder="Afedititito" className="form-input" />
                </span>

                <label htmlFor="apellido">Apellido:</label>
                <span className="search-input">
                  <input type="text" name="apellido" placeholder="PapiJuancho" className="form-input"/>
                </span>


                <button type="submit" className="btn-primary" id="btn-center">Aceptar</button>
              </form>
            </div>
          </OptionsCard>
          <OptionsCard title={'Cambiar contraseña'}>
            <PasswordOptions/>
          </OptionsCard>
          <OptionsCard title={'Contraseña'}>
            <div>
              <h4>Contraseña actual</h4>
              <h4>Contraseña nueva</h4>
              <h4>Repetir contraseña</h4>
            </div>
          </OptionsCard>
          <OptionsCard title={'Contraseña'}>
            <div>
              <h4>Contraseña actual</h4>
              <h4>Contraseña nueva</h4>
              <h4>Repetir contraseña</h4>
            </div>
          </OptionsCard>
          <OptionsCard title={'Contraseña'}>
            <div>
              <h4>Contraseña actual</h4>
              <h4>Contraseña nueva</h4>
              <h4>Repetir contraseña</h4>
            </div>
          </OptionsCard>

        </div>
      </div>
    </Layout>
  );
};

export default profile;