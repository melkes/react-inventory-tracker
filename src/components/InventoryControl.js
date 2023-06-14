import React from 'react';
import NewInventoryForm from './NewInventoryForm';
import InventoryList from './InventoryList';
import InventoryDetail from './InventoryDetail'; 
import EditInventoryForm from './EditInventoryForm';
import useInventory from './useInventory';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    const { inventory, changeInventory } = useInventory();
    this.state = {
      formVisibleOnPage: false,
      mainProductList: [],
      selectedProduct: null,
      editing: false,
      inventory,
      changeInventory
    };
  }
  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null,
        editing: false
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

  handleEditingProductInList = (productToEdit) => {
    const editedMainProductList = this.state.mainProductList
      .filter(product => product.id !== this.state.selectedProduct.id)
      .concat(productToEdit);
    this.setState({
        mainProductList: editedMainProductList,
        editing: false,
        selectedProduct: null
      });
  }
  handleDepletingInventory = (id)=> {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    const reducedCoffeeInventory = { ...selectedCoffee, qty: (selectedCoffee.qty === 0) ? 0 : selectedCoffee.qty - 1}
    this.setState({selectedCoffee: selectedCoffee});
    const reducedCoffeeInventoryList = this.state.mainCoffeeList
                                  .filter(coffee => coffee.id !== reducedCoffeeInventory.id)
                                  .concat(reducedCoffeeInventory);
    this.setState({
      mainCoffeeList : reducedCoffeeInventoryList,
      editing: false,
      selectedCoffee: null
    });
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    
    // let addProductButton = null; // new code
      if (this.state.editing) {
        currentlyVisibleState = <EditInventoryForm 
        product = {this.state.selectedProduct}
        onEditProduct = {this.handleEditingProductInList} />
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
        <InventoryDetail
        inventory={this.state.inventory}  
        changeInventory={this.state.changeInventory}       
        /> 
        {currentlyVisibleState}
       <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
export default InventoryControl;