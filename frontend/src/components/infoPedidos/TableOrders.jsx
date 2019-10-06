import React from "react";
import {removeOrder} from '../../APICalls/order';

/**
 * This class renders a table which contains
 * all the orders from users
 */
class TableOrders extends React.Component {

  //Esta mierda esta mala por que no actualiza el estado, es decir no estaba llamando a redux
  deleteOrder = async() => {
    let response = await removeOrder(3);
    console.log(response)
  }

  render() {
    return (
      <table className="table table-bordered" style={{ color: "black" }}>
        <thead>
          <tr>
            <th scope="col">Id Orden</th>
            <th scope="col">Cliente</th>
            <th scope="col">Compra</th>
            <th scope="col">Precio total compra</th>
            <th scope="col">Acciones</th>
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
                <td className="align-self-center">
                  <tr><button className="btn btn-success ml-4 ">Despachar pedido</button></tr>
                  <tr><button className="btn btn-danger mt-2 ml-3" onClick={this.deleteOrder}>Cancelar pedido</button></tr>
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
    );
  }
}

export default TableOrders;
