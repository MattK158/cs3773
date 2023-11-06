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
  
// ];

// export default function CustomersTable() {
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