import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Checkout.css';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
    const { user } = useUser();
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [selectedPickupTime, setSelectedPickupTime] = useState(null);
    const [selectedButton, setSelectedButton] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        cardNumber: '',
        cardExpiry: '',
        cardCVV: ''
    });

    const SALES_TAX_RATE = 0.0825;
    const subtotal = cart.reduce((acc, product) => acc + (Number(product.price) || 0), 0);
    const tax = subtotal * SALES_TAX_RATE;
    const total = subtotal + tax;

    const fetchCartItems = () => {
        if (user && user.custId) {
            axios.get(`/api/shoppingCarts/${user.custId}`)
                .then((response) => {
                    setCart(response.data.itemsInCart);
                })
                .catch((error) => {
                    console.error('Error fetching data: ', error);
                });
        } else {
            console.log("User data is not available");
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, []);

    const toFixedPrice = (price) => {
        return (typeof price === 'number' && !isNaN(price) ? price.toFixed(2) : 'N/A');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePickupTimeSelection = (pickupTime, buttonId) => {
        setSelectedPickupTime(pickupTime);
        setSelectedButton(buttonId);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedPickupTime) {
            const postData = {
                ...formData,
                customerId: user.custId,
                pickupTime: selectedPickupTime
            };
            axios.post('/api/orders', postData)
                .then(response => {
                    console.log('Checkout completed:', response.data);
                    return axios.delete(`/api/shoppingCarts/emptyCart/${user.custId}`);
                })
                .then(response => {
                    console.log('Cart emptied:', response.data);
                    setCart([]);
                    navigate('/ordersummary');
                })
                .catch(error => {
                    console.error('Error during checkout:', error);
                });

        } else {
            console.log('Please select a pickup time');
        }
    };

    return (
        <div className='checkout-main'>
            <div className="checkout-container-left">
                <h2>Your Cart</h2>
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
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <p>Subtotal: ${toFixedPrice(subtotal)}</p>
                    <p>Tax: ${toFixedPrice(tax)}</p>
                    <h3 className="cart-total">Total: ${toFixedPrice(total)}</h3>
                </div>
            </div>
            <div className="checkout-container">
                <h2>Checkout</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="text" name="cardExpiry" placeholder="Card Expiry MM/YY" value={formData.cardExpiry} onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="text" name="cardCVV" placeholder="Card CVV" value={formData.cardCVV} onChange={handleChange} required />
                    </div>
                    <div>
                        <button type="submit" href="/orders" className="complete-checkout-button">Complete Checkout</button>
                    </div>
                </form>
            </div>
            <div className="checkout-container-right">
                <h2>Pick-Up Times</h2>
                <div className="time-container">
                    <button 
                        className={selectedButton === 'time1' ? 'selected' : ''} 
                        onClick={() => handlePickupTimeSelection("2023-11-22T12:40:00", 'time1')}
                    >
                        12:40
                    </button>
                    <button 
                        className={selectedButton === 'time2' ? 'selected' : ''} 
                        onClick={() => handlePickupTimeSelection("2023-11-22T13:30:00", 'time2')}
                    >
                        1:30
                    </button>
                    <button 
                        className={selectedButton === 'time3' ? 'selected' : ''} 
                        onClick={() => handlePickupTimeSelection("2023-11-22T16:00:00", 'time3')}
                    >
                        4:00
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
