import { ClientCard, InfoCard, Layout, SeachInput } from "../components"
const example = [
  'Uriel',
  'Leal',
  'Alfredito',
  'Chaires',
  'Osqui',
  'Morales',
]



const clients = () => {

   
    return (
        <Layout title="Clientes">
            <InfoCard number={10} text='Clientes Totales'>
            <i className="fa-solid fa-list"></i>
          </InfoCard>

          

        <div className="container-clients">
          {
            example.map( cliente => (
              <ClientCard  name={cliente} key={cliente}/>
            ))
          }
        </div>
          
        </Layout>  
    )
}

export default clients