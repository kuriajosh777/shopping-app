// ProductList
// Child of: App    Parent of: ProductCard
// Shows only the products that match the selected category.
// Props:
//   selectedCategory (string)   - "all" or a category name like "Fruits"
//   cartItems        (array)    - used to know which products are in the cart
//   onAddToCart      (function) - passed down to each ProductCard

import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ selectedCategory, cartItems, onAddToCart }) => {
  // filter() keeps only the products whose category matches.
  // "all" means no filtering. We do not store this in state because it can
  // always be worked out from selectedCategory.
  const visibleProducts =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === selectedCategory)

  return (
    <div>
      <h2>Available Products</h2>

      {/* Show a friendly message when nothing matches the filter */}
      {visibleProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isInCart={cartItems.some((item) => item.id === product.id)}
            onAddToCart={onAddToCart}
          />
        ))
      )}
    </div>
  )
}

export default ProductList
