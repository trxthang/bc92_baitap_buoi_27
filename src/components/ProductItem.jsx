import React from "react";

export default class ProductItem extends React.Component {
  render() {
    const { item, setStateModal } = this.props;

    return (
      <div className="card product-card h-100">
        <img src={item.image} className="card-img-top p-3" alt={item.name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text text-muted">{item.shortDescription}</p>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="fw-bold text-danger">${item.price}</span>
            <button
              type="button"
              className="btn btn-dark btn-sm"
              onClick={() => setStateModal(item)}
            >
              Xem chi tiet
            </button>
          </div>
        </div>
      </div>
    );
  }
}
