const style = document.createElement('style');
style.innerHTML = `
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }


  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: green;
    color: white;
  }
  .navbar img {
    height: 40px;
  }
  .navbar .search-box {
    flex: 1;
    margin: 0 20px;
    display: flex;
  }
  .navbar .search-box input {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: none;
  }
  .navbar .cart-btn {
    background-color: white;
    color: black;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }


.cart-dropdown {
    position: absolute;
    right: 20px;
    top: 60px;
    width: 300px;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    display: none;
    z-index: 100;
  }
  .cart-dropdown .cart-item {
    display: flex;
    color: black;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  .cart-dropdown .cart-item:last-child {
    border-bottom: none;
  }
  .cart-dropdown .cart-item button {
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
  }
  .cart-dropdown h3 {
    margin: 10px;
    text-align: center;
  }
  .cart-dropdown .empty {
    text-align: center;
    padding: 10px;
    color: gray;
  }
    
  .cart-btn {
    position: relative;
  }


  .main-content {
    padding: 20px;
  }
  .main-content h1 {
    text-align: center;
    margin-bottom: 20px;
  }


  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
  }
  .product {
    padding: 10px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  }
  .product img {
    width: 52px;
    height: 52px;
    margin-bottom: 10px;
  }
  .product p {
    margin: 5px 0;
  }
`;

export default style;