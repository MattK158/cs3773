import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SignUp from './components/SignUp'; 
import SignIn from './components/SignIn';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import Home from './components/Home';



function App() {
  return (
    <Router>
      <Navbar />
      <Home />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </Router>
  );
}

export default App;
