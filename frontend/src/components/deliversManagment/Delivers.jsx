import { getDeliveries } from "../../APICalls/delivers";
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
class Delivers extends Component {
  state = { delivers: [] };

  UNSAFE_componentWillMount() {
    this.getDelivers();
  }

  getDelivers = async () => {
    let respuesta = await getDeliveries();
    this.setState({
      delivers: respuesta.data
    });
  };

  render() {
    return (
      <form className="d-flex justify-content-center">
      <div className="form-group row justify-content-center mt-5">
          <div className="col-2">
              Id pedido
              <input defaultValue={this.props.idOrder} className="form-control" />
          </div>
          <div className="col-6">
          <Form.Group controlId="exampleForm.ControlSelect1">
            Despachador
          <Form.Control as="select">
              {this.state.delivers.map(deliver => (
                <option>{deliver.name}</option>
              ))}
          </Form.Control>
        </Form.Group>
        </div>
        <div className="form-group row justify-content-center mt-3">
          <div className="col">
            <button className="btn btn-success">Seleccionar</button>
          </div>
          <div className="col">
            <button className="btn btn-warning ">Cancelar</button>
          </div>
        </div>    
        </div>
      
      </form>
    );
  }
}

export default Delivers;
