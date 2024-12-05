import products from "./productDetails.js";

function createProductsContainer() {

  const productsContainer = document.createElement('div');
  productsContainer.classList.add('products');

  // Function to render products
  function renderProducts(productsList) {
    // Clear the existing product container
    productsContainer.innerHTML = '';
    
    // Generate the product list
    productsList.forEach((product) => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><text x='0' y='50' font-size='50'>${encodeURIComponent(
          product.image
        )}</text></svg>" alt="${product.name}">
        <p>${product.name}</p>
        <p>&#8377; ${product.price}</p>
        <button class="cart-btn">Buy</button>
        <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
      `;
      productsContainer.appendChild(productDiv);
    });
  }

  // Sort products by price (ascending or descending)
  function sortProducts(sortOption) {
    let sortedProducts = [...products]; 
    if (sortOption === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price); 
    } else if (sortOption === 'desc') {
      sortedProducts.sort((a, b) => b.price - a.price); 
    }
    renderProducts(sortedProducts);
  }

  //Get the sort dropdown from the navbar
  const sortSelect = document.querySelector('.sort-select');
  
  // Add an event listener to sort when the dropdown value changes
  sortSelect.addEventListener('change', (e) => {
    const sortOption = e.target.value;

    //Render sorted depending on choice
    if (sortOption === 'none') {
      renderProducts(products);
    } else {
      sortProducts(sortOption);
    }
  });

  // Initially render products without sorting
  renderProducts(products);
  return productsContainer;
}

export default createProductsContainer;
