import React from "react";
import TableOrders from "./TableOrders";
import { connect } from "react-redux";
import { getOrders } from "../../actions/orderActions";

class InfoPedidos extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h2 className="card mt-5">Ordenes</h2>
        {this.props.orderUsers.length > 0 ? (
          <TableOrders data={this.props.orderUsers} />
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
  { getOrders }
)(InfoPedidos);
