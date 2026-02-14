import React from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends React.Component {
  renderProducts = () => {
    const { productsData, setStateModal } = this.props;

    return productsData.map((product) => (
      <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
        <ProductItem item={product} setStateModal={setStateModal} />
      </div>
    ));
  };

  render() {
    return <div className="row">{this.renderProducts()}</div>;
  }
}
