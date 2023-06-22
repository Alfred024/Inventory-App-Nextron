import { CSSProperties } from "react";



export const UserDescription = ({description, editar}) => {

    return(
        <div id="edit-container">
            <p>{description}</p>
            <i className="fa-regular fa-pen-to-square" id="btn-edit" onClick={ () => editar(true) }></i>
        </div>
    );
}