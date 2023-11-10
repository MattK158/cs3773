// import React, { useState, useEffect } from 'react';
// import './Orders.css';
// import OrdersTable from './OrdersTable';
// import axios from 'axios';

// const Orders = () => {
//     const [orders, setOrders] = useState(null);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);

//     // fetch data here
//     useEffect(() => {
//         axios.get('/api/items') // insert API endpoint here
//         .then((response) => {
//             if(response.status !== 200) {
//                 throw new Error('Failed to fetch products');
//             }
//             setProducts(response.data);
//             setIsPending(false);
//             setError(null);
//             console.log(response.data);
//         })
//         .catch((error) => {
//             setIsPending(false);
//             setError(error.message);
//         });
//     }, []);
    
//     return (
//        <div className="Orders">
//             <h1>Orders</h1>
//             { error && <div>{ error }</div> }
//             { isPending && <div>Loading...</div> }
//             {orders && <OrdersTable orders={orders}/>}
//        </div>
//     )
// }

// export default Orders;