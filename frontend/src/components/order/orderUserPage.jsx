import React from "react";
import OrderUserItem from "./orderUserItem";
import { connect } from "react-redux";
import { getOrders } from "../../actions/orderActions";
import { removeOrder } from "../../actions/shopCarActions";

class OrderUser extends React.Component {
  state = {
    ordersData: []
  };

  componentWillMount() {
    this.props.getOrders();
  }

  componentWillReceiveProps() {
    this.setState({ ordersData: this.props.orderUser });
  }

  onHandleDeleteItem = id => {
    console.log(id);
    this.props.removeOrder(id);
    this.setState({
      ordersData: this.state.ordersData.filter(element => element._id != id)
    });
  };

  render() {
    return (
      <div className="text-center mt-2 mr-5">
        <h2 className="text-center my-5">Mis pedidos</h2>
        {this.state.ordersData.length > 0
          ? this.state.ordersData.map(result => (
              <OrderUserItem
                key={result._id}
                price={result.orderPrice}
                idItem={result._id}
                deleteItem={this.onHandleDeleteItem.bind(this, result._id)}
              ></OrderUserItem>
            ))
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
