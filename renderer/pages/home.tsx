import React from 'react';
import { Layout, LineChartTest, TotalSalesTest,DoughnutTest, TopClientsTest } from '../components';

function Home() {
    return (
        <Layout title='ventas'>
            <div className='graphicsContainer'>
              <div className='lineChartContainer'>
                <LineChartTest />
              </div>
              <TotalSalesTest 
                totalSales={100000}
              />
              <TopClientsTest 
                clients = {""}
              />
              <div className='doughnutContainer'>
                <DoughnutTest />
              </div>
            </div>
            {/*DIVIDIR PANTALLA EN 4 PARTES */}

            {/* //Parte 1: Gráfico de ventas (eje -,+) */}
            {/* //Parte 2: Texto con número (dinero) de ventas (eje +,+) */}
            {/* //Parte 3: Mejores clientes (eje -,-) */}
            {/* //Parte 4: Gráfico de pastel sobre los productos más vendidos (eje +,-) */}

            {/* TEST DE LIBRERÍA ChartJS */}
            
        </Layout>
    );
};

export default Home;
