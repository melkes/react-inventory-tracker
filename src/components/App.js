import React from "react";
import Header from "./Header";
import InventoryControl from "./InventoryControl";
import '../index.css';

function App(){
  return (
    <React.Fragment>
      <div className="container">
      <Header />
      <InventoryControl />
      </div>
    </React.Fragment>
  );
}

export default App;