import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Table/Table.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// eslint-disable-next-line
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CustomersTable({ customers, onDelete }) {
  const [openModifyDialog, setOpenModifyDialog] = React.useState(false);
  const [openAddProductDialog, setOpenAddProductDialog] = React.useState(false);
  const [updateFormData, setUpdateFormData] = React.useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [addFormData, setAddFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
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

  const handleDelete = (customerId) => {
    onDelete(customerId);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addDataToServer(addFormData);
  };

  // API post request
  const addDataToServer = (data) => {
    axios
      .post("/api/customers", data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error("Error adding product: ", error);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received, request:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error setting up the request:", error.message);
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
    axios
      .put(`/api/customers/${data.id}`, data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error("Error updating product: ", error);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received, request:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error setting up the request:", error.message);
        }
      });
    handleModifyClose();
  };

  // Form field change handler
  const handleModifyInputChange = ({ target }) => {
    const { name, value } = target;
    setUpdateFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Form field change handler
  const handleAddInputChange = ({ target }) => {
    const { name, value } = target;
    setAddFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="table-container">
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
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
                    <Dialog open={openModifyDialog} onClose={handleModifyClose}>
                      <DialogTitle>Modify Customer</DialogTitle>
                      <DialogContent>
                      <TextField
                          autoFocus
                          margin="dense"
                          id={`customerID-${customer.id}`}
                          name="id"
                          value={updateFormData.id}
                          label="Customer ID"
                          type="text"
                          fullWidth
                          variant="standard"
                          onChange={handleModifyInputChange}
                        />
                        <TextField
                          autoFocus
                          margin="dense"
                          id={`customerFirstName-${customer.id}`}
                          name="firstName"
                          value={updateFormData.firstName}
                          label="First Name"
                          type="text"
                          fullWidth
                          variant="standard"
                          onChange={handleModifyInputChange}
                        />
                        <TextField
                          autoFocus
                          margin="dense"
                          id={`customerLastName-${customer.id}`}
                          name="lastName"
                          value={updateFormData.lastName}
                          label="Last Name"
                          type="text"
                          fullWidth
                          variant="standard"
                          onChange={handleModifyInputChange}
                        />
                        <TextField
                          autoFocus
                          margin="dense"
                          id={`customerEmail-${customer.id}`}
                          name="email"
                          value={updateFormData.email}
                          label="Email"
                          type="email"
                          fullWidth
                          variant="standard"
                          onChange={handleModifyInputChange}
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={handleModifyClose}
                          style={{ position: "absolute", top: 1, right: 1 }}
                        >
                          Cancel
                        </Button>
                        <Button onClick={handleFormUpdate}>Update</Button>
                      </DialogActions>
                    </Dialog>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(customer.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Button
        variant="contained"
        onClick={handleAddOpen}
        style={{ marginTop: "10px" }}
      >
        Add Customer
      </Button>
      <Dialog open={openAddProductDialog} onClose={handleAddClose}>
        <DialogTitle>Add Customer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="firstName"
            value={addFormData.firstName}
            id='firstNameID'
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleAddInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="lastName"
            value={addFormData.lastName}
            id='lastNameID'
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleAddInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="email"
            value={addFormData.email}
            id='emailID'
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleAddInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleAddClose}
            style={{ position: "absolute", top: 1, right: 1 }}
          >
            Cancel
          </Button>
          <Button variant="contained" onClick={handleFormSubmit}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
