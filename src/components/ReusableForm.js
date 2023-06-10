import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
    <form onSubmit={props.formSubmissionHandler}>
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
       <button type='submit'>{props.buttonText}</button>
     </form>
   </React.Fragment>
   );
   }

   ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
  };
  
  export default ReusableForm;