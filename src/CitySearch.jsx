import React from "react";
import { Alert, Button, Form } from "react-bootstrap";

class CitySearch extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.displayLatLon();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="cityName">
          <Form.Label>Ingresar la dirección a Explorar: </Form.Label>
          <Form.Control
            onChange={this.props.updateCity}
            type="text"
            placeholder="Ingresa Dirección"
          />
        </Form.Group>
        {this.props.hasError && (
          <>
            <Alert variant="danger">
              <strong>Error </strong>
              {this.props.errorMessage}, por favor intenta nuevamente.
            </Alert>
          </>
        )}
        <Button varian="primary" type="submit">
          Explorar
        </Button>
      </Form>
    );
  }
}

export default CitySearch;
