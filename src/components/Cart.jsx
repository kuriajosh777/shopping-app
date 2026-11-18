// Cart
// Child of: App
// Lists every item the user added, plus a total (bonus challenge).
// Props:
//   cartItems (array) - product objects currently in the cart

import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {/* One <li> per item; key must be unique, so we use the id */}
          {cartItems.map((item) => (
            <li key={item.id}>{item.name} is in your cart.</li>
          ))}
        </ul>
      )}

      {/* Bonus: total number of items, updates whenever cartItems changes */}
      <p>
        <strong>Cart total: {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</strong>
      </p>
    </div>
  )
}

export default Cart
