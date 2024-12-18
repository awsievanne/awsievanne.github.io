let cart = JSON.parse(localStorage.getItem('cart')) || []; 

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });

    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartDisplay();
}

function updateCartDisplay() {
    let totalItems = cart.length;
    let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    document.getElementById('cartLink').innerText = `Корзина (${totalItems}) - ${totalPrice}₽`;

    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = ''; 

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `${item.name} - ${item.price}₽`;
        cartItemsContainer.appendChild(cartItemElement);
    });

    const totalElement = document.getElementById('totalPrice');
    totalElement.innerText = `Итого: ${totalPrice}₽`;
}

function clearCart() {
    cart = [];

    localStorage.removeItem('cart');

    updateCartDisplay();
}

window.onload = function() {

    cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartDisplay();
};
