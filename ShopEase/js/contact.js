document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const message = document.getElementById("message").value.trim();

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            message === ""
        ) {
            alert("Please fill in all fields.");
            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;

        }

        alert("Thank you! Your message has been sent.");

        form.reset();

    });

});