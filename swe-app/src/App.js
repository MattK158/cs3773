import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SignUp from './SignUp'; 
import SignIn from './SignIn';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">
          <Link to="/signup">
            <button>Go to SignUp</button>
          </Link>
          <Link to="/signin">
            <button>Go to SignIn</button>
          </Link>
          <Link to="/checkout">
            <button>Go to Checkout</button>
          </Link>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
