document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productDescription = document.getElementById('product-description').value;
    const product = {
        name: productName,
        price: productPrice,
        description: productDescription
    };
    addProductToList(product);
    clearForm();
});
function addProductToList(product) {
    const productList = document.getElementById('products-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>${product.description}</p>
    `;
    productList.appendChild(listItem);
}
function clearForm() {
    document.getElementById('product-form').reset();
}