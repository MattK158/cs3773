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
                <div key={order.id} className='order'>
                    <div className='ordersummary-header'>
                        <h2>Order successfully placed!</h2>
                        <h1>Order Summary</h1>
                        <h1>{"Order ID: " + order.id}</h1>
                        <h1>{"Order Pickup Time: " + order.pickupTime}</h1>
                    </div>
                    <div className='ordersummary-body'>
                        {order.orderSummaryDto.orderItemsInCart.map((item) => (
                            <div className='item' key={item.id}>
                                <h3 className='item-name'>{item.name}</h3>
                                <p className='item-price'>{"$" + item.priceAtPurchase}</p>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <p>Order Total: ${order.orderSummaryDto.totalPrice}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default OrderSummary;