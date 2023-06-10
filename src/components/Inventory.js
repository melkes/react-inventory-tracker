import React from "react";

function Inventory(props){
  return (
    <React.Fragment>
        <h3>{props.name} / {props.origin} / {props.roast}</h3>
      <p><em>{props.price}</em></p>
    </React.Fragment>
  );
}

export default Ticket;