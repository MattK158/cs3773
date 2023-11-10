import React from 'react';
import './Cart.css';

function Cart({ cart }) {
  // Helper function to safely convert price to a fixed decimal string
  const toFixedPrice = (price) => {
    return (typeof price === 'number' && !isNaN(price) ? price.toFixed(2) : 'N/A');
  };

  // Detailed logging for each product in the cart
  console.log('Cart Items:', cart);
  cart.forEach((product, index) => {
    console.log(`Product ${index}: Price - ${product.price}, Type - ${typeof product.price}`);
  });

  if (!cart || cart.length === 0) {
    return <div className="cart-empty">Your cart is empty.</div>;
  }

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
      <div className="cart-total">
        Total: ${toFixedPrice(cart.reduce((acc, product) => acc + (Number(product.price) || 0), 0))}
      </div>
      <div className="back-to-catalog-container">
      <a className="back-to-catalog" href="/catalog">
        Back to Catalog
      </a>
      <a className="back-to-catalog" href="/checkout">
        Checkout
      </a>
      </div>
    </div>
  );
}

export default Cart;
