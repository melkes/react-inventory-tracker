import { useState } from 'react';

function useInventory() {
  const [inventory, setInventory] = useState(0);

  function changeInventory() {
    setInventory(inventory + 1);
  }

  return {
    inventory,
    changeInventory  
  }
}

export default useInventory;