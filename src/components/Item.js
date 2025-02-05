import React, { useState } from "react";

function Item({ name, category }) {
  // State to track if the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Toggle cart handler
  function handleCartToggle() {
    setIsInCart((prevState) => !prevState);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartToggle} className="add">
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
