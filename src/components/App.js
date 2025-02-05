import React, { useState } from "react";
import ShoppingList from "./ShoppingList";

import itemData from "../data/items";

function App() {
  // State to track dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode handler
  function handleDarkModeToggle() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h1>Grocery List</h1>
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
