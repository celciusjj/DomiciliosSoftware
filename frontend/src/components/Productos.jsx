import React, { Component } from "react";
import Tabs from "./Tabs";

// Redux
import { connect } from "react-redux";
import { mostrarProductos } from "../actions/productActions";
import Producto from "./Producto";

class Productos extends Component {
  componentDidMount() {
    this.props.mostrarProductos();
  }

  state = {
    arrayProductos: []
  };

  componentWillReceiveProps() {
    this.filterOption();
  }

  filterOption() {
    if (this.state.arrayProductos.length > 0 && this.props.palabra) {
      console.log(
        this.state.arrayProductos.filter(element =>
          element.name.includes(this.props.palabra[1])
        )
      );
      this.setState({
        arrayProductos: this.state.arrayProductos.filter(element =>
          element.name.includes(this.props.palabra[1])
        )
      });
    }
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-around flex-wrap" on>
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
            : null}
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
