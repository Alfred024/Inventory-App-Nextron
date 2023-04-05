import { useState } from "react"
import { ClientCard, InfoCard, Layout, SeachInput } from "../components"
import { useSearch } from "../hooks/useSearch"
const example = [
  {
    name: 'Uriel'
  },
  {
    name: 'Leal'
  },
  {
    name: 'Alfredito'
  },
  {
    name: 'Chaires'
  },
  {
    name: 'Osqui'
  },
  {
    name: 'Morales'
  }
]



const clients = () => {

    const {newState, searchByName} = useSearch(example);

    const onSearch = ( nameSearch: string ) => {
      
      searchByName(nameSearch)
    }
    return (
        <Layout title="Clientes">
            <InfoCard number={10} text='Clientes Totales'>
            <i className="fa-solid fa-list"></i>
          </InfoCard>

        <SeachInput onSearch={onSearch}/>

        <div className="container-clients">
          {
            newState.map( cliente => (
              <ClientCard key={cliente.name} name={cliente.name}/>
            ))
          }
        </div>
          
        </Layout>  
    )
}

export default clients