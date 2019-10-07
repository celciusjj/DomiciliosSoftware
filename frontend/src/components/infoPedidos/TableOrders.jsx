import React from "react";
import { removeOrder } from "../../actions/orderActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/**
 * This class renders a table which contains
 * all the orders from users
 */
class TableOrders extends React.Component {
  state = {
    orders: this.props.data
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
                      <Link
                        to="/despachadores"
                        className="btn btn-success ml-4 "
                      >
                        Despachar pedido
                      </Link>
                    </tr>
                  ) : (
                    <tr>
                      <button className="btn btn-success ml-4 ">
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
                <td>{order.state}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No hay ordenes disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default connect(
  null,
  { removeOrder }
)(TableOrders);
