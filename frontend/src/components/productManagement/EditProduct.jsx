import React, { Component } from "react";
import { editProduct, getOneProduct } from "../../APICalls/products";

class EditProduct extends Component {
  state = {
    nombre: "",
    precio: "",
    cantidad: "",
    descripcion: "",
    url: ""
  };

  componentDidMount() {
    getOneProduct(this.props.match.params.id).then(res =>
      this.setState({
        nombre: res.data.product.name,
        precio: res.data.product.price,
        cantidad: res.data.product.quantity,
        descripcion: res.data.product.description,
        url: res.data.product.url
      })
    );
  }

  onHandleEditProduct = event => {
    event.preventDefault();
    if (
      this.state.nombre &&
      this.state.precio &&
      this.state.cantidad &&
      this.state.descripcion &&
      this.state.url
    ) {
      editProduct(this.props.match.params.id, {
        name: this.state.nombre,
        price: this.state.precio,
        quantity: this.state.cantidad,
        description: this.state.descripcion,
        url: this.state.url
      }).then(res => {
        if (res.data.status) {
          console.log("Se editó correctamente");
          this.setState({
            nombre: "",
            precio: "",
            cantidad: "",
            descripcion: "",
            url: ""
          });
        } else {
          console.log("No editó correctamente");
        }
      });
    } else {
      console.log("Campos incompletos");
    }
  };
  render() {
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    value={this.state.nombre}
                    className="form-control mt-4"
                    onChange={e => this.setState({ nombre: e.target.value })}
                    placeholder="Ingrese el nuevo nombre del producto"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    value={this.state.precio}
                    className="form-control mt-4"
                    onChange={e => this.setState({ precio: e.target.value })}
                    placeholder="Ingrese el nuevo precio del producto"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={this.state.cantidad}
                    className="form-control mt-4"
                    onChange={e => this.setState({ cantidad: e.target.value })}
                    placeholder="Ingrese la nueva cantidad del producto"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    value={this.state.descripcion}
                    className="form-control mt-4"
                    onChange={e =>
                      this.setState({ descripcion: e.target.value })
                    }
                    placeholder="Ingrese la nueva descripción del producto"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    value={this.state.url}
                    className="form-control mt-4"
                    onChange={e => this.setState({ url: e.target.value })}
                    placeholder="Ingrese la nueva url de la imagen del producto"
                  />
                </div>
                <button
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4"
                  onClick={this.onHandleEditProduct}
                >
                  Editar producto
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProduct;
