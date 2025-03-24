document.addEventListener("DOMContentLoaded", () => {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            new Notification("Welcome to My E-Commerce PWA!");
        }
    });
});

function addToCart(product) {
    alert(`${product} added to cart!`);
}
