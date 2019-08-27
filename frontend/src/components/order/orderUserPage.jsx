import React from "react";
import { connect } from "react-redux";
import { getOrders } from "../../actions/orderActions";

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

  render() {
    return (
      <div className="text-center mt-2 mr-5">
        <h2 className="text-center my-5">Mis pedidos</h2>
        <p>{this.state.ordersData.length > 0 ? "Si hay" : "No hay"}</p>
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
  { getOrders }
)(OrderUser);
