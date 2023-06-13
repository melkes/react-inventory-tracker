import React from "react";
import Inventory from "./Inventory";
import PropTypes from "prop-types";

function InventoryList(props){
  
  return (
    <React.Fragment>
      <hr/>
    {props.inventoryList.map((inventory) => 
      <Inventory
      whenProductClicked={props.onProductSelection }
      name={inventory.name}
      origin={inventory.origin}
      roast={inventory.roast}
      price={inventory.price}
      id={inventory.id}
      key={inventory.id}/>
      )}
  </React.Fragment>
    );
  };
  
  // Add propTypes for inventoryList.
  InventoryList.propTypes = {
    inventoryList: PropTypes.array,
    onProductSelection: PropTypes.func
  };  
  export default InventoryList; 
  
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