import React from 'react';
import '../App.css';
import './Home.css';
import { useUser } from '../UserContext';

function Home() {
  const { user, signIn, signOut } = useUser();
  console.log('User:', user);
  return (
    <div className='home-main'>
      <div className='welcome-banner'>
        {user ? (
          <h1>Hello {user.firstName}!</h1>
        ) : (
          <h1>Welcome!</h1>
        )}
        <p>What are you looking for?</p>
      </div>
      <div className='category-display'>
        <a href="/catalog" className='category'>
          <img src='/assets/category_produce.png' alt="Produce" className="category-image" />
          <p>Produce</p>
        </a>
        <a href="/catalog" className='category'>
          <img src='/assets/category_grocery.png' alt="Grocery" className="category-image" />
          <p>Grocery</p>
        </a>
        <a href="/catalog" className='category'>
          <img src='/assets/category_bakery.png' alt="Bakery" className="category-image" />
          <p>Bakery</p>
        </a>
        <a href="/catalog" className='category'>
          <img src='/assets/category_genmerch.png' alt="General Merchandise" className="category-image" />
          <p>General Merchandise</p>
        </a>
      </div>
      <div className='discount-box'>
        <p>Use DISCOUNT for 10% off your first order</p>
      </div>
    </div>
  );
}

export default Home;
