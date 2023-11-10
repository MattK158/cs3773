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
import DialogTitle from '@mui/material/DialogTitle';
import '../Table/Table.css';
import axios from 'axios';

export default function ProductsTable({ products, onDelete }) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    description: '',
    id: '',
    quantity: '',
    category: '',
    price: ''
  });
  
  const handleModifyClickOpen = () => {
    setOpen(true);
  };

  const handleModifyClose = () => {
    setOpen(false);
  };
  
  const handleDelete = (itemId) => {
    onDelete(itemId);
  };

  const handleFormUpdate = (event) => {
    event.preventDefault();
    updateDataToServer(formData);
  };

  const updateDataToServer = (data) => {
    axios.put(`/api/items/${data.id}`, data)
    .then((response) => {
      if(response.status === 200) {
        console.log(response.data);
      }
    })
    .catch((error) => {
      console.error('Error updating product: ', error);

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received, request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
    });
    handleModifyClose();
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
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
            {products.map((product) => (
                <TableRow
                key={product.id} // needs to be product ID
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="left">{product.id}</TableCell>
                <TableCell align="left">{product.quantity}</TableCell>
                <TableCell align="left">{product.category}</TableCell>
                <TableCell align="left">{product.price}</TableCell>
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
                      name='name'
                      value={formData.name}
                      id={`productName-${product.id}`}
                      label="Product Name"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={handleInputChange}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      name='description'
                      value={formData.description}
                      id={`productDescription-${product.id}`}
                      label="Product Description"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={handleInputChange}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      name='id'
                      value={formData.id}
                      id={`productId-${product.id}`}
                      label="Product ID"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={handleInputChange}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      name='quantity'
                      value={formData.quantity}
                      id={`quantity-${product.id}`}
                      label="Product Quantity"
                      type="number"
                      fullWidth
                      variant="standard"
                      onChange={handleInputChange}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      name='category'
                      value={formData.category}
                      id={`category-${product.id}`}
                      label="Product Category"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={handleInputChange}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      name='price'
                      value={formData.price}
                      id={`price-${product.id}`}
                      label="Product Price"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={handleInputChange}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleModifyClose} style={{ position: 'absolute', top: 1, right: 1 }}>
                      Cancel
                    </Button>
                    <Button onClick={handleFormUpdate}>Update</Button>
                    <Button onClick={handleModifyClose}>Delete</Button>
                  </DialogActions>
                </Dialog>
                </TableCell>
                <TableCell align="left">
                  <Button variant="outlined" onClick={() => handleDelete(product.id)}> { /* TODO: Add onClick functionality for deleting a customer */ }
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