import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp'; 
import SignIn from './pages/SignIn';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import Home from './pages/Home';



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
