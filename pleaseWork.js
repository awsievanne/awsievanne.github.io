const cart = [];
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.dataset.product;
            cart.push(product);
            alert(`${product} добавлен в корзину`);
        });
    });

    const checkoutButton = document.querySelector('#checkout');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.textContent = 'В данный момент заказ недоступен';
            modal.classList.add('modal');
            document.body.appendChild(modal);
            setTimeout(() => modal.remove(), 5000);
        });
    }
});
