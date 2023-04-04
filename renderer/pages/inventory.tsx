import React from 'react'
import { InfoCard, Layout, ProductCard } from '../components'

const inventory = () => {
  return (
    <Layout title='Inventario'>
      <div id='Inventory'>
        <h1>Inventario</h1>
        <hr />

        <div className='topInfo'>
          {/* Cantidad total de productos */}
          <InfoCard number={54} text='en existencia'>
            <i className="fa-solid fa-boxes-stacked"></i>
          </InfoCard>

          {/* Productos registrados */}
          <InfoCard number={10} text='registrados'>
            <i className="fa-solid fa-list"></i>
          </InfoCard>

          {/* Buscar producto */}
          <div>
            <input type="text" />
          </div>
        </div>
        <hr />

        <div className='products'>
          {/* Listado de producto con foto, nombre, precio y cantidad */}
          <ProductCard />
          <ProductCard />

          {/* Al hacer click en el producto, mostrar modal para modificar todos los campos */}
        </div>
      </div>




    </Layout>
  )
}

export default inventory