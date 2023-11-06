import React, { useState, useEffect } from 'react';
import './Products.css';
import ProductsTable from './ProductsTable';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // fetch data here
    useEffect(() => {
        axios.get('/api/items') // insert API endpoint here
        .then((response) => {
            if(response.status !== 200) {
                throw new Error('Failed to fetch products');
            }
            setProducts(response.data);
            setIsPending(false);
            setError(null);
            console.log(response.data);
        })
        .catch((error) => {
            setIsPending(false);
            setError(error.message);
        });
    }, []);

    return (
       <div className="Products">
            <h1>Products</h1>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { products && <ProductsTable products={products} />}
       </div>
    )
}

export default Products;