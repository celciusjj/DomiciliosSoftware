import { getDeliveries } from "../../APICalls/delivers";
import { updateOrderState } from "../../actions/orderActions";
import React from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";

//heroku git:remote -a sendpa

class Delivers extends React.Component {
  state = { delivers: [], selectedDeliver: "" };

  UNSAFE_componentWillMount() {
    this.getDelivers();
  }

  getDelivers = async () => {
    let respuesta = await getDeliveries();
    console.log(respuesta.data[0].name);
    this.setState({
      delivers: respuesta.data,
      selectedDeliver: respuesta.data[0].name
    });
  };

  onHandleDeliver = e => {
    //e.preventDefault();
    window.postMessage("Post message from web", "*");
    this.props
      .updateOrderState(this.props.idOrder, {
        newState: "despachado",
        deliver: this.state.selectedDeliver
      })
      .then(() => this.props.updateState(this.props.idOrder, "despachado"));
  };

  render() {
    return (
      <form className="d-flex justify-content-center">
        <div className="form-group row justify-content-center mt-5">
          <div className="col-2">
            Id pedido
            <input
              defaultValue={this.props.idOrder}
              disabled={true}
              className="form-control"
            />
          </div>
          <div className="col-6">
            <Form.Group controlId="exampleForm.ControlSelect1">
              Despachador
              <Form.Control
                as="select"
                onChange={e =>
                  this.setState({ selectedDeliver: e.target.value })
                }
                defaultValue={
                  this.state.delivers.length > 0 && this.state.delivers[0].name
                }
              >
                {this.state.delivers.map(deliver => (
                  <option key={deliver.name} value={deliver.name}>
                    {deliver.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>
          <div className="form-group row justify-content-center mt-3">
            <div className="col">
              <button
                className="btn btn-success"
                onClick={this.onHandleDeliver}
              >
                Seleccionar
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-warning "
                onClick={() => this.props.onCancelDelivery()}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { updateOrderState }
)(Delivers);
