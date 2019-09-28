import React, { Component } from 'react';
class EditProduct extends Component {
    state = {  }
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
                        placeholder="Ingrese el nuevo nombre del producto"
                      />
                    </div>
    
                    <div className="form-group">
                      <input
                        type="text"
                        value={this.state.correo}
                        className="form-control mt-4"
                        placeholder="Ingrese el nuevo precio del producto"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        value={this.state.direccion}
                        className="form-control mt-4"
                        placeholder="Ingrese la nueva cantidad del producto"
                      />
                    </div>
    
                    <div className="form-group">
                      <input
                        type="text"
                        value={this.state.contrasena}
                        className="form-control mt-4"
                        placeholder="Ingrese la nueva descripción del producto"
                      />
                    </div>
    
                    <div className="form-group">
                      <input
                        type="text"
                        value={this.state.contrasenaConfirm}
                        className="form-control mt-4"
                        placeholder="Ingrese la nueva url de la imagen del producto"
                      />
                    </div>
                    <button className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4">
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