import { CSSProperties, useRef } from "react"

const styles: CSSProperties = {
    padding: '0px'
}

export const DescriptionProfile = ({descipcion, editar, cambiarDescription}) => {

    const text = useRef<HTMLTextAreaElement>(null);

    const obtenerValor = (): string => {

        const valor = text.current.value;

        return valor;
    }


    return (

        <div style={styles}>
            <textarea name="descripcion" id="text-area" defaultValue={descipcion} ref={text}></textarea>

            <button className="btn-primary" onClick={ () => {editar(false); cambiarDescription(obtenerValor())}}>Aceptar</button>
        </div>

    )
}