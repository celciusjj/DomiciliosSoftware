import React from "react";
import { connect } from "react-redux";
import ShopCarProduct from "./ShopCartProduct";
import { addOrder, getOrders } from "../../actions/orderActions";

class ShopCartProducts extends React.Component {
  state = {
    isSend: "",
    products: localStorage.getItem("shopCart")
      ? JSON.parse(localStorage.getItem("shopCart"))
      : []
  };

  getTotalPrice = () => {
    const { products } = this.state;
    if (products) {
      let totalValueOfOrder = 0;
      for (let i = 0; i < products.length; i++) {
        totalValueOfOrder = products[i].totalPrice + totalValueOfOrder;
      }
      return totalValueOfOrder;
    }
    return [];
  };

  deleteItem = id => {
    let productsLocal = JSON.parse(localStorage.getItem("shopCart"));
    productsLocal = productsLocal.filter(element => element.id !== id);
    localStorage.setItem("shopCart", JSON.stringify(productsLocal));
    this.setState({ products: JSON.parse(localStorage.getItem("shopCart")) });
  };

  makeOrderClick = () => {
    if (localStorage.getItem("domicilio")) {
      var { products } = this.state;
      const orderUser = {
        orderPrice: this.getTotalPrice(),
        order: products,
        clientData: {
          name: JSON.parse(localStorage.getItem("domicilio"))[0].name,
          email: JSON.parse(localStorage.getItem("domicilio"))[0].email
        }
      };

      this.props.addOrder(orderUser);
      this.props.getOrders();
      this.setState({
        isSend: "enviado",

      });
      localStorage.removeItem("shopCart");
    }
  };

  render() {
    const { isSend, products } = this.state;
    return (
      <div className="text-center mt-2 mr-5">
        <h2 className="text-center my-5">Su pedido</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul>
              {products.length > 0
                ? products.map(product => (
                    <ShopCarProduct
                      key={product.name}
                      info={product}
                      deleteItem={this.deleteItem}
                    />
                  ))
                : null}
            </ul>
          </div>
        </div>
        {products.length === 0 ? (
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

        {isSend === "enviado" ? (
          <div className="alert alert-success text-center mt-5">
            Pedido enviado
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { addOrder, getOrders }
)(ShopCartProducts);
