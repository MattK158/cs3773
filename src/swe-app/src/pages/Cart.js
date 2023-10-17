function Cart({ cart }) {
    // Check if the cart is empty
    if (!cart || cart.length === 0) {
      return <div>Your cart is empty.</div>;
    }
  
    return (
      <div className="catalog">
        <h1>Your Cart</h1>
        <button onClick={() => window.location.href = "/catalog"}>Go to Catalog</button>
        <div className="product-list">
          {cart.map((product, index) => (
            <div className="product" key={index}>
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>Price: ${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <p>Total: ${cart.reduce((acc, product) => acc + product.price, 0).toFixed(2)}</p>
      </div>
    );
  }
  
  export default Cart;
  