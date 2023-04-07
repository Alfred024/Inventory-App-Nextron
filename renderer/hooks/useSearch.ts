import { useState } from "react"



export const useSearch = (State: Array<String>) => {
  
  const [oldState, setOldState] = useState(State)
  const [newState, setNewState] = useState(State)
  
  
  const searchByName = ( nameToFilter: string ) => {
    const newArray = oldState.filter( (name) => name === nameToFilter)
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