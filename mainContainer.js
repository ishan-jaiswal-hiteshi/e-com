const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
mainContent.innerHTML = `<h1>All Products</h1> 
<select class="sort-select">
    <option value="none">Select Sort by</option>
    <option value="asc">Sort by Price: Low to High</option>
    <option value="desc">Sort by Price: High to Low</option>
</select>
`;

export default mainContent;