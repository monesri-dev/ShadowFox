
// ======================================
// ShopEase - Main JavaScript
// ======================================

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    renderFeaturedProducts();
    renderBestSellers();
    updateCartCount();
    initializeMobileMenu();
    initializeBackToTop();

});

// ======================================
// Render Featured Products
// ======================================

const renderFeaturedProducts = () => {

    const container = document.getElementById("featured-products");

    if (!container) return;

    const featuredProducts = products.slice(0, 4);

    container.innerHTML = featuredProducts.map(createProductCard).join("");

};

// ======================================
// Render Best Sellers
// ======================================

const renderBestSellers = () => {

    const container = document.getElementById("best-products");

    if (!container) return;

    const bestSellers = products.slice(4, 8);

    container.innerHTML = bestSellers.map(createProductCard).join("");

};

// ======================================
// Product Card Template
// ======================================

const createProductCard = (product) => {

    return `
        <div class="product-card">

            <img src="${product.image}"
                 alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="price">₹${product.price}</p>

                <p class="rating">
                    ⭐ ${product.rating}
                </p>

                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})">

                    Add to Cart

                </button>

            </div>

        </div>
    `;

};

// ======================================
// Add to Cart
// ======================================

const addToCart = (productId) => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            id: productId,
            quantity: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert("Product added to cart!");

};

// ======================================
// Update Cart Count
// ======================================

const updateCartCount = () => {

    const cartCount = document.getElementById("cart-count");

    if (!cartCount) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const totalItems = cart.reduce((sum, item) => {

        return sum + item.quantity;

    }, 0);

    cartCount.textContent = totalItems;

};

// ======================================
// Mobile Menu
// ======================================

const initializeMobileMenu = () => {

    const menuToggle = document.querySelector(".menu-toggle");

    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

};

// ======================================
// Back To Top Button
// ======================================

const initializeBackToTop = () => {

    const topBtn = document.getElementById("topBtn");

    if (!topBtn) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

};