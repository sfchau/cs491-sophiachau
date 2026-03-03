import React from "react";

const Input = ({ item, setItem, handleAdd }) => (
  <form onSubmit={handleAdd}>
    <label>
      <h3>ADD GROCERY ITEM:</h3>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
    </label>
    <button type="submit" className="plus-btn">+</button>
  </form>
);

export default Input;