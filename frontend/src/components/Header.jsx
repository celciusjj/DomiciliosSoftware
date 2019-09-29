import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { palabraBuscador } from "../actions/searcherAction";
import { mostrarProductos } from "../actions/productActions";
import { getOrders } from "../actions/orderActions";
import { NavDropdown } from "react-bootstrap";

class Header extends Component {
  onClickPedidos = () => {
    this.setState({
      isSearcherEnable: false
    });
  };

  onClickProductos = () => {
    this.setState({
      isSearcherEnable: true
    });
  };

  handleClickSignOut = () => {
    localStorage.removeItem("domicilio");
    this.props.history.push("/");
  };

  render() {
    this.props.getOrders();
    this.props.mostrarProductos();

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between  d-flex">
        <div className="d-flex flex-row">  
          <Link
            onClick={this.onClickProductos}
            to={"/"}
            className="text-light p-2"
          >
            Productos
          </Link>
          <Link to={"/"} className="text-light p-2 ml-3 ">
            Despachadores
          </Link>

        
            <div
              hidden={localStorage.getItem("domicilio") ? false : true}
              style={{
                float: "right"
              }}
              className="text-light mr-5"
            >
            </div>

            <Link
              to={"/orderUser/"}
              className="text-light mr-5 mt-2 ml-5"
            >
              Mis pedidos
            </Link>
            <Link
              to={"/carrito/"}
              className="text-light mr-5 mt-2"
              onClick={this.onClickPedidos}
            >
              Carrito de compras
            </Link>
        </div>
        <input
              id="searcher"
              type="text"
              className="form-control d-none w-25"
              placeholder="Buscar"
              onChange={e => this.props.palabraBuscador(e.target.value)}
            />

          <NavDropdown
              title={
                localStorage.getItem("domicilio") ? (
                  <h6 style={{ color: "white", float: "left" }}>
                    {JSON.parse(localStorage.getItem("domicilio"))[0].name}
                  </h6>
                ) : null
              }
              id="collasible-nav-dropdown"
              alignRight={true}
              style={{ fontSize: "18px" }}
              >
              <Link to="/crud/">
              Gestionar Productos
              </Link>
              <NavDropdown.Item onClick={this.handleClickSignOut}>
                Cerrar sesión
              </NavDropdown.Item>
          </NavDropdown>

          <Link
              hidden={localStorage.getItem("domicilio") ? true : false}
              to={"/login/"}
              className="text-light mr-5"
              style={{ float: "right" }}
            >
              Iniciar Sesión
            </Link>
      </nav>
    );
  }
}

export default connect(
  null,
  { palabraBuscador, mostrarProductos, getOrders }
)(Header);
