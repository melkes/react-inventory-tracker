import React from 'react';
import NewInventoryForm from './NewInventoryForm';
import InventoryList from './InventoryList';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainProductList: []
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
  
  handleAddingNewProductToList = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);
    this.setState({mainProductList: newMainProductList,
    formVisibleOnPage: false});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    // let addProductButton = null; // new code
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewInventoryForm onNewProductCreation={this.handleAddingNewProductToList}/>;
      buttonText = "Return to Product List"; 
    } else {
      currentlyVisibleState = <InventoryList inventoryList={this.state.mainProductList} />;
      buttonText = "Add Product"; 
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