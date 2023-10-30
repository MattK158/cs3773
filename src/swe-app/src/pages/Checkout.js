// Checkout.js

import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        cardNumber: '',
        cardExpiry: '',
        cardCVV: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the checkout data here, e.g., send to an API or payment gateway
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div>
                    <label>Card Number:</label>
                    <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
                </div>
                <div>
                    <label>Card Expiry:</label>
                    <input type="text" name="cardExpiry" value={formData.cardExpiry} onChange={handleChange} placeholder="MM/YY" required />
                </div>
                <div>
                    <label>Card CVV:</label>
                    <input type="text" name="cardCVV" value={formData.cardCVV} onChange={handleChange} required />
                </div>
                <div>
                    <button type="submit">Complete Checkout</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
