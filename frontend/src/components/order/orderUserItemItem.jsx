import React, { Component } from 'react';

class orderUserItemItem extends Component {
    state = {}
    render() {
        return (
            <div>
                <li className="list-group-item text-center ">
                    <div className="row align-items-center text-center justify-content-around ">

                        <p className="text-dark m-0">{this.props.name}</p>
                        <p className="text-dark m-0">Cantidad: {this.props.counter}</p>
                        <span className="badge badge-warning text-dark">
                            Precio total: ${this.props.totalPrice}
                        </span>

                    </div>
                </li>

            </div>);
    }
}

export default orderUserItemItem;