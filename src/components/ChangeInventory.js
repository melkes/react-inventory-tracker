import { useState } from 'react';

function changeInventory() {
  const [inventory, setInventory] = useState(0);

  function handleClick() {
    setInventory(inventory + 1);
  }

  return (
    <button onClick={handleClick}>
      Inventory: {inventory}
    </button>
  );
}