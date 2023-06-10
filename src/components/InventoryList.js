import React from "react";
import Inventory from "./Inventory";
import PropTypes from "prop-types";

// Dummy inventory data
// const mainInventoryList = [
//   {
//     name: 'Kona',
//     origin: 'Hawaii',
//     roast: 'Light',
//     price: '$15'
//   },
//   {
//     name: 'French Roast',
//     origin: 'Blend',
//     roast: 'Dark',
//     price: '$13'
//   },
//   {
//     name: 'Antigua',
//     origin: 'Guatemala',
//     roast: 'Medium',
//     price: '$17'
//   }
// ];

function InventoryList(props){
  return (
    <React.Fragment>
      <hr/>
    {props.inventoryList.map((inventory, index) => 
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
  // Add propTypes for inventoryList.
  InventoryList.propTypes = {
    inventoryList: PropTypes.array
  };  
  export default InventoryList; 