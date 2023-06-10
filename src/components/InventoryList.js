import React from "react";
import Inventory from "./Inventory";

const mainInventoryList = [
  {
    name: 'Kona',
    origin: 'Hawaii',
    roast: 'Light',
    price: '$15'
  },
  {
    name: 'French Roast',
    origin: 'Blend',
    roast: 'Dark',
    price: '$13'
  },
  {
    name: 'Antigua',
    origin: 'Guatemala',
    roast: 'Medium',
    price: '$17'
  }
];

function InventoryList(){
  return (
    <React.Fragment>
    {mainInventoryList.map((inventory, index) => 
      <Inventory
      name={inventory.name}
      origin={inventory.origin}
      roast={inventory.roast}
      price={inventory.price}
      key={index}/>
  )}
  </React.Fragment>
    );
  };
    export default InventoryList; 