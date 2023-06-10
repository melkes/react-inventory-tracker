import React from "react";
import PropTypes from "prop-types";

function Inventory(props){
  return (
    <React.Fragment>
        <h3>{props.name} / {props.origin} / {props.roast}</h3>
      <p><em>{props.price}</em></p>
    </React.Fragment>
  );
}

Inventory.propTypes = {
    name: PropTypes.string,
    origin: PropTypes.string,
    roast: PropTypes.string,
    price: PropTypes.string
    };

export default Ticket;