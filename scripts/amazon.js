const products = [{
    id: 'product1',
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090
  }, {
    id: 'product2',
    image: 'images/products/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    rating: {
      stars: 4.0,
      count: 127
    },
    priceCents: 2095
  }, {
    id: 'product3',
    image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799
  }];
  
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
            src="images/ratings/rating-${Math.round(product.rating.stars * 10)}.png" 
            alt="${product.rating.stars} stars">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>
  
        <div class="product-price">
          $${(product.priceCents / 100).toFixed(2)}
        </div>
  
        <div class="product-quantity-container">
          <select aria-label="Select quantity">
            ${[...Array(10)].map((_, i) =>
              `<option value="${i + 1}" ${i === 0 ? 'selected' : ''}>${i + 1}</option>`).join('')}
          </select>
        </div>
  
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
    `;
  });

  console.log(productsHTML);
  
  document.querySelector('.js-products-grid').innerHTML = productsHTML;
  