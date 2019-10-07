import {getDeliveries} from '../../APICalls/delivers'
import React, { Component } from 'react';
import Deliver from './Deliver'
class Delivers extends Component {
    state = { delivers: [] }

    UNSAFE_componentWillMount(){
        this.getDelivers();
    }

    getDelivers = async() => {
        let respuesta = await getDeliveries();
        this.setState({
            delivers: respuesta.value
        })
    }

    render() { 
        return (
        <div className="d-flex justify-content-around">
        <div>
            Información del pedido
        </div>

        <div>
            <h3>Repartidores</h3>
            {this.state.delivers.map(deliver => (
              <Deliver
                key={deliver.email}
                name={deliver.name}
              />
            ))}
        </div> 
        </div>
        );
    }
}
 
export default Delivers;

