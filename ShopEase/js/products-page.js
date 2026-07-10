// ======================================
// Products Page JavaScript
// ======================================

let filteredProducts = [...products];

// ---------------------------
// Initialize
// ---------------------------

document.addEventListener("DOMContentLoaded", () => {

    renderProducts(filteredProducts);

    setupSearch();

    setupCategoryFilter();

    setupSorting();

});

// ---------------------------
// Render Products
// ---------------------------

function renderProducts(productList) {

    const container = document.getElementById("products-container");

    if (!container) return;

    if (productList.length === 0) {

        container.innerHTML = `
            <h3>No products found.</h3>
        `;

        return;
    }

    container.innerHTML = productList.map(product => `
        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="price">₹${product.price}</p>

                <p class="rating">⭐ ${product.rating}</p>

                <button
                    class="add-btn"
                    onclick="viewProduct(${product.id})">

                    View Details

                </button>

                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})"
                    style="margin-top:10px;">

                    Add To Cart

                </button>

            </div>

        </div>

    `).join("");

}

// ---------------------------
// Search
// ---------------------------

function setupSearch() {

    const search = document.getElementById("searchInput");

    search.addEventListener("input", () => {

        applyFilters();

    });

}

// ---------------------------
// Category Filter
// ---------------------------

function setupCategoryFilter() {

    const category = document.getElementById("categoryFilter");

    category.addEventListener("change", () => {

        applyFilters();

    });

}

// ---------------------------
// Sorting
// ---------------------------

function setupSorting() {

    const sort = document.getElementById("sortOption");

    sort.addEventListener("change", () => {

        applyFilters();

    });

}

// ---------------------------
// Apply Search + Filter + Sort
// ---------------------------

function applyFilters() {

    const searchValue =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const category =
        document
        .getElementById("categoryFilter")
        .value;

    const sort =
        document
        .getElementById("sortOption")
        .value;

    filteredProducts = products.filter(product => {

        const matchesSearch =
            product.name
            .toLowerCase()
            .includes(searchValue);

        const matchesCategory =
            category === "All" ||
            product.category === category;

        return matchesSearch && matchesCategory;

    });

    switch (sort) {

        case "low-high":

            filteredProducts.sort((a, b) => a.price - b.price);

            break;

        case "high-low":

            filteredProducts.sort((a, b) => b.price - a.price);

            break;

        case "a-z":

            filteredProducts.sort((a, b) =>
                a.name.localeCompare(b.name));

            break;

    }

    renderProducts(filteredProducts);

}

// ---------------------------
// View Product
// ---------------------------

function viewProduct(id) {

    window.location.href =
        `product.html?id=${id}`;

}