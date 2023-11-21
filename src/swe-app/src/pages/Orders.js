import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Checkout.css';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
    const { user } = useUser();
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(user && user.custId) {
            axios.get(`/api/orders/${user.custId}`)
                .then((response) => {
                    console.log("Response:", response.data);
                    setOrders(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching data: ', error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='ordersummary-main'>
            {orders.map((order) => (
                
            <div className='ordersummary-inner'>
                <div key={order.id} className='order'>
                    <div className='ordersummary-header'>
                    <h1>Thank you for your order</h1>
                    <div className='order-num'>
                        <h2>{"Order number:"}</h2>
                        <p>{order.id}</p>
                    </div>
                    <div className='pickup-time'>
                        <h2>{"Pickup Time:"}</h2>
                        <p>{order.pickupTime}</p>
                    </div>
                    <div className='ordersummary-body'>
                    {order.orderSummaryDto.orderItemsInCart.map((item) => (
                        <div className='item-display-box' key={item.id}>
                            <h4 className='item-name'>{item.name}</h4>
                            <p className='item-price'>{"$" + item.priceAtPurchase}</p>
                        </div>
                    ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Total: ${order.orderSummaryDto.totalPrice}</h3>
                    </div>
                </div>
                </div>
                </div>
            ))}
            
        </div>
    );
}

export default OrderSummary;