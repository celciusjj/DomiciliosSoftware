import React, { Component } from "react";
import { connect } from "react-redux";
import { mostrarProductos } from "../../actions/productActions";
import ProductCrud from "./ProductCrud";
import { Link } from "react-router-dom";

class Crud extends Component {
  componentDidMount() {
    this.props.mostrarProductos();
  }

  state = {
    arrayProductos: []
  };

  componentWillReceiveProps() {
    this.setState({ arrayProductos: this.props.productos });
  }

  onReloadPage = () => window.location.reload();

  render() {
    return (
      <div>
        <Link to="/create/">
          <button className="btn btn-warning mt-3 w-100">
            Agregar producto
          </button>
        </Link>
        <div className="d-flex justify-content-around flex-wrap">
          {this.state.arrayProductos.map(producto => (
            <ProductCrud
              key={producto.productId}
              id={producto.productId}
              name={producto.name}
              price={producto.price}
              description={producto.description}
              quantity={producto.quantity}
              url={producto.url}
              onReload={this.onReloadPage}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productos: state.productos.productos
});

export default connect(
  mapStateToProps,
  { mostrarProductos }
)(Crud);
