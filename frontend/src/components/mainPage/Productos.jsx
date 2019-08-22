import React, { Component } from "react";
import Tabs from "../Tabs";

// Redux
import { connect } from "react-redux";
import { mostrarProductos } from "../../actions/productActions";
import Producto from "./Producto";

class Productos extends Component {
  componentDidMount() {
    this.props.mostrarProductos();
  }

  state = {
    arrayProductos: []
  };

  componentWillReceiveProps() {
    this.setState({ arrayProductos: this.props.productos });
    this.filterOption();
  }

  filterOption() {
    if (this.state.arrayProductos.length > 0 && this.props.palabra) {
      if (this.props.palabra.trim().length > 1) {
        this.setState({
          arrayProductos: this.state.arrayProductos.filter(element =>
            element.name
              .toLowerCase()
              .trim()
              .includes(this.props.palabra.toLowerCase().trim())
          )
        });
      } else {
        this.setState({ arrayProductos: this.props.productos });
      }
    }
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-around flex-wrap">
          {this.state.arrayProductos.length > 0
            ? this.state.arrayProductos.map(producto => (
              <Producto
                key={producto._id}
                name={producto.name}
                price={producto.price}
                description={producto.description}
                quantity={producto.quantity}
                url={producto.url}
              />
            ))
            :<div className="alert alert-danger justify-content-center" style={{ position: "absolute",  top: "50%",}}>No hay productos disponibles</div>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productos: state.productos.productos,
  palabra: state.searcher.searcher
});

export default connect(
  mapStateToProps,
  { mostrarProductos }
)(Productos);
