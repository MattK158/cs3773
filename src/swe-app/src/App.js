import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp'; 
import SignIn from './pages/SignIn';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';

// testing purposes
import Admin from './pages/Admin';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
          <Route path="/cart" render={() => <Cart cart={cart} />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
    </Router>
  );
}

export default App;