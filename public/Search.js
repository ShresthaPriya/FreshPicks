document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const productSection = document.querySelector('.product');
    const sectionsToHide = document.querySelectorAll('.hero, .service, .offers, .top-product, .testimonials, .enquiry');
    const footer = document.querySelector('footer');
    let noMatchMessage = document.createElement('div');
    noMatchMessage.classList.add('no-match-message');
    noMatchMessage.innerText = 'No matching products found.';

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm === '') {
            clearProducts();
            removeNoMatchMessage();
            showSections();
        } else {
            fetchAndFilterProducts(searchTerm);
        }
    });

    function fetchAndFilterProducts(searchTerm) {
        fetch('/api/getproducts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const filteredProducts = data.filter(product => product.productName.toLowerCase().includes(searchTerm));

                if (filteredProducts.length > 0) {
                    showProducts(filteredProducts);
                    hideSections();
                    removeNoMatchMessage();
                } else {
                    clearProducts();
                    showNoMatchMessage();
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function showProducts(products) {
        productSection.innerHTML = '';
        products.forEach(product => {
            const productCard = createProductCard(product);
            productSection.appendChild(productCard);
        });
        addWishlistAndCartFunctionality();
    }

    function clearProducts() {
        productSection.innerHTML = '';
    }

    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.classList.add('searched-product');

        card.innerHTML = `
            <div class="product-details">
                <div class="rating-wrapper">
                    ${getStarIcons()}
                </div>
                <h3 class="h4 card-title">${product.productName}</h3>
                <div class="price-wrapper">
                    <data class="price" value="${product.price}">Rs ${product.price}</data>
                    <div class="btn-wrapper">
                        <button class="product-btn add-to-wishlist" aria-label="Add to Wishlist" data-id="${product._id}" data-name="${product.productName}" data-price="${product.price}">
                            <ion-icon name="heart-outline"></ion-icon>
                            <div class="tooltip">Add to Wishlist</div>
                        </button>
                        <button class="product-btn add-to-cart" aria-label="Add to Cart" data-id="${product._id}" data-name="${product.productName}" data-price="${product.price}">
                            <ion-icon name="basket-outline"></ion-icon>
                            <div class="tooltip">Add to Cart</div>
                        </button>
                    </div>
                </div>
            </div>
        `;

        return card;
    }

    function getStarIcons() {
        return `
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
        `;
    }

    function hideSections() {
        sectionsToHide.forEach(function (section) {
            section.style.display = 'none';
        });
        footer.style.display = 'none';
    }

    function showSections() {
        sectionsToHide.forEach(function (section) {
            section.style.display = '';
        });
        footer.style.display = '';
    }

    function showNoMatchMessage() {
        removeNoMatchMessage();
        searchInput.parentNode.insertBefore(noMatchMessage, searchInput.nextSibling);
    }

    function removeNoMatchMessage() {
        if (noMatchMessage.parentNode) {
            noMatchMessage.parentNode.removeChild(noMatchMessage);
        }
    }

    function addWishlistAndCartFunctionality() {
        const addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');
        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        addToWishlistButtons.forEach(button => {
            button.addEventListener('click', function () {
                const productId = button.getAttribute('data-id');
                const productName = button.getAttribute('data-name');
                const productPrice = button.getAttribute('data-price');
                addToWishlist(productId, productName, productPrice);
            });
        });

        addToCartButtons.forEach(button => {
            button.addEventListener('click', function () {
                const productId = button.getAttribute('data-id');
                const productName = button.getAttribute('data-name');
                const productPrice = button.getAttribute('data-price');
                addToCart(productId, productName, productPrice);
            });
        });
    }

    function addToWishlist(productId, productName, productPrice) {
        let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlistItems.push({ id: productId, name: productName, price: productPrice });
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
        console.log('Added to wishlist:', { id: productId, name: productName, price: productPrice });
        renderWishlist();
        updateBadgeCount('wishlist');
    }
    
    function addToCart(productId, productName, productPrice) {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push({ id: productId, name: productName, price: productPrice });
        localStorage.setItem('cart', JSON.stringify(cartItems));
        console.log('Added to cart:', { id: productId, name: productName, price: productPrice });
    
        // Remove from wishlist if already there
        let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlistItems = wishlistItems.filter(item => item.id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    
        renderWishlist(); // Update wishlist display
        renderCart(); // Update cart display
        updateBadgeCount('cart');
    }    

    function renderWishlist() {
        const wishlistPanel = document.querySelector('.wishlist-panel'); // Assuming you have a wishlist panel in your HTML
        if (!wishlistPanel) {
            console.error('Wishlist panel not found');
            return;
        }
        const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];

        wishlistPanel.innerHTML = ''; // Clear existing content

        wishlistItems.forEach(item => {
            const wishlistItem = document.createElement('div');
            wishlistItem.classList.add('wishlist-item');
            wishlistItem.innerHTML = `
                <div class="wishlist-item-name">${item.name}</div>
                <div class="wishlist-item-price">Rs ${item.price}</div>
            `;
            wishlistPanel.appendChild(wishlistItem);
        });
    }

    function renderCart() {
        const cartPanel = document.querySelector('.cart-panel'); // Assuming you have a cart panel in your HTML
        if (!cartPanel) {
            console.error('Cart panel not found');
            return;
        }
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        cartPanel.innerHTML = ''; // Clear existing content

        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">Rs ${item.price}</div>
            `;
            cartPanel.appendChild(cartItem);
        });
    }

    function updateBadgeCount(type) {
        const items = JSON.parse(localStorage.getItem(type)) || [];
        const badge = document.querySelector(`.header-action-btn[data-panel-btn="${type}"] .btn-badge`);
        badge.innerText = items.length.toString().padStart(2, '0');
    }
});
