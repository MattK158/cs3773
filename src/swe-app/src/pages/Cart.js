/* Cart.js */
import React from 'react';
import './Cart.css'; // Make sure to create a Cart.css file in the same directory

function Cart({ cart }) {
  if (!cart || cart.length === 0) {
    return <div className="cart-empty">Your cart is empty.</div>;
  }

  // Helper function to safely convert price to a fixed decimal string
  const toFixedPrice = (price) => {
    return (typeof price === 'number' ? price.toFixed(2) : '0.00');
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map((product, index) => (
          <div className="cart-item" key={index}>
            <img src={product.imgUrl} alt={product.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{product.name}</h3>
              <p className="cart-item-price">Price: ${toFixedPrice(product.price)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        Total: ${toFixedPrice(cart.reduce((acc, product) => acc + (Number(product.price) || 0), 0))}
      </div>
    </div>
  );
}

export default Cart;