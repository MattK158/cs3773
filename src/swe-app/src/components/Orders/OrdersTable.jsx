// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import '../Table/Table.css';

// function createData(customer, orderID, date, time, status) {
//   return { customer, orderID, date, time, status };
// }

// // this should show customer data - see wireframe
// // TODO: this data must be dynamic and come from the database
// // for each customer in an array, createData for each customer
// const rows = [
//   createData("Customer 1", "CC24545", "10/10/2021", "10:00 AM", "Complete"),
//   createData("Customer 2", "CC24546", "10/10/2021", "8:00 AM", "Complete"),
//   createData("Customer 3", "CC24547", "10/10/2021", "10:00 AM", "In-progress"),
//   createData("Customer 4", "CC24548", "10/10/2021", "10:00 AM", "Staged"),
//   createData("Customer 5", "CC24549", "10/11/2021", "10:00 AM", "Complete"),
//   createData("Customer 6", "CC24550", "10/11/2021", "8:00 AM", "Complete"),
//   createData("Customer 7", "CC24551", "10/11/2021", "10:00 AM", "In-progress"),
//   createData("Customer 8", "CC24552", "10/11/2021", "10:00 AM", "Staged"),
//   createData("Customer 9", "CC24553", "10/12/2021", "10:00 AM", "Complete"),
//   createData("Customer 10", "CC24554", "10/12/2021", "8:00 AM", "Complete"),
//   createData("Customer 11", "CC24555", "10/12/2021", "10:00 AM", "In-progress"),
//   createData("Customer 12", "CC24556", "10/12/2021", "10:00 AM", "Staged"),
// ];

// const makeStyles = (status) => {
//   if(status === 'Staged') {
//     return {
//       background: 'rgb(145 254 159 / 47%)',
//       color: 'green',
//     }
//   }
//   else if(status === 'In-progress'){
//     return {
//       background: 'lightpink',
//       color: 'darkred'
//     }
//   }
//   else {
//     return {
//       background: '#59bfff',
//       color: 'white'
//     }
//   }
// }

// export default function OrdersTable({ orders }) {
//   return (
//     <div className="Table" style={{overflowY: 'scroll', maxHeight: '600px'}}>
//         <TableContainer component={Paper}
//         style={{boxShadow: "0px 13px 20px #80808029"}}
//         >
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//             <TableRow>
//                 <TableCell>Customer</TableCell>
//                 <TableCell align="left">Order ID</TableCell>
//                 <TableCell align="left">Date</TableCell>
//                 <TableCell align="left">Time</TableCell>
//                 <TableCell align="left">Status</TableCell>
//             </TableRow>
//             </TableHead>
//             <TableBody>
//             {rows.map((row) => (
//                 <TableRow
//                 key={row.customer}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                 >
//                 <TableCell component="th" scope="row">
//                     {row.customer}
//                 </TableCell>
//                 <TableCell align="left">{row.orderID}</TableCell>
//                 <TableCell align="left">{row.date}</TableCell>
//                 <TableCell align="left">{row.time}</TableCell>
//                 <TableCell align="left">
//                     <span className="status" style={makeStyles(row.status)}>{row.status}</span>
//                 </TableCell>
//                 </TableRow>
//             ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//     </div>
//   );
// }