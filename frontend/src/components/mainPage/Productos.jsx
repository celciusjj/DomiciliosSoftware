import React from "react";

// Redux
import { connect } from "react-redux";
import { mostrarProductos } from "../../actions/productActions";
import Producto from "./Producto";
import Spinner from "react-bootstrap/Spinner";

class Productos extends React.Component {
  componentDidMount() {
    this.props.mostrarProductos();
    var searcher = document.getElementById("searcher");
    searcher.className += " d-inline";
  }

  componentWillUnmount() {
    document.getElementById("searcher").classList.remove("d-inline");
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
          {this.state.arrayProductos.length > 0 ? (
            this.state.arrayProductos.map(producto => (
              <Producto
                key={producto.productId}
                name={producto.name}
                price={producto.price}
                description={producto.description}
                quantity={producto.quantity}
                url={producto.url}
              />
            ))
          ) : (
            <div
              className="text-center justify-content-center align-middle"
              style={{ position: "absolute", top: "50%" }}
            >
              <Spinner animation="border" style={{ margin: "auto" }} />
            </div>
          )}
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
