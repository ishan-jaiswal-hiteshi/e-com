import style from "./styleAll.js";
import navbar from "./navbar.js";
import mainContent from "./mainContainer.js";
import endContent from "./endContainer.js";
import createProductsContainer from "./productContainer.js";
import { addToCart, toggleCart } from "./cart.js";
import products from "./productDetails.js";
// Get Root Container
const app = document.getElementById('root-container');

// Extends/Add all CSS properties
document.head.appendChild(style);

// Navbar
app.appendChild(navbar);

// Toggle cart dropdown on button click
document.querySelector('.cart-btn').addEventListener('click', toggleCart);

// Main Content
app.appendChild(mainContent);

// Products Container
const productsContainer = createProductsContainer();
mainContent.appendChild(productsContainer);

//
document.querySelector('.cart-btn').addEventListener('click',toggleCart);

// Add event listeners for "Add to Cart" buttons
document.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('add-to-cart-btn')) {
    const productId = parseInt(e.target.dataset.productId, 10);
    const product = products.find((p) => p.id === productId);
    if (product) {
      addToCart(product);
    }
  }
});

// End of Line
app.appendChild(endContent);
