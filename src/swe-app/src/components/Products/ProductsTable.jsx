// a product should have a name, quantity, ID, category, and price

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../Table/Table.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

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

function TableRowComponent({ row }) {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  
    const handleModifyClick = () => {
      setIsDialogOpen(true);
    };
  
    const handleUpdateClick = () => {
      // Handle the update logic here
      setIsDialogOpen(false);
    };
  
    const handleCancelClick = () => {
      setIsDialogOpen(false);
    };

    const handleDeleteClick = () => {
        // Handle the delete logic here
        setIsDialogOpen(false);
    };
  
    return (
      <TableRow key={row.name}>
        {/* ... */}
        <TableCell align="left">
          <Button variant="outlined" color="primary" onClick={handleModifyClick}>Modify</Button>
          <Dialog open={isDialogOpen} onClose={handleCancelClick}>
            <DialogTitle>Modify {row.name}</DialogTitle>
            <DialogContent>
              <DialogContentText>

                {/* Include the form or other content for modifying the product here */}
                


              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleUpdateClick} color="primary">Update</Button>
              <Button onClick={handleDeleteClick} color="primary">Delete</Button>
              <Button onClick={handleCancelClick} color="primary" autoFocus>Cancel</Button>
            </DialogActions>
          </Dialog>
        </TableCell>
      </TableRow>
    );
  }

export default function BasicTable() {
  // ...

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
                <TableRowComponent row={row} />
                </TableRow>
            ))}
            </TableBody>

          
        </Table>
      </TableContainer>
    </div>
  );
}