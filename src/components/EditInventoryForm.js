import React from "react";
import ReusableForm from "./ReusableForm";

function EditInventoryForm (props) {
  return (
    <React.Fragment>
      <ReusableForm 
        buttonText="Update Inventory" />
    </React.Fragment>
  );
}

export default EditInventoryForm;