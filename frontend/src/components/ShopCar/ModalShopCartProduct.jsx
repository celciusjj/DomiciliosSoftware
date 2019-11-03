import React from "react";
import Modal from "react-bootstrap/Modal";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Geocode from "react-geocode";

Geocode.setApiKey(""); //API KEY

const mapStyles = {
  width: "97%",
  height: "95%"
};

class ModalShopCartProduct extends React.Component {
  state = {
    name: "Medellín, Antioquia",
    markers: [
      {
        position: {
          lat: 6.241678,
          lng: -75.569961
        },
        elevation: 1470
      }
    ]
  };

  onMarkerDragEnd = (coord, index) => {
    const lat = coord.latLng.lat();
    const lng = coord.latLng.lng();

    Geocode.fromLatLng(lat, lng)
      .then(
        response => {
          let nameResponse = response.results[0].formatted_address;
          if (nameResponse.includes("Unnamed Road,"))
            nameResponse = nameResponse.replace("Unnamed Road,", "");
          this.setState({ name: nameResponse });
        },
        error => {
          console.log(error);
        }
      )
      .finally(() => {
        this.setState(() => {
          const markers = [...this.state.markers];
          markers[index] = {
            ...markers[index],
            position: { lat, lng }
          };
          return { markers };
        });
        this.props.onParameter(lat, lng, this.state.name);
      });
  };

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Selecciona el marcador
            <p style={{ fontSize: "15px" }}>Arrastra el marcador</p>
            <p style={{ fontSize: "15px" }}>Dirección: {this.state.name}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "600px" }}>
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 6.241678, lng: -75.569961 }}
          >
            {this.state.markers.map((marker, index) => (
              <Marker
                onClick={this.onMarkerClick}
                key={marker.position.lat}
                draggable={true}
                // eslint-disable-next-line
                onDragend={(t, map, coord) =>
                  this.onMarkerDragEnd(coord, index)
                }
                position={marker.position}
                name={marker.name}
              />
            ))}
          </Map>
        </Modal.Body>
      </Modal>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "" //API KEY
})(ModalShopCartProduct);
