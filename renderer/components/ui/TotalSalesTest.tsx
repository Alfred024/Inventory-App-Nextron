import NextLink from 'next/link';

export const TotalSalesTest = ({totalSales}) => {
    return(
        <div id='section' className='totalTestContainer'>
            <div>
                <p>Ventas totales: </p>
            </div>
            
            <div>
                <p>{totalSales}</p>
                <button className='refreshName'>R</button>
            </div>
            
        </div>
    );
}