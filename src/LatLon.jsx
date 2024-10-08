import React from "react";

function LatLon(props) {
  return (
    <>
      <h2>Bienbenidos a {props.city}</h2>
      <p>
        {props.city} proviene de la latitud: {props.lat} y longitud:
        {props.lon}
      </p>
    </>
  );
}

export default LatLon;
