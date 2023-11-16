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
        <div className='checkout-main'>
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
                        <button type="submit">Complete Checkout</button>
                    </div>
                </form>
            </div>
        </div>
        
    );
};

export default Checkout;
