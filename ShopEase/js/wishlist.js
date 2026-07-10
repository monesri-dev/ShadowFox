// ======================================
// ShopEase Wishlist
// ======================================

// Load wishlist when page opens
document.addEventListener("DOMContentLoaded", () => {
    renderWishlist();
});

// ======================================
// Render Wishlist
// ======================================

const renderWishlist = () => {

    const container = document.getElementById("wishlist-container");

    if (!container) return;

    // Get wishlist IDs
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Empty Wishlist
    if (wishlist.length === 0) {

        container.innerHTML = `
            <div class="empty-message">
                <h2>Your Wishlist is Empty ❤️</h2>
                <p>Add products to your wishlist.</p>
            </div>
        `;

        return;
    }

    // Find products
    const wishlistProducts = products.filter(product =>
        wishlist.includes(product.id)
    );

    // Display products
    container.innerHTML = wishlistProducts.map(product => `
    
        <div class="product-card">

            <img
                src="${product.image}"
                alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="price">
                    ₹${product.price}
                </p>

                <p class="rating">
                    ⭐ ${product.rating}
                </p>

                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})">

                    Add to Cart

                </button>

                <button
                    class="remove-btn"
                    onclick="removeFromWishlist(${product.id})">

                    Remove

                </button>

            </div>

        </div>

    `).join("");

};

// ======================================
// Remove Product
// ======================================

const removeFromWishlist = (productId) => {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist = wishlist.filter(id => id !== productId);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    updateWishlistCount();

    renderWishlist();

};