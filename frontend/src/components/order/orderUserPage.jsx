import React from "react";
import OrderUserItem from "./orderUserItem";
import { connect } from "react-redux";
import { getOrders, removeOrder } from "../../actions/orderActions";

class OrderUser extends React.Component {
  state = {
    ordersData: []
  };

  componentWillMount() {
    if (localStorage.getItem("domicilio")) {
      this.props.getOrders(
        JSON.parse(localStorage.getItem("domicilio"))[0].email
      );
    }
  }

  componentWillReceiveProps() {
    if (this.state.ordersData.length === 0) {
      this.setState({ ordersData: this.props.orderUser });
    }
  }

  onHandleDeleteItem = id => {
    this.props.removeOrder(id).then(() => {
      this.setState({
        ordersData: this.state.ordersData.filter(
          element => element.orderId !== id
        )
      });
    });
  };

  render() {
    return (
      <div className="text-center mt-2 mr-5">
        <h2 className="text-center my-5 justify-content-center">Mis pedidos</h2>
        {this.state.ordersData.length > 0
          ? this.state.ordersData.map(result => (
              <OrderUserItem
                products={result.order}
                key={result._id}
                price={result.orderPrice}
                idItem={result.orderId}
                deleteItem={this.onHandleDeleteItem.bind(this, result.orderId)}
              ></OrderUserItem>
            ))
          : JSON.parse(localStorage.getItem("domicilio"))[0].role === "admin"
          ? "Eres un administrador o repartidor"
          : "No hay ordenes"}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderUser: state.order.order
  };
};

export default connect(
  mapStateToProps,
  { getOrders, removeOrder }
)(OrderUser);
