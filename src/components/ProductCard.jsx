// ProductCard
// Child of: ProductList
// Shows one product and its "Add to Cart" button.
// Props:
//   product     (object)   - { id, name, price, category, inStock }
//   isInCart    (boolean)  - true if this product is already in the cart
//   onAddToCart (function) - tells App to add this product to the cart

import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, isInCart, onAddToCart }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* Passing the whole product up lets App store it in cartItems */}
      <button
        className={styles.addButton}
        data-testid={'product-' + product.id}
        onClick={() => onAddToCart(product)}
        disabled={isInCart}
      >
        {isInCart ? 'Added ✓' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default ProductCard
