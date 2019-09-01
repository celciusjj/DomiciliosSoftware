import React, { Component } from "react";

class Producto extends Component {
  state = {
    counter: 0,
    isAdd: false,
    situacional: ""
  };

  incrementCounterClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decreaseCounterClick = () => {
    const { counter } = this.state;
    if (counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  };

  addProductClick = () => {
    const { counter } = this.state;
    if (counter > 0) {
      let { name, price } = this.props;
      let totalPrice = price * counter;
      let itemsShopCart = JSON.parse(localStorage.getItem("shopCart"));

      let productoCarrito = {
        name: name,
        counter: counter,
        totalPrice: totalPrice,
        id: itemsShopCart ? itemsShopCart.length + 1 : 1
      };

      if (itemsShopCart) itemsShopCart.push(productoCarrito);
      else itemsShopCart = [productoCarrito];
      localStorage.setItem("shopCart", JSON.stringify(itemsShopCart));

      this.setState({
        isAdd: true,
        counter: 0,
        situacional: "producto agregado"
      });
    } else {
      this.setState({
        situacional: "agregar cantidad"
      });
    }
  };

  render() {
    const { name, description, url, price } = this.props;
    const { situacional } = this.state;
    return (
      <div className="card mt-5 text-center" style={{ width: "220px" }}>
        {situacional === "agregar cantidad" ? (
          <div class="alert alert-warning text-center" role="alert">
            Ingrese cantidad
          </div>
        ) : situacional === "producto agregado" ? (
          <div class="alert alert-success text-center" role="alert">
            Producto agregado
          </div>
        ) : (
          ""
        )}

        <img
          src={url}
          style={{ witdh: "100px", height: "100px" }}
          className="card-img-top mt-2"
          alt="..."
        />
        <div className="card-body">
          <h5 style={{ fontWeight: "bold" }} className="card-title text-center">
            {name}
          </h5>
          <p className="card-text text-center">$ {price}</p>
          <p className="card-text text-center">{description}</p>

          <div className="container">
            <div className="row">
              <div className="col-sm">
                <button
                  onClick={this.decreaseCounterClick}
                  className="btn btn-primary"
                  style={{ borderRadius: "25px" }}
                >
                  -
                </button>
              </div>

              <div className="col-sm">{this.state.counter}</div>

              <div className="col-sm">
                <button
                  onClick={this.incrementCounterClick}
                  className="btn btn-primary"
                  style={{ borderRadius: "25px" }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={this.addProductClick}
            className="btn btn-warning mt-3"
          >
            {" "}
            Añadir al carrito{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Producto;
