import React, { Component } from 'react';

class Producto extends Component {
    state = {
        counter: 0,
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decreaseCounter = () => {
        const { counter } = this.state;
        if (counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }



    render() {
        const { name, description, url } = this.props;
        return (
            <div className="card mt-5" style={{ width: "220px" }}>
                <img src={url} class="card-img-top" alt="..."></img>

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <button onClick={this.decreaseCounter} className="btn btn-primary" style={{ borderRadius: "25px" }}>-</button>
                            </div>

                            <div className="col-sm">
                                {this.state.counter}
                            </div>

                            <div className="col-sm">
                                <button onClick={this.incrementCounter} className="btn btn-primary" style={{ borderRadius: "25px" }} >+</button>
                            </div>
                        </div>
                    </div>


                    <button className="btn btn-warning mt-3"> Añadir al carrito </button>
                </div>

            </div>
        );
    }
}

export default Producto;