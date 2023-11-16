import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart({ cart, userId }) {
  const SALES_TAX_RATE = 0.0825;
  const subtotal = cart.reduce((acc, product) => acc + (Number(product.price) || 0), 0);
  const tax = subtotal * SALES_TAX_RATE;
  const total = subtotal + tax;
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://ec2-3-16-1-211.us-east-2.compute.amazonaws.com/api/shoppingCarts/1`);
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    if (userId) {
      fetchCartItems();
    }
  }, [userId]);

  const toFixedPrice = (price) => {
    return (typeof price === 'number' && !isNaN(price) ? price.toFixed(2) : 'N/A');
  };

  console.log('Cart Items:', cart);
  cart.forEach((product, index) => {
    console.log(`Product ${index}: Price - ${product.price}, Type - ${typeof product.price}`);
  });

  // if (!cart || cart.length === 0) {
  //   return <div className="cart-empty">Your cart is empty.</div>;
  // }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map((product, index) => (
          <div className="cart-item" key={index}>
            <img src={product.imgURL || product.imgUrl} alt={product.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{product.name}</h3>
              {/* Temporarily display the raw price value */}
              <p className="cart-item-price">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Subtotal: ${toFixedPrice(subtotal)}</p>
        <p>Tax: ${toFixedPrice(tax)}</p>
        <p className="cart-total">Total: ${toFixedPrice(total)}</p>
      </div>
      <div className="back-to-catalog-container">
      <Link
                to='/catalog' className="back-to-catalog">
                Catalog
              </Link>
      <a className="back-to-catalog" href="/checkout">
        Checkout
      </a>
      </div>
    </div>
  );
}

export default Cart;
