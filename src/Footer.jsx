import React from "react";
import { Row, Col } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Row xs={2} md={4} lg={6}>
          <Col>Yulber Espinoza</Col>
          <Col>........................................................</Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
