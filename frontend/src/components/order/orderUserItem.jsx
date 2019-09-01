import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
//import ModalOrderUserItem from "./modalOrderUserItem";
class OrderUserItem extends React.Component {
  state = {
    openOrderModal: false
  };

  onHandleOpenModal = () => this.setState({ openOrderModal: true });

  render() {
    return (
      <div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <div className="row align-items-center text-center">
                <div className="col-md-8 d-flex justify-content-between align-items-center ">
                  <p className="text-dark m-0">Id: {this.props.idItem}</p>
                  <p className="text-dark m-0">Precio total: {this.props.price}</p>
                </div>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>

    );
  }
}

export default OrderUserItem;
