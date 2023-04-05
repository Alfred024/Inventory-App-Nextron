import { useState } from "react"

interface ObjectsSearch{
  name: string,
  productsAdquiridos? : Array<Object>,
  cantidad?: number,
  precio?: number
}

export const useSearch = (State: Array<ObjectsSearch>) => {
  
  const [oldState, setOldState] = useState(State)
  const [newState, setNewState] = useState(State)
  
  
  const searchByName = ( nameToFilter: string ) => {
    const newArray = oldState.filter( ({ name }) => name === nameToFilter)
    setNewState(newArray)
  }

  const resetState = () => {
    setNewState(oldState)
  }

  return {
    searchByName,
    resetState,
    newState,
  }

}