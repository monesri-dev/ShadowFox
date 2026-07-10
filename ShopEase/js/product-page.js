// ======================================
// Product Details Page
// ======================================

let quantity = 1;

document.addEventListener("DOMContentLoaded", () => {

    loadProduct();

});

function loadProduct() {

    const params = new URLSearchParams(window.location.search);

    const productId = Number(params.get("id"));

    const product = products.find(item => item.id === productId);

    if (!product) {

        document.getElementById("product-details").innerHTML =
            "<h2>Product not found.</h2>";

        return;

    }

    renderProduct(product);

    renderRelatedProducts(product);

}

function renderProduct(product) {

    document.getElementById("product-details").innerHTML = `

        <img src="${product.image}" alt="${product.name}">

        <div class="product-info-large">

            <h2>${product.name}</h2>

            <p>${product.description}</p>

            <h3>₹${product.price}</h3>

            <p>⭐ ${product.rating}</p>

            <div class="quantity">

                <button onclick="decreaseQuantity()">-</button>

                <span id="quantity">${quantity}</span>

                <button onclick="increaseQuantity()">+</button>

            </div>

            <button
                class="add-btn"
                onclick="addProductWithQuantity(${product.id})">

                Add To Cart

            </button>

        </div>

    `;

}

function renderRelatedProducts(currentProduct){

    const related = products
        .filter(item =>
            item.category === currentProduct.category &&
            item.id !== currentProduct.id)
        .slice(0,4);

    document.getElementById("related-products").innerHTML =
        related.map(createProductCard).join("");

}

function increaseQuantity(){

    quantity++;

    document.getElementById("quantity").textContent = quantity;

}

function decreaseQuantity(){

    if(quantity > 1){

        quantity--;

        document.getElementById("quantity").textContent = quantity;

    }

}

function addProductWithQuantity(productId){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.id === productId);

    if(existing){

        existing.quantity += quantity;

    }else{

        cart.push({

            id:productId,

            quantity:quantity

        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert("Product added to cart!");

}