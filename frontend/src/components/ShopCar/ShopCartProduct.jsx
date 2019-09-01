import React, { Component } from "react";

class ShopCartProduct extends Component {
  deleteClick = () => {
    const { id } = this.props.info;
    this.props.deleteItem(id);
  };

  render() {
    const { name, counter, totalPrice } = this.props.info;
    return (
      <div>
        <li className="list-group-item ">
          <div className="row align-items-center text-center ">
            <div className="col-md-8 d-flex justify-content-between align-items-center ">
              <p className="text-dark m-0">{name}</p>
              <p className="text-dark m-0">Cantidad: {counter}</p>
              <span className="badge badge-warning text-dark">
                Precio total: ${totalPrice}
              </span>
            </div>
            <div className="col-md-4">
              <button
                type="button"
                onClick={this.deleteClick}
                className="btn btn-danger"
              >
                Eliminar
              </button>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default ShopCartProduct;
