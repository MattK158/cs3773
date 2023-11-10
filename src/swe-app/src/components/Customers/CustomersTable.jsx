import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../Table/Table.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// eslint-disable-next-line
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';

// function createData(customer, orderID, date, time, status) {
//   return { customer, orderID, date, time, status };
// }

// this should show customer data - see wireframe
// TODO: this data must be dynamic and come from the database
// for each customer in an array, createData for each customer
// const rows = [
  
// ];

export default function CustomersTable({ customers, onDelete }) {
    const [open, setOpen] = React.useState(false);
  
    const handleModifyClickOpen = () => {
      setOpen(true);
    };

    const handleModifyClose = () => {
      setOpen(false);
    };

    const handleDelete = (customerId) => {
      onDelete(customerId);
    };

  return (
    <div className="Table" style={{overflowY: 'scroll', maxHeight: '600px'}}>
        <TableContainer component={Paper}
        style={{boxShadow: "0px 13px 20px #80808029"}}
        >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="left">Customer ID</TableCell>
                <TableCell align="left">First Name</TableCell>
                <TableCell align="left">Last Name</TableCell>
                <TableCell align="left">Email</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {customers.map((customer) => (
                <TableRow
                key={customer.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {customer.id}
                </TableCell>
                <TableCell align="left">{customer.firstName}</TableCell>
                <TableCell align="left">{customer.lastName}</TableCell>
                <TableCell align="left">{customer.email}</TableCell>
                <TableCell align="left">
                <Button variant="outlined" onClick={handleModifyClickOpen}>
                  Modify
                </Button>
                <Dialog open={open} onClose={handleModifyClose}>
                  <DialogTitle>Modify Product</DialogTitle>
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="customerID"
                      label="Customer ID"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="firstName"
                      label="First Name"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="lastName"
                      label="Last Name"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="email"
                      label="Email"
                      type="email"
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleModifyClose} style={{ position: 'absolute', top: 1, right: 1 }}>
                      Cancel
                    </Button>
                    <Button onClick={handleModifyClose}>Update</Button>
                  </DialogActions>
                </Dialog>
                </TableCell>
                <TableCell align="left">
                  <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDelete(customer.id)}> { /* TODO: Add onClick functionality for deleting a customer */ }
                    Delete
                  </Button>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  );
}