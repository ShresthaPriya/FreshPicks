document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const searchSubmit = document.querySelector('.search-submit');
    const productSection = document.querySelector('.product');
    const footer = document.querySelector('footer');

    searchSubmit.addEventListener('click', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        let found = false;

        productCards.forEach(function (card) {
            const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();

            if (cardTitle.includes(searchTerm) && !found) {
                showProductOnly(card.parentNode.cloneNode(true));
                found = true;
            }
        });

        if (!found) {   
            productSection.innerHTML = '<p>No matching products found.</p>'; // Display message if no products match
        } else {
            hideSections();
        }
    });

    function showProductOnly(productCard) {
        productSection.innerHTML = ''; // Clear existing products
        productSection.appendChild(productCard);
    }

    function hideSections() {
        const sectionsToHide = document.querySelectorAll('.hero, .service, .offers, .top-product, .testimonials, .enquiry');
        sectionsToHide.forEach(function (section) {
            section.style.display = 'none';
        });
        footer.style.display = 'none'; // Hide the footer
    }
});
