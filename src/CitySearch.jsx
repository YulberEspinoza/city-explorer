import React from "react";
import { Button, Form } from "react-bootstrap";

class CitySearch extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="cityName">
          <Form.Label>Ingresar la dirección a Explorar</Form.Label>
          <Form.Control onChange type="text" placeholder="Dirección" />
        </Form.Group>
        <Button varian="primary" type="submit"></Button>
      </Form>
    );
  }
}

export default CitySearch;
