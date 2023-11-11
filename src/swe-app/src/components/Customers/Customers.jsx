import React, { useState, useEffect }from 'react';
import './Customers.css';
import CustomersTable from './CustomersTable';
import axios from 'axios';

const Customers = () => {
    const [customers, setCustomers] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // fetch data here
    useEffect(() => {
        axios.get('/api/customers') // insert API endpoint here
        .then((response) => {
            if(response.status !== 200) {
                throw new Error('Failed to fetch products');
            }
            setCustomers(response.data);
            setIsPending(false);
            setError(null);
            console.log(response.data);
        })
        .catch((error) => {
            setIsPending(false);
            setError(error.message);
        });
    }, []);
    
    // API delete request
    const onDelete = (customerId) => {
        axios.delete(`/api/customers/${customerId}`)
        .then((response) => {
            if(response.status === 200) {
                setCustomers(customers.filter((customer) => customer.id !== customerId));
            }
        })
        .catch((error) => {
            console.error('Error deleting customer: ', error);
        });
    }

    return (
        <div className="Customers">
            <h1>Customers</h1>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { customers && <CustomersTable customers={customers} onDelete={onDelete}/> }
        </div>
    )
}

export default Customers;