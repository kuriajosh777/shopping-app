// App
// Root component. It OWNS all three pieces of state because more than one
// child needs them:
//   darkMode         -> DarkModeToggle changes it, App uses it for the theme
//   cartItems        -> ProductCard adds to it, Cart displays it
//   selectedCategory -> the dropdown changes it, ProductList reads it
//
// Data flow:  App (state) --props--> children --callbacks--> App (setState)

import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from './styles/DarkMode.module.css'

const App = () => {
  // true = dark theme, false = light theme
  const [darkMode, setDarkMode] = useState(false)

  // Array of product objects the user has added to the cart
  const [cartItems, setCartItems] = useState([])

  // Currently selected category in the dropdown ("all" shows everything)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Flip darkMode between true and false.
  // The function form (prev => !prev) always uses the latest value.
  function handleToggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode)
  }

  // Add a product to the cart, but only if it is not already in there.
  // [...cartItems, product] builds a NEW array (never change state directly).
  function handleAddToCart(product) {
    const alreadyInCart = cartItems.some((item) => item.id === product.id)
    if (!alreadyInCart) {
      setCartItems([...cartItems, product])
    }
  }

  // Runs when the dropdown changes; event.target.value is the chosen option
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
  }

  return (
    // The theme class on this wrapper changes colors for the whole app
    <div className={`${styles.app} ${darkMode ? styles.dark : styles.light}`}>
      <h1>🛒 Shopping App</h1>
      <p>Browse the groceries, filter by category, and fill up your cart.</p>

      <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />

      <div className={styles.filter}>
        <label htmlFor="category-filter">Filter by Category: </label>
        {/* Controlled select: its value always comes from state */}
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList
        selectedCategory={selectedCategory}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
      />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
