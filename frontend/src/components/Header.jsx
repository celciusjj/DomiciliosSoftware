import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { palabraBuscador } from "../actions/searcherAction";
import { mostrarProductos } from "../actions/productActions";
import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  getOrders,
  getAllOrders,
  getOrdersDelivered
} from "../actions/orderActions";

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
    if (localStorage.getItem("domicilio")) {
      let userRole = JSON.parse(localStorage.getItem("domicilio"))[0].role;
      if (userRole !== "admin" && userRole !== "repartidor") {
        this.props.getOrders(
          JSON.parse(localStorage.getItem("domicilio"))[0].email
        );
      } else {
        this.props.getAllOrders();
        this.props.getOrdersDelivered();
      }
    }
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

          <Link to={"/orderUser/"} className="text-light mr-5 mt-2 ml-5">
            Mis pedidos
          </Link>
          <Link
            to={"/carrito/"}
            className="text-light mr-5 mt-2 ml-3"
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
          <div
            hidden={
              localStorage.getItem("domicilio")
                ? JSON.parse(localStorage.getItem("domicilio"))[0].role ===
                  "admin"
                  ? false
                  : true
                : true
            }
          >
            <LinkContainer to="/crud/">
              <NavDropdown.Item>Gestionar productos</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to="/infoPedidos">
              <NavDropdown.Item>Información pedidos</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to="/historial">
              <NavDropdown.Item>Inventario</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to="/despachadores">
              <NavDropdown.Item>Despachadores</NavDropdown.Item>
            </LinkContainer>
          </div>

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
  {
    palabraBuscador,
    mostrarProductos,
    getOrders,
    getAllOrders,
    getOrdersDelivered
  }
)(Header);
