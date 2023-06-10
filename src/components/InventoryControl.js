import React from 'react';
import NewInventoryForm from './NewInventoryForm';
import InventoryList from './InventoryList';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false

    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; // new code
    // let addProductButton = null; // new code
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewInventoryForm />
      buttonText = "Return to Product List"; // new code
    } else {
      currentlyVisibleState = <InventoryList />
      buttonText = "Add Product"; // new code
    } 
    return (
      <React.Fragment>
        {currentlyVisibleState}
       <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
export default InventoryControl;