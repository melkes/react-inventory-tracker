import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props){
  const { product } = props;

  return (
    <React.Fragment>
      <h1>Inventory Detail</h1>
      <h3>{product.name} / {product.origin} / {product.roast}</h3>
      <p><em>{product.price}</em></p>
      <hr/>
    </React.Fragment>
  );
}
InventoryDetail.propTypes = {
  product: PropTypes.object
};

export default InventoryDetail;