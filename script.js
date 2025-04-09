// Store cart items in localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update the cart count in the navigation bar
function updateCartCount() {
    const cartCount = document.getElementById('cart');
    cartCount.textContent = `Cart (${cart.length})`;
}

// Add product to cart
function addToCart(productId, productName, productPrice) {
    const product = { id: productId, name: productName, price: productPrice };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Add event listeners to product buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('$', ''));

        addToCart(productId, productName, productPrice);
    });
});

// Initialize the cart count on page load
updateCartCount();
