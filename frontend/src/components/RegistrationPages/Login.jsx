import React, { Component } from "react";
import ApiCall from "../../APICalls/users";

import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    contrasena: "",
    error: ""
  };

  onHandleSignIn = () => {
    if (this.state.email && this.state.contrasena) {
      ApiCall.authUser({
        email: this.state.email,
        password: this.state.contrasena
      })
        .then(res => res.json())
        .then(result => {
          if (result.status) {
            localStorage.setItem(
              "domicilio",
              JSON.stringify([result.data, result.token])
            );
            this.setState({
              email: "",
              contrasena: "",
              error: ""
            });
            this.props.history.push("/");
          } else {
            this.setState({
              error: "usuario no encontrado"
            });
          }
        });
    } else {
      this.setState({
        error: "ingresa todos los campos"
      });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          {error === "ingresa todos los campos" ? (
            <div className="font-weight-bold alert alert-danger text-center mt-4">
              Ingresa todos los campos
            </div>
          ) : error === "usuario no encontrado" ? (
            <div className="font-weight-bold alert alert-danger text-center mt-4">
              Usuario no encontrado
            </div>
          ) : (
            ""
          )}
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Unete y compra nuestros productos</h2>
              <div className="form-group">
                <input
                  onChange={e => this.setState({ email: e.target.value })}
                  type="text"
                  value={this.state.email}
                  className="form-control mt-4"
                  placeholder="Usuario"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={e => this.setState({ contrasena: e.target.value })}
                  type="password"
                  value={this.state.contrasena}
                  className="form-control mt-4"
                  placeholder="Contraseña"
                />
              </div>
              <button
                onClick={this.onHandleSignIn}
                id="buttonLogIn"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Iniciar sesión
              </button>
              <h6 className="text-center mt-4">¿No tienes una cuenta? </h6>
              <Link
                to="/registro/"
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
