let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to save cart to local storage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to render the cart dropdown
function renderCart() {
  const cartDropdown = document.querySelector('.cart-dropdown');
  cartDropdown.innerHTML = '';

  if (cart.length === 0) {
    cartDropdown.innerHTML = '<p class="empty">Cart is empty</p>';
  } else {
    //console.log(cart);
    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <span>${item.image} &nbsp ${item.name} (${item.count})</span>
        <div>
          <button onclick="updateCart(${index}, 'add')">+</button>
          <button onclick="updateCart(${index}, 'subtract')">-</button>&nbsp
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      `;
      cartDropdown.appendChild(cartItem);
    });
    const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);
    const totalPrice = document.createElement('h3');
    totalPrice.innerText = `Total: ₹${total.toFixed(2)}`;
    cartDropdown.appendChild(totalPrice);
  }
}

// Function to add to cart
export function addToCart(product) {
  const existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.count++;
  } else {
    cart.push({ ...product, count: 1 });
    //console.log(cart);
  }
  saveCart();
  renderCart();
}

// Function to update cart item count
export function updateCart(index, action) {
  if (action === 'add') {
    cart[index].count++;
  } else if (action === 'subtract' && cart[index].count > 1) {
    cart[index].count--;
  } else if (action === 'subtract') {
    cart.splice(index, 1);
  }
  saveCart();
  renderCart();
}
// Function to remove item from cart
export function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

// Toggle cart dropdown visibility
export function toggleCart() {
  const cartDropdown = document.querySelector('.cart-dropdown');
  if (cartDropdown) {
    const isVisible = cartDropdown.style.display === 'block';
    cartDropdown.style.display = isVisible ? 'none' : 'block';
    if (!isVisible) renderCart(); // Render the cart whenever it's shown
  }
}
window.updateCart = updateCart;
window.removeFromCart = removeFromCart;
