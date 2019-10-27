import React from "react";
import { connect } from "react-redux";
import { getOrdersDelivered } from "../../actions/orderActions";

class Historial extends React.Component {
  componentDidMount() {
    this.props.getOrdersDelivered();
  }

  render() {
    return (
      <div>
        <h2 className="text-center my-5">Historial de pedidos</h2>
        <table className="table table-bordered" style={{ color: "black" }}>
          <thead>
            <tr>
              <th scope="col">Id Orden</th>
              <th scope="col">Cliente</th>
              <th scope="col">Compra</th>
              <th scope="col">Precio total compra</th>
            </tr>
          </thead>
          <tbody>
            {this.props.orderDelivered &&
              this.props.orderDelivered.map(order => (
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
                  <td>{order.orderPrice}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {this.props.orderDelivered === undefined && (
          <h4>Espera un momento...</h4>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orderDelivered: state.order.orders
});

export default connect(
  mapStateToProps,
  { getOrdersDelivered }
)(Historial);
