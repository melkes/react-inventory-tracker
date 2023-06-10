import React from 'react';
import NewInventoryForm from './NewInventoryForm';
import InventoryList from './InventoryList';
import InventoryDetail from './InventoryDetail'; 
import EditInventoryForm from './EditInventoryForm';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainProductList: [],
      selectedProduct: null,
      editing: false
    };
  }
  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }
  
  handleAddingNewProductToList = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);
    this.setState({mainProductList: newMainProductList,
    formVisibleOnPage: false});
  }
  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.mainProductList.filter(product => product.id === id)[0];
    this.setState({selectedProduct: selectedProduct});
  }

  handleBackToList = () => {
    this.setState({ selectedProduct: null });
  };

  handleDeletingProduct = (id) => {
    const newMainProductList = this.state.mainProductList.filter(product => product.id !== id);
    this.setState({
      mainProductList: newMainProductList,
      selectedProduct: null
    });
  }

  handleEditClick = () => {

    this.setState({editing: true});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    // let addProductButton = null; // new code
      if (this.state.editing) {
        currentlyVisibleState = <EditInventoryForm product={this.state.selectedProduct} />
        buttonText= "Return to Product List";
      }
      else if (this.state.selectedProduct != null) {
      currentlyVisibleState = <InventoryDetail 
      product={this.state.selectedProduct}
      onBackToList={this.handleBackToList}
      onDeleteProduct={this.handleDeletingProduct}
      onClickingEdit = {this.handleEditClick} />
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewProductToList}/>;
      buttonText = "Return to Product List"; 
    } else {
      currentlyVisibleState = <InventoryList 
      inventoryList={this.state.mainProductList} 
      onProductSelection={this.handleChangingSelectedProduct} />;
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