



export const OptionsCard = ({children, title}) => {
    return(

        <div className="optioncard-container">
            <h2>{title}</h2>
            <div className="body-optioncard">
                {children}
            </div>
        </div>
    );
}
