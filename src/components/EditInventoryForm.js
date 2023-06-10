import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditInventoryForm (props) {
  const { product } = props;

  function handleEditInventoryFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      id: product.id
    });
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditInventoryFormSubmission} 
        buttonText="Update Inventory" />
    </React.Fragment>
  );
}

EditInventoryForm.propTypes = {
  product: PropTypes.object,
  onEditProduct: PropTypes.func
};
export default EditInventoryForm;