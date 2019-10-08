import React from "react";
import TableOrders from "./TableOrders";
import { connect } from "react-redux";
import { getAllOrders } from "../../actions/orderActions";

class InfoPedidos extends React.Component {
  state = {
    orders: []
  };

  componentDidMount() {
    this.props.getAllOrders();
  }

  /**
   * Will update the orders state until its length is empty
   */
  componentWillReceiveProps() {
    if (this.state.orders.length === 0) {
      console.log(this.props.orderUsers);
      this.setState({ orders: this.props.orderUsers });
    }
  }

  render() {
    return (
      <div className="text-center">

        {this.state.orders.length > 0 ? (
          <TableOrders data={this.state.orders} />
        ) : (
          <h5>Espera...</h5>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderUsers: state.order.order
  };
};

export default connect(
  mapStateToProps,
  { getAllOrders }
)(InfoPedidos);
