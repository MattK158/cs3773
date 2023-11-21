import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


const makeStyles = (status) => {
  if(status === 'Staged') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'In-progress'){
    return {
      background: 'lightpink',
      color: 'darkred'
    }
  }
  else {
    return {
      background: '#59bfff',
      color: 'white'
    }
  }
}

export default function BasicTable() {
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

  const recentRows = orders?.slice(0, 4) || []; // get the first 4 rows or an empty array if orders is null
  console.log("recent rows:", recentRows);

  if (!recentRows.length) {
    return (
      <div className="Table">
        <h3>Recent Orders</h3>
        <p>No recent orders found.</p>
      </div>
    );
  }

  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px #80808029" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell align="left">Order ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Time</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recentRows.map((row) => (
              <TableRow key={row.customer} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.customerId}
                </TableCell>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.orderDate}</TableCell>
                <TableCell align="left">{row.pickupTime}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyles(row.status)}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
