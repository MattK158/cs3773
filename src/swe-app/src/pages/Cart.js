import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Cart.css';
import { useUser } from '../UserContext';

function Cart({ cart, setCart, userId }) {
  const { user } = useUser();
  const SALES_TAX_RATE = 0.0825;
  const subtotal = cart.reduce((acc, product) => acc + (Number(product.price) || 0), 0);
  const tax = subtotal * SALES_TAX_RATE;
  const total = subtotal + tax;
  const fetchCartItems = () => {
    axios.get(`/api/shoppingCarts/${user.custId}`)
      .then((response) => {
        console.log('Cart Items:', response.data.itemsInCart);
        setCart(response.data.itemsInCart);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  };
  useEffect(() => {
    fetchCartItems();
  }, []);
  const removeItemFromCart = (cartId) => {
    axios.delete(`/api/shoppingCarts/${cartId}`)
      .then(response => {
        console.log('Item removed:', response.data);
        fetchCartItems(); 
        const updatedCart = cart.filter(product => product.id !== cartId);
        setCart(updatedCart);
      })
      .catch(error => {
        console.error('Error removing item from cart:', error);
      });
  };


  useEffect(() => {
    axios.get(`/api/shoppingCarts/${user.custId}`) 
      .then((response) => {
        console.log('Cart Items:', response.data.itemsInCart);
        setCart(response.data.itemsInCart);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const toFixedPrice = (price) => {
    return (typeof price === 'number' && !isNaN(price) ? price.toFixed(2) : 'N/A');
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map((product, index) => (
          <div className="cart-item" key={index}>
            <div className="cart-item-details">
            <img src={product.imgURL || product.imgUrl} alt={product.name} className="cart-item-image" />
              <div className="cart-item-text">
                <h3 className="cart-item-name">{product.name}</h3>
                <p className="cart-item-price">Price: ${product.price}</p>
              </div>
            </div>
              <button type="button" onClick={() => removeItemFromCart(product.cartId)}>Remove From Cart</button>
          </div>
        ))}
      </div>
      <div className="cart-subtotal-tax">
        <p>Subtotal: ${toFixedPrice(subtotal)}</p>
        <p>Tax: ${toFixedPrice(tax)}</p>
        <h3 className="cart-total">Total: ${toFixedPrice(total)}</h3>
      </div>
      <div className="back-to-catalog-container">
      <Link to='/catalog' className="back-to-catalog">Catalog</Link>
      <Link to='/checkout' className="back-to-catalog">Checkout</Link>
      </div>
    </div>
  );
}

export default Cart;
