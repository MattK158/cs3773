import React from 'react';
import './Orders.css';
import OrdersTable from './OrdersTable';

const Orders = () => {
    return (
       <div className="Orders">
        <h1>Orders</h1>
            <OrdersTable/>
       </div>
    )
}

export default Orders;