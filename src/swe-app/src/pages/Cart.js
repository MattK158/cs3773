import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Cart.css';
import { useUser } from '../UserContext';

function Cart({ cart, setCart, userId }) {
  const { user, signIn, signOut } = useUser();
  const SALES_TAX_RATE = 0.0825;
  const subtotal = cart.reduce((acc, product) => acc + (Number(product.price) || 0), 0);
  const tax = subtotal * SALES_TAX_RATE;
  const total = subtotal + tax;
  // dont think we need this state variable below anymore:
  // const [cartItems, setCartItems] = useState([]);
  // useEffect(() => {
  //   const fetchCartItems = async () => {
  //     try {
  //       const response = await axios.get('/api/shoppingCarts/1');
  //       console.log('Cart Items:', response.data);
  //       setCartItems(response.data);
  //     } catch (error) {
  //       console.error('Error fetching cart items:', error);
  //     }
  //   };

  //   if (userId) {
  //     console.log('Fetching cart items for user ID:', userId);
  //     fetchCartItems();
  //   }
  // }, [userId]);


  // Josh's code:
  useEffect(() => {
    // old endpoint: '/api/shoppingCarts/1'
    axios.get(`/api/shoppingCarts/${user.custId}`) // `/api/shoppingCarts/${user.customerId}` - hopefully new endpoint works
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

  // console.log('Cart Items (using cart variable):', cart);
  // cart.forEach((product, index) => {
  //   console.log(`Product ${index}: Price - ${product.price}, Type - ${typeof product.price}`);
  // });

  // if (!cart || cart.length === 0) {
  //   return <div className="cart-empty">Your cart is empty.</div>;
  // }

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
                {/* Temporarily display the raw price value */}
                <p className="cart-item-price">Price: ${product.price}</p>
              </div>
            </div>
            <button type="submit">Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Subtotal: ${toFixedPrice(subtotal)}</p>
        <p>Tax: ${toFixedPrice(tax)}</p>
        <p className="cart-total">Total: ${toFixedPrice(total)}</p>
      </div>
      <div className="back-to-catalog-container">
      <Link to='/catalog' className="back-to-catalog">Catalog</Link>
      <a className="back-to-catalog" href="/checkout">Checkout</a>
      </div>
    </div>
  );
}

export default Cart;
