import React from "react";
import { removeOrder, updateOrderState } from "../../actions/orderActions";
import { connect } from "react-redux";
import Delivers from "../deliversManagment/Delivers";

/**
 * This class renders a table which contains
 * all the orders from users
 */
class TableOrders extends React.Component {
  state = {
    orders: this.props.data,
    delivers: false,
    orderSelected: ""
  };

  changeToArray(orderId, newState) {
    if (this.state.orders.length > 0 && orderId && newState) {
      let newElement = this.state.orders.find(
        element => element.orderId === orderId
      );

      let newArray =
        this.state.orders.length > 0
          ? this.state.orders.filter(element => element.orderId !== orderId)
          : [];

      newArray.push({
        orderId: orderId,
        orderPrice: newElement.orderPrice,
        order: newElement.order,
        client: newElement.client,
        state: newState
      });

      this.setState({
        orders: newArray
      });
    }
  }

  onDeliverOrder = orderId => {
    this.props.updateOrderState(orderId, { newState: "entregado" }).then(() => {
      let newElement = this.state.orders.find(
        element => element.orderId === orderId
      );

      let newArray =
        this.state.orders.length > 0
          ? this.state.orders.filter(element => element.orderId !== orderId)
          : [];

      newArray.push({
        orderId: newElement.orderId,
        orderPrice: newElement.orderPrice,
        order: newElement.order,
        client: newElement.client,
        state: "entregado"
      });

      this.setState({
        orders: newArray
      });
    });
  };

  deleteOrder = idOrder => {
    this.props.removeOrder(idOrder).then(() => {
      this.setState({
        orders: this.state.orders.filter(element => element.orderId !== idOrder)
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.delivers ? (
          <Delivers
            idOrder={this.state.orderSelected}
            updateState={this.changeToArray()}
            onCancelDelivery={() => this.setState({ delivers: false })}
          />
        ) : null}

        <h2 className="card mt-5">Ordenes</h2>
        <table className="table table-bordered" style={{ color: "black" }}>
          <thead>
            <tr>
              <th scope="col">Id Orden</th>
              <th scope="col">Cliente</th>
              <th scope="col">Compra</th>
              <th scope="col">Dirección</th>
              <th scope="col">Precio total compra</th>
              <th scope="col">Acciones</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.length > 0 ? (
              this.state.orders.map(order => (
                <tr key={order.orderId}>
                  <th scope="row">{order.orderId}</th>
                  <td>{order.client.name}</td>
                  {order.order.map(product => (
                    <>
                      <tr>
                        <td key={product.name}>
                          <tr>{product.counter}</tr>
                        </td>
                        <td style={{ width: "80%" }}>
                          <tr>{product.name}</tr>
                        </td>
                        <td style={{ width: "200px" }}>
                          <tr>{product.totalPrice}</tr>
                        </td>
                      </tr>
                    </>
                  ))}
                  <td>{order.client.address}</td>
                  <td>{order.orderPrice}</td>
                  <td className="align-self-center">
                    {order.state === "pendiente" ? (
                      <tr>
                        <button
                          onClick={() =>
                            this.setState({
                              orderSelected: order.orderId,
                              delivers: true
                            })
                          }
                          className="btn btn-success ml-4 "
                        >
                          Despachar pedido
                        </button>
                      </tr>
                    ) : (
                      <tr>
                        <button
                          className="btn btn-success ml-4 "
                          onClick={this.onDeliverOrder.bind(
                            this,
                            order.orderId
                          )}
                        >
                          Entregar pedido
                        </button>
                      </tr>
                    )}

                    <tr>
                      <button
                        className="btn btn-danger mt-2 ml-3"
                        onClick={this.deleteOrder.bind(this, order.orderId)}
                      >
                        Cancelar pedido
                      </button>
                    </tr>
                  </td>
                  <td>
                    {order.state === "pendiente" ? (
                      <p className="text-danger font-weight-bold">
                        {order.state}
                      </p>
                    ) : (
                      <p className="text-warning font-weight-bold">
                        {order.state}
                      </p>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No hay ordenes disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  null,
  { removeOrder, updateOrderState }
)(TableOrders);
