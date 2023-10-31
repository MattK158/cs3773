// a product should have a name, quantity, ID, category, and price

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../Table/Table.css';

function createData(name, productID, quantity, category, price) {
  return { name, productID, quantity, category, price };
}

// needs to be dynamic
const rows = [
  createData("Ground Beef", "1", "10", "Grocery", "$10.00"),
  createData("Chicken Breast", "2", "27", "Grocery", "$7.00"),
  createData("Hershey Chocolate", "3", "55", "Grocery", "$0.99"),
  createData("Milk", "4", "10", "Grocery", "$2.00"),
];



export default function BasicTable() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className="Table" style={{ overflowY: 'scroll', maxHeight: '600px' }}>
      <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px #80808029' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Product ID</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.productID}</TableCell>
                <TableCell align="left">{row.quantity}</TableCell>
                <TableCell align="left">{row.category}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">
                <Button variant="outlined" onClick={handleClickOpen}>
                  Modify
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Modify Product</DialogTitle>
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="productName"
                      label="Product Name"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="productID"
                      label="Product ID"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="quantity"
                      label="Product Quantity"
                      type="number"
                      fullWidth
                      variant="standard"
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="category"
                      label="Product Category"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="price"
                      label="Product Price"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Delete</Button>
                    <Button onAbort={handleClose}>Update</Button>
                  </DialogActions>
                </Dialog>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}