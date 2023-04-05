import { useState } from "react"

export const SeachInput = ({onSearch}) => {
    const [value, setValue] = useState(String)

    const onChangeValue = (event: any) => {
        setValue( event.target.value)
    }

    const changeName = () => {
        if(value.length < 5) return
        onSearch( value )
    }

    changeName()

    return (
        <div className="search-input">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input 
                placeholder="Search" 
                type="submit" 
                value={value}
                onChange={onChangeValue}
            />
        </div>
    )
}
