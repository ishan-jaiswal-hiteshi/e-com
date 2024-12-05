let cart = [];

style.innerHTML += `
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
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  .cart-dropdown .cart-item:last-child {
    border-bottom: none;
  }
  .cart-dropdown .cart-item button {
    background-color: #f90;
    color: black;
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
`;

// Add the cart dropdown
const cartDropdown = document.createElement('div');
cartDropdown.classList.add('cart-dropdown');
app.appendChild(cartDropdown);

// Function to render the cart dropdown
function renderCart() {
  cartDropdown.innerHTML = '';
  if (cart.length === 0) {
    cartDropdown.innerHTML = '<p class="empty">Your cart is empty</p>';
  } else {
    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <span>${item.name} (${item.count})</span>
        <div>
          <button onclick="updateCart(${index}, 'add')">+</button>
          <button onclick="updateCart(${index}, 'subtract')">-</button>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      `;
      cartDropdown.appendChild(cartItem);
    });
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);
  if (cart.length > 0) {
    const totalPrice = document.createElement('h3');
    totalPrice.innerText = `Total: $${total.toFixed(2)}`;
    cartDropdown.appendChild(totalPrice);
  }
}

// Function to add to cart
function addToCart(product) {
  const existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.count++;
  } else {
    cart.push({ ...product, count: 1 });
  }
  renderCart();
}

// Function to update cart item count
function updateCart(index, action) {
  if (action === 'add') {
    cart[index].count++;
  } else if (action === 'subtract' && cart[index].count > 1) {
    cart[index].count--;
  }
  renderCart();
}

// Function to remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

// Toggle cart dropdown
document.querySelector('.cart-btn').addEventListener('click', () => {
  const isVisible = cartDropdown.style.display === 'block';
  cartDropdown.style.display = isVisible ? 'none' : 'block';
});

// Add "Add to Cart" buttons to products
products.forEach((product) => {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');
  productDiv.innerHTML = `
    <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><text x='0' y='50' font-size='50'>${encodeURIComponent(
      product.image
    )}</text></svg>" alt="${product.name}">
    <p>${product.name}</p>
    <p>$${product.price}</p>
    <button onclick="handleAddToCart(${product.id})" id="btn-${product.id}">Add to Cart</button>
  `;
  productsContainer.appendChild(productDiv);
});

// Handle "Add to Cart" button click
function handleAddToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const btn = document.getElementById(`btn-${product.id}`);
  if (btn.innerText === 'Add to Cart') {
    addToCart(product);
    btn.innerText = 'View Cart';
  } else {
    cartDropdown.style.display = 'block';
  }
}