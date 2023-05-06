import React, { useState } from 'react';
import { Layout, LineChartTest, TotalSalesTest, DoughnutTest, TopClientsTest, ModalProduct } from '../components';

function Home() {
  const [showModal, showModalState] = useState(false);
  const modalState = () =>{
    return true;
  }

  return (
    <Layout title='Inicio'>
      <div className='flex-row space-between'>
        <div>
          <h1>Ventas</h1>
        </div>
        <div>
          { /*Botón que creará el modal */ }
          <button
            onClick={() => showModalState(true)}
            className='btn-primary'>Agregar venta</button>
          <ModalProduct
            showModal={showModal}
            closeModal={() => showModalState(false)}
          />
        </div>
      </div>
      <div className='graphicsContainer'>
        <div>
          <LineChartTest />
        </div>
        <div className='space-between' style={{ flexDirection: 'row', display: 'flex', margin:'10px', gap:'10px' }}>
          <TotalSalesTest totalSales={100000} />
          <TotalSalesTest totalSales={100000} />
        </div>
        <div>
          <TopClientsTest clients={""} />
        </div>
        <div className='doughnut-graphic'>
          <DoughnutTest />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
