import React, { Component } from "react";
import { addProduct } from "../../APICalls/products";

class AddProduct extends Component {
  state = {
    nombre: "",
    precio: "",
    cantidad: "",
    descripcion: "",
    url: ""
  };

  onHandleAddProduct = event => {
    event.preventDefault();
    if (
      this.state.nombre &&
      this.state.precio &&
      this.state.cantidad &&
      this.state.descripcion &&
      this.state.url
    ) {
      addProduct({
        name: this.state.nombre,
        price: this.state.precio,
        quantity: this.state.cantidad,
        description: this.state.descripcion,
        url: this.state.url
      }).then(res => {
        if (res.data.status) {
          console.log("Se agrego correctamente");
          this.setState({
            nombre: "",
            precio: "",
            cantidad: "",
            descripcion: "",
            url: ""
          });
        } else {
          console.log(res.data.message);
        }
      });
    } else {
      console.log("No se han ingresado todos los campos");
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
                    placeholder="Ingrese el nombre del producto"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    value={this.state.precio}
                    className="form-control mt-4"
                    onChange={e => this.setState({ precio: e.target.value })}
                    placeholder="Ingrese el precio del producto"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={this.state.cantidad}
                    className="form-control mt-4"
                    onChange={e => this.setState({ cantidad: e.target.value })}
                    placeholder="Ingrese la cantidad del producto"
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
                    placeholder="Ingrese la descripción del producto"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    value={this.state.url}
                    className="form-control mt-4"
                    onChange={e => this.setState({ url: e.target.value })}
                    placeholder="Ingrese la url de la imagen del producto"
                  />
                </div>
                <button
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4"
                  onClick={this.onHandleAddProduct}
                >
                  Agregar producto
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;
