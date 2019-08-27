import React from "react";
import ModalOrderUserItem from "./modalOrderUserItem";
class OrderUserItem extends React.Component {
  state = {
    openOrderModal: false
  };

  onHandleOpenModal = () => this.setState({ openOrderModal: true });

  render() {
    return (
      <div>
        <li className="list-group-item">
          <div className="row align-items-center text-center">
            <div className="col-md-8 d-flex justify-content-between align-items-center ">
              <p className="text-dark m-0">Precio total: {this.props.price}</p>
            </div>
            <br />
            <div className=" d-flex ">
              <button
                type="button"
                className="btn btn-primary mr-2"
                onClick={this.onHandleOpenModal}
              >
                Ver orden
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.props.deleteItem}
              >
                Eliminar
              </button>
              {/*
                <ModalOrderUserItem
                  showModal={this.state.openOrderModal}
                ></ModalOrderUserItem>
                */}
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default OrderUserItem;
