import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export function FrequentlyBroughtProducts(props) {
  return (
    <div>
      <div className={"center-div"}>
        <strong className="heading-2 mb-4">Frequently Brought Together</strong>
      </div>
      <Row>
        <Col sm={12} md={4}>
          <img
            className="responsive-image"
            src={props.products[1].image}
            alt={props.products[1].id}
          />
        </Col>
        <Col sm={12} md={4}>
          <img
            className="responsive-image"
            src={props.products[2].image}
            alt={props.products[2].id}
          />
        </Col>
        <Col sm={12} md={4}>
          <img
            className="responsive-image"
            src={props.products[3].image}
            alt={props.products[3].id}
          />
        </Col>
      </Row>
    </div>
  );
}
