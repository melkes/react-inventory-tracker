import React from "react";
import PropTypes from "prop-types";

function Inventory(props){
  const inventoryStyle = {
    cursor: 'pointer'
  }
  return (
    <React.Fragment>
      <div style={inventoryStyle} className="container">
      <div onClick={() => props.whenProductClicked(props.id)}>
      <h3>{props.name} / {props.origin} / {props.roast}</h3>
      <p><em>{props.price}</em></p>
      </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

Inventory.propTypes = {
    name: PropTypes.string,
    origin: PropTypes.string,
    roast: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.string,
    whenProductClicked: PropTypes.func
    };

export default Inventory  ;

