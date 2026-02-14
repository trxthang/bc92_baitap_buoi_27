import React from "react";
import products from "../data/data";
import ProductList from "./ProductList";
import Modal from "./Modal";

export default class ShoesStore extends React.Component {
  state = {
    productDetail: null,
  };

  setStateModal = (product) => {
    this.setState({ productDetail: product });
  };

  closeModal = () => {
    this.setState({ productDetail: null });
  };

  render() {
    return (
      <div className="container py-4">
        <h2 className="text-center mb-4 fw-bold">Shoes Shop</h2>
        <ProductList
          productsData={products}
          setStateModal={this.setStateModal}
        />

        <Modal content={this.state.productDetail} onClose={this.closeModal} />
      </div>
    );
  }
}
