import React from "react";

export const ModalClient = () => {
    return(
        <div className="ModalBackground">
            <div className="modalContainer modalClient">
                <button 
                    className="closeModal">
                        X
                </button>
                {/* <input className="imgContainer" type="file" name="" accept="image/png, image/jpeg" /> */}
                <img className="imgContainer"  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="IMÁGEN AQUÍ" />
                
                <div>
                    <label htmlFor="">Nombre del cliente</label>
                    <input type="text" />
                </div>
                
                <button type="submit">Guardar cambios</button>
            </div>
        </div>
    )
}