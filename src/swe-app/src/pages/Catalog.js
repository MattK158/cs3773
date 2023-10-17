import React, { useEffect, useState } from 'react';
import './Catalog.css';
import axios from 'axios';

function Catalog() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';

    axios.get(apiUrl)
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  const handleAddToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    addToCart(product);
    alert(`Product ${productId} added to cart.`);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`Product ${product.id} added to cart.`);
  };

  const sortProducts = (productsList) => {
    let sortedProducts = [...productsList];

    switch (sortOption) {
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return sortedProducts;
  };

  return (
    <div className="catalog">
      <h1>Product Catalog</h1>
      <button onClick={() => window.location.href = "/cart"}>Go to Cart</button>
      <div className="sort-filter-section">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="default">Sort by</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
        </select>
      </div>
      <div className="product-list">
        {sortProducts(filteredProducts).map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Catalog;