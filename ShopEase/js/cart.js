// ===================================
// Cart Page
// ===================================

document.addEventListener("DOMContentLoaded", () => {

    renderCart();

});

function renderCart(){

    const container =
        document.getElementById("cart-container");

    const totalContainer =
        document.getElementById("cart-total");

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length===0){

        container.innerHTML=`

            <h2>Your cart is empty.</h2>

        `;

        totalContainer.innerHTML="";

        return;

    }

    let total=0;

    container.innerHTML=cart.map(item=>{

        const product=
        products.find(p=>p.id===item.id);

        total += product.price * item.quantity;

        return`

        <div class="cart-item">

            <img
            src="${product.image}"
            alt="${product.name}">

            <div class="cart-info">

                <h3>${product.name}</h3>

                <p>₹${product.price}</p>

            </div>

            <div class="cart-actions">

                <button
                onclick="decrease(${item.id})">

                -

                </button>

                <span>

                ${item.quantity}

                </span>

                <button
                onclick="increase(${item.id})">

                +

                </button>

                <button
                class="remove-btn"
                onclick="removeItem(${item.id})">

                Remove

                </button>

            </div>

        </div>

        `;

    }).join("");

    totalContainer.innerHTML=`

        Total : ₹${total}

    `;

}

function increase(id){

    let cart=
    JSON.parse(localStorage.getItem("cart")) || [];

    const item=
    cart.find(i=>i.id===id);

    item.quantity++;

    localStorage.setItem("cart",
    JSON.stringify(cart));

    updateCartCount();

    renderCart();

}

function decrease(id){

    let cart=
    JSON.parse(localStorage.getItem("cart")) || [];

    const item=
    cart.find(i=>i.id===id);

    if(item.quantity>1){

        item.quantity--;

    }

    localStorage.setItem("cart",
    JSON.stringify(cart));

    updateCartCount();

    renderCart();

}

function removeItem(id){

    let cart=
    JSON.parse(localStorage.getItem("cart")) || [];

    cart=
    cart.filter(item=>item.id!==id);

    localStorage.setItem("cart",
    JSON.stringify(cart));

    updateCartCount();

    renderCart();

}
