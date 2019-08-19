import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductToCar } from '../actions/shopCarActions';

class Producto extends Component {
    state = {
        counter: 0,
        isAdd: false
    }

    incrementCounterClick = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decreaseCounterClick = () => {
        const { counter } = this.state;
        if (counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }

    addProductClick = () => {
        const { name, price } = this.props;
        const { counter } = this.state;

        if (counter > 0) {

            const totalPrice = price * counter;

            const productoCarrito = {
                name: name,
                counter: counter,
                totalPrice: totalPrice
            }

            this.setState({
                isAdd: true,
                counter: 0
            })

            alert("se agrego al carrito")

            this.props.addProductToCar(productoCarrito);
        } else {
            alert("selecciona la cantidad")
        }
    }



    render() {
        const { isAdd } = this.state;
        const { name, description, url, price } = this.props;
        return (

            <div className="card mt-5 text-center" style={{ width: "220px" }}>
                <img src={url} style={{ witdh: "100px", height: "100px" }} className="card-img-top mt-2" alt="..."></img>

                <div className="card-body">
                    <h5 style={{ fontWeight: "bold" }} className="card-title text-center">{name}</h5>
                    <p className="card-text text-center">$ {price}</p>
                    <p className="card-text text-center">{description}</p>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <button onClick={this.decreaseCounterClick} className="btn btn-primary" style={{ borderRadius: "25px" }}>-</button>
                            </div>

                            <div className="col-sm">
                                {this.state.counter}
                            </div>

                            <div className="col-sm">
                                <button onClick={this.incrementCounterClick} className="btn btn-primary" style={{ borderRadius: "25px" }} >+</button>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.addProductClick} className="btn btn-warning mt-3"> Añadir al carrito </button>
                </div>
            </div>

        );
    }
}

export default connect(null, { addProductToCar })(Producto);