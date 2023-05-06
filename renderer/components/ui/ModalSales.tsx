import React from "react";

export const ModalSales = ({showModal, closeModal}) => {
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
                    
                    <form className="formSalesModal" method="post">
                        <div className="infoProduct">
                            <img className="imgContainer" src="https://www.hidrocalidodigital.com/wp-content/uploads/2021/12/Nuevo-proyecto-2021-12-14T162636.890-1.png" alt="IMÁGEN AQUÍ" />
                            <label htmlFor="">Nombre del producto</label>
                        </div>
                        
                        <div className="quantityContainer">
                            <label>Cantidad</label>
                            <input type="number"/>
                        </div>
                    </form>

                    <button type="submit">Finalizar pedido</button>
                </div>
            </div>            
        )
    else
        return null
}