import React from 'react';
import { Layout, LineChartTest, TotalSalesTest, DoughnutTest, TopClientsTest } from '../components';

function Home() {
  return (
    <Layout title='ventas'>
      <div className='flex-row space-between'>
        <div>
          <h1>Ventas</h1>
        </div>
        <div>
          <button className='btn-primary'>Agregar venta</button>
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
