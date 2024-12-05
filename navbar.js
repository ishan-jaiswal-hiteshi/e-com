const navbar = document.createElement('div');
navbar.classList.add('navbar');
navbar.innerHTML = `
  <img src="https://repository-images.githubusercontent.com/389729275/371ba38b-8a03-4bff-916c-c3fa5396ceda" alt="Logo">
  <div class="search-box">
    <input type="text" placeholder="Search for products...">
  </div>
  <button class="cart-btn">Cart</button>
  <div class="cart-dropdown" style="display: none;"></div>
`;

export default navbar;