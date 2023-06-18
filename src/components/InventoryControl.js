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
    newProduct.pounds = 130;
    const newMainProductList = this.state.mainProductList.concat(newProduct);
    this.setState({
      mainProductList: newMainProductList,
      selectedProduct: null,
      editing: false,
    formVisibleOnPage: false});
  }
  
  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.mainProductList.filter(product => product.id === id)[0];
    this.setState(prevState => ({
      selectedProduct: selectedProduct,
      mainProductList: prevState.mainProductList  // keep the existing product list
    }));
  };  

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
  
  handleSaleofProductPounds = () => {
    const { selectedProduct } = this.state;
    if (selectedProduct && selectedProduct.pounds > 0) {
      const updatedProduct = { ...selectedProduct, pounds: selectedProduct.pounds - 1 };
      this.setState({ selectedProduct: updatedProduct });
    }
  };
    
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
      onClickingEdit = {this.handleEditClick}
      onSaleofProductPounds={this.handleSaleofProductPounds} />
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