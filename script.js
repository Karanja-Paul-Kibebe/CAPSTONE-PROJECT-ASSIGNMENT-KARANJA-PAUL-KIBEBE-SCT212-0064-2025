   const searchInput = document.getElementById("searchInput");
    const productCards = document.querySelectorAll(".product-card");

    searchInput.addEventListener("keyup", function () {
        const searchValue = searchInput.value.toLowerCase();

        productCards.forEach(card => {
            const carName = card.querySelector("h3").textContent.toLowerCase();

            if (carName.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
function acceptCookies() {
    document.getElementById('cookie-popup').style.display = 'none';
    alert('Welcome! You accepted cookies.');
}

function rejectCookies() {
    document.getElementById('cookie-popup').style.display = 'none';
    alert('Welcome! You rejected cookies.');
}