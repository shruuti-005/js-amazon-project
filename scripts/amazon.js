// To prevent naming conflict
import {cart, addToCart, calculateCartQuantity} from '../data/cart.js';
import {products, loadProducts} from '../data/products.js';
import { formatCurrency } from './utils/money.js';

loadProducts(renderProductsGrid); // passing function as a value
// waiting for an http request to finish first then we run the code  
// Calling back in future inside (product.js file)
function renderProductsGrid() {

  let productsHTML = '';
    
    products.forEach((product) => {
      productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${product.image}" alt="${product.name}">
          </div>
    
          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>
    
          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${product.getStarsUrl()}" >
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>
    
          <div class="product-price">
            ${product.getPrice()}
          </div>
    
          <div class="product-quantity-container">
            <select aria-label="Select quantity">
              ${[...Array(10)].map((_, i) =>
                `<option value="${i + 1}" ${i === 0 ? 'selected' : ''}>${i + 1}</option>`).join('')}
            </select>
          </div>

          ${product.extraInfoHTML()} 
                
          <div class="product-spacer"></div>
    
          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" alt="Checkmark">
            Added
          </div>
    
          <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
      `; // Polymorphism : product.extraInfoHTML- means use a method without knowing the class
    });

    
    document.querySelector('.js-products-grid').innerHTML = productsHTML;

    function updateCartQuantity() {
        const cartQuantity = calculateCartQuantity();
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
        
    }

    updateCartQuantity();

    document.querySelectorAll('.js-add-to-cart').forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        addToCart(productId);
        updateCartQuantity();
      });
    });
}
