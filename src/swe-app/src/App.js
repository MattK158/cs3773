import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import AdminSignIn from './pages/AdminSignIn';
import OrderSummary from './pages/OrderSummary';
import Orders from './pages/Orders';
import { UserProvider } from './UserContext';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminsignin" element={<AdminSignIn />} />
          <Route path="/ordersummary" element={<OrderSummary />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
