import { ClientCard, InfoCard, Layout } from "../components"

const clients = () => {
    return (
        <Layout title="Clientes">
            <InfoCard number={10} text='Clientes Totales'>
            <i className="fa-solid fa-list"></i>
          </InfoCard>

        <div className="container-clients">
          <ClientCard/>
          <ClientCard/>
          <ClientCard/>
        </div>
          
        </Layout>

       
    )
}

export default clients