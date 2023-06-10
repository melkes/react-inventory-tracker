import React from "react";
import Inventory from "./Inventory";

function InventoryList(){
  return (
    <Inventory 
     name="Kona"
     origin="Hawaii"
     price="$15"
     roast="Light" />
  );
}

export default InventoryList;