
// ======================================
// ShopEase - Main JavaScript
// ======================================

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    renderFeaturedProducts();
    renderBestSellers();

    updateCartCount();
    updateWishlistCount();

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

            <div class="product-image">

                <button
                    class="wishlist-btn"
                    onclick="toggleWishlist(${product.id})">

                    <i class="fa-regular fa-heart"></i>

                </button>

                <img
                    src="${product.image}"
                    alt="${product.name}">

            </div>

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
// Wishlist Functions
// ======================================

// Add or Remove Product from Wishlist
const toggleWishlist = (productId) => {

    // Get wishlist from Local Storage
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Check if product already exists
    const index = wishlist.indexOf(productId);

    if (index === -1) {

        // Add product
        wishlist.push(productId);

        alert("Added to Wishlist ❤️");

    } else {

        // Remove product
        wishlist.splice(index, 1);

        alert("Removed from Wishlist");

    }

    // Save updated wishlist
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    // Update icon count
    updateWishlistCount();

};


// Update Wishlist Count in Navbar
const updateWishlistCount = () => {

    const wishlistCount = document.getElementById("wishlist-count");

    if (!wishlistCount) return;

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlistCount.textContent = wishlist.length;

};