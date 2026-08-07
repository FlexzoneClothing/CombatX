// ==========================================
// COMBATX SMOOTH REVEAL ANIMATION
// ==========================================

const sections = document.querySelectorAll("section");

const reveal = () => {

    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

};


sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

});


window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// ==========================================
// COMBATX PRODUCT SEARCH
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("productSearch");

    const productCards = document.querySelectorAll(".product-card");

    if (!searchInput) {
        return;
    }

    searchInput.addEventListener("input", function () {

        const searchText =
            searchInput.value.toLowerCase().trim();

        productCards.forEach(function (card) {

            const productName =
                card.querySelector("h3")?.textContent.toLowerCase() || "";

            const productDescription =
                card.querySelector("p")?.textContent.toLowerCase() || "";

            const productImage =
                card.querySelector("img")?.alt.toLowerCase() || "";

            const productContent =
                productName + " " +
                productDescription + " " +
                productImage;


            if (productContent.includes(searchText)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});
