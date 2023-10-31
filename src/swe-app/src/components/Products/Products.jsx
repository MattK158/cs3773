import React from 'react';
import './Products.css';
import ProductsTable from './ProductsTable';

const Products = () => {
    return (
       <div className="Products">
            <h1>Products</h1>
            <ProductsTable/>
       </div>
    )
}

export default Products;