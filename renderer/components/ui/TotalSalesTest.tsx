import NextLink from 'next/link';

export const TotalSalesTest = ({totalSales}) => {
    return(
        <div className='totalTestContainer'>
            <h1>Ventas totales: </h1>
            <p>{totalSales}</p>
        </div>
    );
}