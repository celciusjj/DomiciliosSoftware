import React from 'react';
import { connect } from "react-redux";
import ShopCarProduct from './ShopCartProduct'
import { addOrder } from '../../actions/shopCarActions'





const ShopCarProducts = (props) => {

  const getTotalPrice = () => {
    const { shopCart } = props
      let totalValueOfOrder = 0;
    for (let i = 0; i < shopCart.length; i++) {
       totalValueOfOrder = shopCart[i].totalPrice + totalValueOfOrder;
    }
    return totalValueOfOrder;


  }

  function makeOrderClick() {
    const { shopCart } = props;

    const order = {
      orderPrice: getTotalPrice(),
      order: shopCart
    }

    props.addOrder(order);

  }

  const { shopCart } = props

  return (
    <React.Fragment>

      <div className="text-center mt-2 mr-5">
        <h2 className="text-center my-5">Su pedido</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul>
              {shopCart.map(product => (
                <ShopCarProduct
                  key={product.name}
                  info={product}
                ></ShopCarProduct>
              ))}
            </ul>

          </div>
        </div>
        {shopCart.length === 0 ?

          <img src="./tigerProduct.png"></img>
          :
          <button onClick={makeOrderClick} className=" btn btn-primary">Realizar pedido por un valor total de    <span className="badge badge-warning text-dark h3">$ {getTotalPrice()}</span></button>
        }
      </div>

    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    shopCart: state.shopCart.shopCart
  };
};

export default connect(mapStateToProps, { addOrder })(ShopCarProducts);


