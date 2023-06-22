import { useState } from "react"
import { ShowIcon } from './ShowIcon'

interface showPass {
    show: boolean
    inp: number
}


export const PasswordOptions = () => {

    const [showPass, setShowPass] = useState<showPass>({show: false, inp: 0});

    const showPassword = (show: showPass) => {


        setShowPass(show);
    }

    return (

        <div>
        <form action="submit">
            <label htmlFor="actual">Contraseña actual:</label>
            <span className="search-input">
                  <input type={(showPass.show && showPass.inp==1) 
                    ? 'text' : 'password' } 
                    name="actual" placeholder="*****" className="form-input" />
                  { (showPass.inp==1) ? 
                      <ShowIcon show={showPass.show} inp={1} showPassword={showPassword}/> 
                        : 
                          <ShowIcon show={false} inp={1} showPassword={showPassword}/>
                  }
            </span>

            <label htmlFor="nueva">Contraseña nueva:</label>
            <span className="search-input">
              <input type={(showPass.show && showPass.inp==2) 
                    ? 'text' : 'password' }
                    name="nueva" placeholder="*****" className="form-input"/>
              { (showPass.inp==2) ? 
                      <ShowIcon show={showPass.show} inp={2} showPassword={showPassword}/> 
                        : 
                          <ShowIcon show={false} inp={2} showPassword={showPassword}/>
              }
            </span>

            <label htmlFor="repetir">Repetir contraseña:</label>
            <span className="search-input">
              <input type={(showPass.show && showPass.inp==3) 
                    ? 'text' : 'password' } 
                    name="repetir" placeholder="*****" className="form-input"/>
              { (showPass.inp==3) ? 
                      <ShowIcon show={showPass.show} inp={3} showPassword={showPassword}/> 
                        : 
                          <ShowIcon show={false} inp={3} showPassword={showPassword}/>
              }
            </span>

            <button type="submit" className="btn-primary" id="btn-center">Aceptar</button>
          </form>
        </div>
    )
}