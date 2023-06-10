import React from "react";


function NewInventoryForm(props){

    function handleNewInventoryFormSubmission(event) {
      event.preventDefault();
      console.log(event.target.name.value);
      console.log(event.target.origin.value);
      console.log(event.target.price.value);
      console.log(event.target.roast.value);

    };
  

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

export default NewInventoryForm;