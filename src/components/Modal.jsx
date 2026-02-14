import React from "react";

export default class Modal extends React.Component {
  render() {
    const { content, onClose } = this.props;

    if (!content) {
      return null;
    }

    return (
      <div className="custom-modal-backdrop" onClick={onClose}>
        <div
          className="custom-modal-content"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
            <h4 className="mb-0">Thong tin san pham</h4>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>

          <div className="row align-items-center">
            <div className="col-md-5 text-center mb-3 mb-md-0">
              <img src={content.image} alt={content.name} className="img-fluid" />
            </div>

            <div className="col-md-7">
              <h5>{content.name}</h5>
              <p className="text-muted mb-2">{content.description}</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-0">
                  <strong>Gia:</strong> ${content.price}
                </li>
                <li className="list-group-item px-0">
                  <strong>So luong ton:</strong> {content.quantity}
                </li>
                <li className="list-group-item px-0">
                  <strong>Ma SP:</strong> {content.alias}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
