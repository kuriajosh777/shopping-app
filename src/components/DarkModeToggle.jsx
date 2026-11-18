// DarkModeToggle
// Child of: App
// A button that switches between light and dark mode.
// Props:
//   darkMode (boolean)  - true when dark mode is on
//   onToggle (function) - called on click; App flips its darkMode state
// The button text always offers the OPPOSITE mode:
//   light mode now -> "Toggle Dark Mode"
//   dark mode now  -> "Toggle Light Mode"

import React from 'react'

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <button onClick={onToggle}>
      Toggle {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default DarkModeToggle
