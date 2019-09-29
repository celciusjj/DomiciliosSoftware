import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteOneProduct } from "../../APICalls/products";

class ProductCrud extends Component {
  onHnadleDeleteProduct = id => {
    deleteOneProduct(id)
      .then(res => console.log(res))
      .finally(() => this.props.onReload());
  };

  render() {
    const { name, description, url, price, id } = this.props;
    return (
      <div className="card mt-5 text-center" style={{ width: "220px" }}>
        <img
          src={url}
          style={{ witdh: "100px", height: "100px" }}
          className="card-img-top mt-2"
          alt="..."
        />
        <div className="card-body">
          <h5 style={{ fontWeight: "bold" }} className="card-title text-center">
            {name}
          </h5>
          <p className="card-text text-center">$ {price}</p>
          <p className="card-text text-center">{description}</p>
          <Link to={"/edit/" + id}>
            <button className="btn btn-primary">Editar producto</button>
          </Link>
          <button
            className="btn btn-danger mt-3"
            onClick={this.onHnadleDeleteProduct.bind(this, id)}
          >
            Eliminar producto
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCrud;
