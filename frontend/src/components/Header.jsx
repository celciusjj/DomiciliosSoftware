import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { palabraBuscador } from "../actions/searcherAction";
import { mostrarProductos } from "../actions/productActions";

class Header extends Component {


  onClickPedidos = () => {
    this.setState({
      isSearcherEnable: false,
    })
  }

  onClickProductos = () => {
    this.setState({
      isSearcherEnable: true,
    })
  }

  render() {
    this.props.mostrarProductos();

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between  d-flex">
        <div className="d-flex flex-row">
          <Link onClick={this.onClickProductos} to={"/"} className="text-light p-2">
            Productos
          </Link>
          <Link to={"/"} className="text-light p-2 ">
            Pedidos

          </Link>
          <Link to={"/"} className="text-light p-2 ">
            Despachadores
          </Link>
        </div>

        <div>
          <div style={{ float: "right", marginTop: "5px" }}>
            <Link
              to={"/login/"}
              className="text-light mr-5"
              style={{ float: "right" }}
            >
              Iniciar Sesión
            </Link>
            <Link
              to={"/carrito/"}
              className="text-light mr-5"
              style={{ float: "right" }}
              onClick={this.onClickPedidos}
            >
              Carrito de compras
            </Link>
          </div>
          <div style={{ float: "left", marginRight: "25px" }}>
            <input
              id="searcher"
              type="text"
              
              className="form-control d-none"
              placeholder="Buscar"
              onChange={e => this.props.palabraBuscador(e.target.value)}
            />
          </div>

        </div>
      </nav>
    );
  }
}

export default connect(
  null,
  { palabraBuscador, mostrarProductos }
)(Header);
