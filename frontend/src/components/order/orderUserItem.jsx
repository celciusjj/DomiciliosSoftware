import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import OrderUserItemItem from './orderUserItemItem'
class OrderUserItem extends React.Component {
  state = {
    openOrderModal: false
  };

  onHandleOpenModal = () => this.setState({ openOrderModal: true });

  render() {
    return (
      <div>
        <Accordion  defaultActiveKey="0" className="text-center">
          <Card style={{backgroundColor: "#FFFFFF"}}>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <div className="row align-items-center justify-content-around text-center">
                  <p className="text-dark ">Id: {this.props.idItem}</p>
                  <p className="text-dark ">Precio total: {this.props.price}</p>
                  {this.props.state === "entregado" ? <p className="text-success ">Estado: {this.props.state}</p>
                  : this.props.state === "pendiente" ? <p className="text-warning ">Estado: {this.props.state}</p>
                  : <p className="text-danger ">Estado: {this.props.state}</p>
                  }
                  

                {/**<button onClick={this.props.deleteItem} className="btn btn-danger">Borrar</button>**/}
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body >
                {this.props.products.map(result => (
                  <OrderUserItemItem
                    name = {result.name}
                    counter = {result.counter}
                    totalPrice = {result.totalPrice}
                  > 
                  </OrderUserItemItem>
                ))
                }

              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>

    );
  }
}

export default OrderUserItem;
