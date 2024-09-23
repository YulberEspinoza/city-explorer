import React from "react";

class LatLon extends React.Component {
  render() {
    return (
      <>
        <h2>Bienbenidos a {this.props.city}</h2>
        <p>
          {this.props.city} proviene de la latitud: {this.props.lat} y longitud:
          {this.props.lon}
        </p>
      </>
    );
  }
}

export default LatLon;
