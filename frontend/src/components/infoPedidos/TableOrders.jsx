import React from "react";

/**
 * This class renders a table which contains
 * all the orders from users
 */
class TableOrders extends React.Component {
  render() {
    return (
      <table class="table table-bordered" style={{ color: "black" }}>
        <thead>
          <tr>
            <th scope="col">Id Orden</th>
            <th scope="col">Cliente</th>
            <th scope="col">Compra</th>
            <th scope="col">Precio total compra</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.length > 0 ? (
            this.props.data.map(order => (
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

export default TableOrders;
