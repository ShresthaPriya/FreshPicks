document.addEventListener('DOMContentLoaded', function() {
    const addToWishlistButtons = document.querySelectorAll('.panel-card .item-close-btn');
    const wishlistItems = document.querySelectorAll('.panel-card');
  
    addToWishlistButtons.forEach(function(button, index) {
      button.addEventListener('click', function() {
        // Remove the item from the wishlist
        wishlistItems[index].remove();
        // Update the subtotal
        updateSubtotal();
      });
    });
  
    function updateSubtotal() {
      let subtotalValue = 0;
      wishlistItems.forEach(function(item) {
        const itemPrice = parseFloat(item.querySelector('.item-value').innerText.replace('Rs ', ''));
        subtotalValue += itemPrice;
      });
  
      document.querySelector('.subtotal-value').innerText = 'Rs ' + subtotalValue.toFixed(2);
      document.querySelector('.subtotal-value').setAttribute('value', subtotalValue.toFixed(2));
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const addToWishlistButtons = document.querySelectorAll('.product-btn');
    const wishlistPanel = document.querySelector('[data-side-panel="whishlist"] .panel-list');
    const wishlistSubtotal = document.querySelector('[data-side-panel="whishlist"] .subtotal-value');
  
    addToWishlistButtons.forEach(function(button, index) {
      button.addEventListener('click', function() {
        const productCard = button.closest('.product-card');
        const productTitle = productCard.querySelector('.card-title a').innerText;
        const productPrice = productCard.querySelector('.price').getAttribute('value');
  
        const newItem = document.createElement('li');
        newItem.classList.add('panel-item');
        newItem.innerHTML = `
          <a href="./product-details.html" class="panel-card">
            <figure class="item-banner">
              ${productCard.querySelector('.card-banner img').outerHTML}
            </figure>
            <div>
              <p class="item-title">${productTitle}</p>
              <span class="item-value">Rs ${productPrice}</span>
            </div>
            <button class="item-close-btn" aria-label="Remove item">
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </a>
        `;
  
        // Add the new item to the wishlist
        wishlistPanel.appendChild(newItem);
  
        // Update the subtotal
        updateSubtotal();
      });
    });
  
    // Event listener for removing items from the wishlist
    wishlistPanel.addEventListener('click', function(event) {
      if (event.target.closest('.item-close-btn')) {
        event.preventDefault();
        const itemToRemove = event.target.closest('.panel-item');
        itemToRemove.remove();
        updateSubtotal();
      }
    });
  
    function updateSubtotal() {
      let subtotalValue = 0;
      wishlistPanel.querySelectorAll('.item-value').forEach(function(itemValue) {
        subtotalValue += parseFloat(itemValue.innerText.replace('Rs ', ''));
      });
  
      wishlistSubtotal.innerText = 'Rs ' + subtotalValue.toFixed(2);
      wishlistSubtotal.setAttribute('value', subtotalValue.toFixed(2));
    }
  });
  