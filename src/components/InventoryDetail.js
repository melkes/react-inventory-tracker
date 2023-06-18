import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props) {
  const { product, onBackToList, onDeleteProduct} = props;
  return (
    <React.Fragment>
      <hr />
      <h1>Product Details</h1>
      <h3>{product.name}</h3>
      <p>Origin: {product.origin}</p>
      <p>Roast: {product.roast}</p>
      <p>Price: ${product.price}</p>
      <p>Pounds remaining: {product.pounds}</p>
      <p>
        <button onClick={() => props.onSaleofProductPounds(product.id)}>Sell 1 pound of product (remove 1 lb from remaining inventory)</button>
      </p>
      
      <button onClick={onBackToList}>Back to List</button>
      <button onClick={ props.onClickingEdit }>Update Product</button>
      <button onClick={() => onDeleteProduct(product.id)}>Delete Product</button>
    </React.Fragment>
  );
}

InventoryDetail.propTypes = {
  product: PropTypes.object,
  onBackToList: PropTypes.func,
  onDeleteProduct: PropTypes.func,
  onSaleofProductPounds: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default InventoryDetail;