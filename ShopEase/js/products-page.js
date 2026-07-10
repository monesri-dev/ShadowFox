// ---------------------------
// Render Products
// ---------------------------

function renderProducts(productList) {

    const container = document.getElementById("products-container");

    if (!container) return;

    if (productList.length === 0) {
        container.innerHTML = `
            <div class="no-products">
                <h2>No products found</h2>
                <p>Try changing your search or filter.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = productList.map(product => `

        <div class="product-card">

            <div class="product-image">

                <span class="badge">
                    ${product.badge}
                </span>

                <button class="wishlist-btn" title="Add to Wishlist">
                    ❤️
                </button>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="rating">
                    ⭐ ${product.rating}
                </p>

                <p class="price">
                    ₹${product.price}
                    <span class="old-price">
                        ₹${product.oldPrice}
                    </span>
                </p>

                <p class="discount">
                    ${product.discount}
                </p>

                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})">

                    Add To Cart

                </button>

                <button
                    class="outline-card-btn"
                    onclick="viewProduct(${product.id})">

                    View Details

                </button>

            </div>

        </div>

    `).join("");

}