import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewInventoryForm(props){

    function handleNewInventoryFormSubmission(event) {
      event.preventDefault();
      props.onNewInventoryCreation({
        name: event.target.name.value,
        origin: event.target.origin.value,
        price: event.target.price.value,
        roast: event.target.roast.value,
        id: v4()
      });
    }

  return (
    <React.Fragment>
     <form onSubmit={handleNewInventoryFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Coffee Name' />
        <input
          type='text'
          name='origin'
          placeholder='Origin' />
        <input
          name='roast'
          type='text'
          placeholder='Roast Type' />
        <input
          name='price'
          type='text'
          placeholder="$" />
        <button type='submit'>Submit Form</button>
      </form>
    </React.Fragment>
  );
}
NewInventoryForm.propTypes = {
  onNewInventoryCreation: PropTypes.func
};

export default NewInventoryForm;