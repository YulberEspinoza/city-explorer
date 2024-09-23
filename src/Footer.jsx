import React from "react";
import { Row, Col } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Row xs={2} md={4} lg={6}>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
