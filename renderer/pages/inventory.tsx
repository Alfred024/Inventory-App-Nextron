import { AddButton, InfoCard, Layout, ProductCard, SeachInput } from '../components'

const inventory = () => {
  return (
    <Layout title='Inventario'>
      <div id='Inventory'>
        <div className='flex-row space-between'>
          <h1>Inventario</h1>
          <SeachInput />
        </div>


        <div className='topInfo mb-50'>
          {/* Cantidad total de productos */}
          <InfoCard number={54} text='en existencia'>
            <i className="fa-solid fa-boxes-stacked"></i>
          </InfoCard>

          {/* Productos registrados */}
          <InfoCard number={10} text='registrados'>
            <i className="fa-solid fa-list"></i>
          </InfoCard>

          {/* Productos con bajo inventario (menor a 5) */}
          <InfoCard number={10} text='con bajo inventario'>
            <i className="fa-solid fa-close"></i>
          </InfoCard>
        </div>


        <div className='products'>
          {/* Listado de producto con foto, nombre, precio y cantidad */}
          <ProductCard />
          <ProductCard />

          {/* Al hacer click en el producto, mostrar modal para modificar todos los campos */}
        </div>
      </div>


      {/* Botón para añadir producto */}
      <AddButton />


    </Layout>
  )
}

export default inventory