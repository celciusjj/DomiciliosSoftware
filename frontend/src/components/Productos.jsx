import React, { Component } from 'react';
import Tabs from './Tabs'

// Redux
import { connect } from 'react-redux';
import { mostrarProductos } from '../actions/productActions';
import Producto from './Producto'
class Productos extends Component {

    componentDidMount() {
        this.props.mostrarProductos();
    }

    render() {
        const { productos } = this.props;
        return (
            <div>
                <div className="d-flex justify-content-around flex-wrap">
                    {productos.map(producto => (

                        <Producto
                            key={producto._id}
                            name={producto.name}
                            price={producto.price}
                            description={producto.description}
                            quantity={producto.quantity}
                            url={producto.url}
                        />
                    ))}
                </div>
            </div>);
    }
}

const mapStateToProps = state => ({
    productos: state.productos.productos
})

export default connect(mapStateToProps, { mostrarProductos })(Productos);