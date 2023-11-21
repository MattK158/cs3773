import React, { useState, useEffect } from "react";
import "./Orders.css";
import OrdersTable from "./OrdersTable";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Orders = () => {
  const [orders, setOrders] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // fetch data here
  useEffect(() => {
    axios
      .get("/api/orders") // insert API endpoint here
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Failed to fetch orders");
        }
        setOrders(response.data);
        setIsPending(false);
        setError(null);
        console.log(response.data);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  }, []);

  // TODO: sort orders by date, last name, or dollar amount based on which radio button is selected
  const handleSort = (event) => {
    const criteria = event.target.value;
    let sortedOrders = [];

    if (criteria === "date") {
      sortedOrders = [...orders].sort((a, b) => {
        return new Date(a.orderDate) - new Date(b.orderDate);
      });
    } else if (criteria === "customerId") {
      sortedOrders = [...orders].sort((a, b) => {
        return a.customerId - b.customerId;
      });
    } else if (criteria === "dollarAmount") {
      sortedOrders = [...orders].sort((a, b) => {
        return a.orderSummaryDto.totalPrice - b.orderSummaryDto.totalPrice;
      });
    }

    setOrders(sortedOrders);
  };

  return (
    <div className="Orders">
      <h1>Orders</h1>
      <FormControl>
        <FormLabel id="orderSort" style={{ color: "black" }}>Sort Orders By:</FormLabel>
        <RadioGroup
          row
          aria-labelledby="orderSort"
          name="row-radio-buttons-group"
          onChange={handleSort}
        >
          <FormControlLabel value="date" control={<Radio />} label="Order Date" />
          <FormControlLabel value="customerId" control={<Radio />} label="Customer ID" />
          <FormControlLabel value="dollarAmount" control={<Radio />} label="Order Size in $" />
        </RadioGroup>
      </FormControl>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {orders && <OrdersTable orders={orders} />}
    </div>
  );
};

export default Orders;

// import React, { useState, useEffect } from 'react';
// import './Orders.css';
// import OrdersTable from './OrdersTable';
// import axios from 'axios';

// const Orders = () => {
//     const [orders, setOrders] = useState(null);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);
//     const [sortBy, setSortBy] = useState('orderDate');
//     const [sortOrder, setSortOrder] = useState('asc');

//     // fetch data here
//     useEffect(() => {
//         axios.get('/api/orders') // insert API endpoint here
//         .then((response) => {
//             if(response.status !== 200) {
//                 throw new Error('Failed to fetch orders');
//             }
//             setOrders(response.data);
//             setIsPending(false);
//             setError(null);
//             console.log(response.data);
//         })
//         .catch((error) => {
//             setIsPending(false);
//             setError(error.message);
//         });
//     }, []);

//     const handleSort = (criteria) => {
//         setSortBy(criteria);
//         setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
//     };

//     const sortedOrders = () => {
//         if (!orders) return [];

//         return [...orders].sort((a, b) => {
//             const valueA = a[sortBy];
//             const valueB = b[sortBy];

//             if (sortBy === 'orderDate') {
//                 return sortOrder === 'asc' ? new Date(valueA) - new Date(valueB) : new Date(valueB) - new Date(valueA);
//             } else {
//                 return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
//             }
//         });
//     };

//     return (
//         <div className="Orders">
//             <h1>Orders</h1>
//             { error && <div>{ error }</div> }
//             { isPending && <div>Loading...</div> }
//             { orders &&
//                 <OrdersTable
//                     orders={sortedOrders()}
//                     onSort={handleSort}
//                     sortBy={sortBy}
//                     sortOrder={sortOrder}
//                 />
//             }
//         </div>
//     )
// }

// export default Orders;
