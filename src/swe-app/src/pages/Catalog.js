/* Catalog.js */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Catalog.css';

const Catalog = ({ addToCart }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://ec2-3-16-1-211.us-east-2.compute.amazonaws.com/api/items';
    axios.get(apiUrl)
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: Could not load items. Please try again later.</div>;

  return (
    <div className="catalog">
      {items.map(item => (
        <div key={item.id} className="catalog-item">
          <img src={item.imgURL} alt={item.name} className="catalog-item-image" />
          <h3 className="catalog-item-name">{item.name}</h3>
          <p className="catalog-item-description">{item.description}</p>
          <p className="catalog-item-price">${item.price}</p>
          <p className="catalog-item-quantity">Quantity: {item.quantity}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};


export default Catalog;
