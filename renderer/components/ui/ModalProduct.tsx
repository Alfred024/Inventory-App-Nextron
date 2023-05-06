import React from "react";

export const ModalProduct = ({showModal, closeModal}) => {
    if(showModal)
        return(
            <div className="ModalBackground">
                <div className="modalContainer">
                    <button 
                        onClick={closeModal}
                        className="closeModal">
                            X
                    </button>
                    {/* <input className="imgContainer" type="file" name="" accept="image/png, image/jpeg" /> */}
                    <img className="imgContainer" src="" alt="IMÁGEN AQUÍ" />
                    

                    <form className="fillProductData_container" method="post">
                        <input className="productName_input" type="text" placeholder="Nombre del producto..." />

                        <div className="quantityContainer">
                            <label>Cantidad</label>
                            <input type="number"/>
                        </div>
                        
                        <div className="priceContainer">
                            <label>Precio</label>
                            <input type="number"/>
                        </div>
                    </form>

                    <button type="submit">Guardar producto</button>
                </div>
            </div>            
        )
    else
        return null
}

