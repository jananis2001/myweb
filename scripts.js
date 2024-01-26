document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".image-container");
    const descriptionBox = document.getElementById("description-box");

    imageContainer.addEventListener("click", function (event) {
        if (event.target.tagName === "IMG") {
            const description = event.target.getAttribute("data-description");
            descriptionBox.textContent = description;
        }
    });

    // Function to handle order button clicks
    function orderNow(dish, price) {
        alert("Your order for " + dish + " has been placed! Total amount: $" + price);
    }

    // Attach orderNow function to order buttons in the menu
    const orderButtons = document.querySelectorAll('.order-button');
    orderButtons.forEach(button => {
        button.addEventListener('click', function () {
            const dish = button.getAttribute('data-dish');
            const price = button.getAttribute('data-price');
            orderNow(dish, price);
        });
    });
});

