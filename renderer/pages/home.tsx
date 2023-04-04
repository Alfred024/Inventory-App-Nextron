import React from 'react';
import { Layout, LineChartTest } from '../components';

function Home() {
    return (
        <Layout title='ventas'>
            {/*DIVIDIR PANTALLA EN 4 PARTES */}

            {/* //Parte 1: Gráfico de ventas (eje -,+) */}

            {/* //Parte 2: Texto con número (dinero) de ventas (eje +,+) */}

            {/* //Parte 3: Mejores clientes (eje -,-) */}

            {/* //Parte 4: Gráfico de pastel sobre los productos más vendidos (eje +,-) */}



            {/* TEST DE LIBRERÍA ChartJS */}
            <LineChartTest />
        </Layout>
    );
};

export default Home;
