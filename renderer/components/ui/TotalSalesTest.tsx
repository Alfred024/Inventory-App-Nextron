import NextLink from 'next/link';

export const TotalSalesTest = ({ totalSales }) => {
    return (

        <div className="sales-card">
            <div className="title">
                <span>
                    <i className="fa-solid fa-dollar-sign"></i>
                </span>
                <p className="title-text">
                    Ventas
                </p>
            </div>
            <div className="data">
                <p>
                    $39,500.00
                </p>
            </div>
        </div>

    );
}