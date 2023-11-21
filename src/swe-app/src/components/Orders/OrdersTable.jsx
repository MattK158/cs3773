import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Table/Table.css";
// eslint-disable-next-line

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

export default function OrdersTable({ orders }) {
  return (
    <div 
        className="Table"
        style={{ overflowY: "scroll", maxHeight: "600px" }}
    >
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px #80808029" }}
      >
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
            {orders.map((order) => (
              <TableRow
                key={order.customer}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.customerId}
                </TableCell>
                <TableCell align="left">{order.id}</TableCell>
                <TableCell align="left">{order.orderDate}</TableCell>
                <TableCell align="left">{order.pickupTime}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyles(order.status)}>
                    {order.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
