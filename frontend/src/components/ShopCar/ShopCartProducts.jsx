import React from "react";
import { connect } from "react-redux";
import ShopCarProduct from "./ShopCartProduct";
import { addOrder } from "../../actions/shopCarActions";

const ShopCarProducts = props => {
  function calculateTotal() {}

  function makeOrderClick() {
    const { shopCart } = props;

    const order = {
      order: [shopCart]
    };

    props.addOrder(order);
    console.log(shopCart);
  }

  const { shopCart } = props;
  console.log(shopCart);
  return (
    <React.Fragment>
      <div className="text-center mt-2 mr-5">
        <h2 className="text-center my-5">Su pedido</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul>
              {shopCart.map(product => (
                <ShopCarProduct key={product.name} info={product} />
              ))}
            </ul>
          </div>
        </div>
        {shopCart.length === 0 ? (
          <div>Carrito vacio</div>
        ) : (
          <button onClick={makeOrderClick} className=" btn btn-primary">
            Realizar pedido
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    shopCart: state.shopCart.shopCart
  };
};

export default connect(
  mapStateToProps,
  { addOrder }
)(ShopCarProducts);
