import React from "react";
import { connect } from "react-redux";
import ShopCarProduct from "./ShopCartProduct";
import { addOrder, deleteOrder } from "../../actions/shopCarActions";


class ShopCartProducts extends React.Component {
  state = {
    isSend: ''
  }


  getTotalPrice = () => {
    const { shopCart } = this.props;
    let totalValueOfOrder = 0;
    for (let i = 0; i < shopCart.length; i++) {
      totalValueOfOrder = shopCart[i].totalPrice + totalValueOfOrder;
    }
    return totalValueOfOrder;
  };

  makeOrderClick = () => {
    var { shopCart } = this.props;
    const orderUser = {
      orderPrice: this.getTotalPrice(),
      order: shopCart
    };

    this.props.addOrder(orderUser);
    this.setState({
      isSend: "enviado"
    })

    this.props.deleteOrder();
  }

  render() {
    const { shopCart } = this.props;
    const { isSend } = this.state;
    return (
      <div className="text-center mt-2 mr-5">
        <h2 className="text-center my-5">Su pedido</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul>
              {shopCart.length > 0 ? shopCart.map(product => (
                <ShopCarProduct key={product.name} info={product} />
              )) : null}
            </ul>
          </div>
        </div>
        {shopCart.length === 0 ? (
          <img
            style={{ width: "60%", heigh: "60%" }}
            src="../../tigerProduct.png"
            alt=""
          />
        ) : (
            <button onClick={this.makeOrderClick} className=" btn btn-primary">
              Realizar pedido por un valor total de{" "}
              <span className="badge badge-warning text-dark h3">
                $ {this.getTotalPrice()}
              </span>
            </button>
          )}

        {isSend == "enviado" ?
          <div className="alert alert-success text-center mt-5">Pedido enviado</div>
          : ""}
      </div>
    );
  }

}

const mapStateToProps = state => ({

  shopCart: state.shopCart.shopCart

});

export default connect(
  mapStateToProps,
  { addOrder, deleteOrder }
)(ShopCartProducts);








