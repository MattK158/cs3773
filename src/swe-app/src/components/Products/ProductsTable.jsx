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
import DeleteIcon from '@mui/icons-material/Delete';

export default function ProductsTable({ products, onDelete, setProducts }) {
  const [openModifyDialog, setOpenModifyDialog] = React.useState(false);
  const [openAddProductDialog, setOpenAddProductDialog] = React.useState(false);
  const [updateFormData, setUpdateFormData] = React.useState({
    name: '',
    description: '',
    id: '',
    quantity: '',
    category: '',
    price: ''
  });
  const [addFormData, setAddFormData] = React.useState({
    name: '',
    description: '',
    // id: '',
    quantity: '',
    category: '',
    price: '',
    imgURL: ''
  });

  
  const handleModifyClickOpen = () => {
    setOpenModifyDialog(true);
  };

  const handleModifyClose = () => {
    setOpenModifyDialog(false);
  };

  const handleAddOpen = () => {
    setOpenAddProductDialog(true);
  };

  const handleAddClose = () => {
    setOpenAddProductDialog(false);
  };
  
  const handleDelete = (itemId) => {
    onDelete(itemId);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addDataToServer(addFormData);
  };

  // API post request
  const addDataToServer = (data) => {
    axios.post('/api/items', data)
    .then((response) => {
      if(response.status === 200) {
        console.log(response.data);
      }
    })
    .catch((error) => {
      console.error('Error adding product: ', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
      else if (error.request) {
        // The request was made but no response was received
        console.error('No response received, request:', error.request);
      }
      else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
    });
    handleModifyClose();
  };

  // Form submit (update) handler
  const handleFormUpdate = (event) => {
    event.preventDefault();
    updateDataToServer(updateFormData);
  };

  // API put request
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

  // Form field change handler
  const handleModifyInputChange = ({ target }) => {
    const { name, value } = target;
    setUpdateFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Form field change handler
  const handleAddInputChange = ({ target }) => {
    const { name, value } = target;
    setAddFormData((prevFormData) => ({
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
                <Dialog open={openModifyDialog} onClose={handleModifyClose}>
                  <DialogTitle>Modify Product</DialogTitle>
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      name='name'
                      value={updateFormData.name}
                      id={`productName-${product.id}`}
                      label="Product Name"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={handleModifyInputChange}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      name='description'
                      value={updateFormData.description}
                      id={`productDescription-${product.id}`}
                      label="Product Description"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={handleModifyInputChange}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      name='id'
                      value={updateFormData.id}
                      id={`productId-${product.id}`}
                      label="Product ID"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={handleModifyInputChange}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      name='quantity'
                      value={updateFormData.quantity}
                      id={`quantity-${product.id}`}
                      label="Product Quantity"
                      type="number"
                      fullWidth
                      variant="standard"
                      onChange={handleModifyInputChange}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      name='category'
                      value={updateFormData.category}
                      id={`category-${product.id}`}
                      label="Product Category"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={handleModifyInputChange}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      name='price'
                      value={updateFormData.price}
                      id={`price-${product.id}`}
                      label="Product Price"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={handleModifyInputChange}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleModifyClose} style={{ position: 'absolute', top: 1, right: 1 }}>
                      Cancel
                    </Button>
                    <Button variant='contained' onClick={handleFormUpdate}>Update</Button>
                    <Button variant='contained' onClick={handleModifyClose}>Delete</Button>
                  </DialogActions>
                </Dialog>
                </TableCell>
                <TableCell align="left">
                  <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDelete(product.id)}> { /* TODO: Add onClick functionality for deleting a customer */ }
                    Delete
                  </Button>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
      </TableContainer>
      <Button variant='contained' onClick={handleAddOpen} style={{ marginTop: '10px' }}>
        Add Product
      </Button>
      <Dialog open={openAddProductDialog} onClose={handleAddClose}>
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name='name'
            value={addFormData.name}
            id={`productName`}
            label="Product Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleAddInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name='description'
            value={addFormData.description}
            id={`productDescription`}
            label="Product Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleAddInputChange}
          />
          {/* <TextField
            autoFocus
            margin="dense"
            name='id'
            value={addFormData.id}
            id={`productId`}
            label="Product ID"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleAddInputChange}
          /> */}
          <TextField
            autoFocus
            margin="dense"
            name='quantity'
            value={addFormData.quantity}
            id={`quantity`}
            label="Product Quantity"
            type="number"
            fullWidth
            variant="standard"
            onChange={handleAddInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name='category'
            value={addFormData.category}
            id={`category`}
            label="Product Category"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleAddInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name='price'
            value={addFormData.price}
            id={`price`}
            label="Product Price"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleAddInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name='imgURL'
            value={addFormData.imgURL}
            id={`imgURL`}
            label="Product Image URL"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleAddInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddClose} style={{ position: 'absolute', top: 1, right: 1 }}>
            Cancel
          </Button>
          <Button variant='contained' onClick={handleFormSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}