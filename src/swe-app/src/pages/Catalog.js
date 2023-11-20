import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './Catalog.css';
import { useUser } from '../UserContext';

const Notification = ({ message }) => {
  return (
    <div className="notification">
      {message}
    </div>
  );
};

const Catalog = ({ addToCart }) => {
  const { user, signIn, signOut } = useUser();
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('price-asc');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [notification, setNotification] = useState({ show: false, message: '' });

  console.log('User:', user);

  useEffect(() => {
    const apiUrl = 'http://ec2-3-16-1-211.us-east-2.compute.amazonaws.com/api/items';
    axios.get(apiUrl)
      .then((response) => {
        setItems(response.data);
        setFilteredItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const sortItems = useCallback((order) => {
    let sortedItems = [];
    if (order.includes('price')) {
      sortedItems = [...filteredItems].sort((a, b) => {
        return order === 'price-asc' ? a.price - b.price : b.price - a.price;
      });
    } else if (order.includes('name')) {
      sortedItems = [...filteredItems].sort((a, b) => {
        return order === 'name-asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      });
    }
    setFilteredItems(sortedItems);
  }, [filteredItems]);


  // changing the useEffect below since it is probably causing the infinite loop
  // the dependency array used to hold [sortOrder, sortItems] but sortItems is a function
  useEffect(() => {
    sortItems(sortOrder);
  }, [sortOrder]);

  const filterItemsByCategory = useCallback((category) => {
    if (category === 'All') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(item => item.category === category);
      setFilteredItems(filtered);
    }
  }, [items]);

  useEffect(() => {
    filterItemsByCategory(selectedCategory);
  }, [selectedCategory, filterItemsByCategory]);

  const handleAddToCart = (item) => {
    axios.post('/api/shoppingCarts', {
      customerId: user.custId, // Replace with actual customer ID
      itemId: item.id
    }).then(response => {
      console.log('Item added to cart:', response.data);
      setNotification({ show: true, message: `${item.name} added to cart!` });
      setTimeout(() => setNotification({ show: false, message: '' }), 3000);
    }).catch(error => {
      console.error('Error adding item to cart:', error);
    });

    addToCart(item);
  };


  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: Could not load items. Please try again later.</div>;

  return (
    <div className="catalog">
      {notification.show && <Notification message={notification.message} />}
      <div className="sort-filter-section">
        <div className="search-bar">
          <input type="text" placeholder="Search..." name="search"></input>
        </div>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Produce">Produce</option>
          <option value="Grocery">Grocery</option>
          <option value="Bakery">Bakery</option>
          <option value="General Merchandise">General Merchandise</option>
        </select>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="price-asc">Price Ascending</option>
          <option value="price-desc">Price Descending</option>
          <option value="name-asc">Name Ascending</option>
          <option value="name-desc">Name Descending</option>
        </select>
      </div>
      <div className="product-list">
        {filteredItems.map(item => (
          <div key={item.id} className="product">
            <img src={item.imgURL} alt={item.name} className="catalog-item-image" />
            <h3 className="catalog-item-name">{item.name}</h3>
            <p className="catalog-item-description">{item.description}</p>
            <p className="catalog-item-price">${item.price}</p>
            <button onClick={() => handleAddToCart(item)} className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
