# Shopping App

A small grocery shopping app built with **React** and the **`useState`** hook. Users can switch between light and dark mode, filter products by category, and add items to a cart.

## Screenshot

![Shopping App screenshot](screenshot.png)

## Features

- **Dark mode toggle:** the button switches the whole app between light and dark, and its text changes between "Toggle Dark Mode" and "Toggle Light Mode"
- **Add to cart:** each product has an "Add to Cart" button; the cart shows messages like "Milk is in your cart."
- **Category filter:** a dropdown shows only the products in the chosen category, or a "No products available." message when none match
- **Bonus: cart total** that updates as items are added

## State and components

`App` owns all the state and passes it down as props. Children send changes back up with callback functions.

| State (in `App`)   | Used by                                   | Changed by                  |
| ------------------ | ----------------------------------------- | --------------------------- |
| `darkMode`         | `App` theme class, `DarkModeToggle` text  | `DarkModeToggle` click      |
| `cartItems`        | `ProductList` / `ProductCard`, `Cart`     | `ProductCard` button click  |
| `selectedCategory` | `ProductList`                             | the category dropdown       |

```
App
├── DarkModeToggle
├── (category dropdown)
├── ProductList
│   └── ProductCard
└── Cart
```

## Getting started

You need [Node.js](https://nodejs.org/) (v18 or newer) and npm.

```bash
# 1. Clone your fork
git clone <your-repo-url>
cd <your-repo-folder>

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Run the tests

```bash
npm test
```

## Project structure

```
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── Cart.jsx
│   ├── DarkModeToggle.jsx
│   ├── ProductCard.jsx
│   └── ProductList.jsx
├── styles/
│   ├── DarkMode.module.css
│   └── ProductCard.module.css
└── __tests__/indexTest.js
```
