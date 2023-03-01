import React from "react";
import { CurrencyDollar, StarFill } from "react-bootstrap-icons";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CartComponent from "./CartComponent";
export function ProductInfo({ product }) {
  return (
    <div>
      <Row>
        <Col xs={12} md={4}>
          <img
            className="responsive-product-image"
            src={product.image}
            alt={product.id}
          />
        </Col>
        <Col xs={12} md={4}>
          <div className="margin">
            <p className="heading-1">{product.title}</p>

            <Row>
              <Col sm={6} md={4}>
                <div className="icon-div">
                  <StarFill className="icon-styles" color="yellow" />
                  <p className="icon-text">{product.rating.rate}</p>
                </div>
              </Col>
              <Col sm={6} md={8}>
                <div className="icon-div">
                  <CurrencyDollar className="icon-styles" color="green" />
                  <p className="icon-text">{product.price}</p>
                </div>
              </Col>
            </Row>
            <div className={"center-div"}>
              <strong className="heading-2">Product Description</strong>
            </div>
            <p>{product.description}</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <CartComponent />
        </Col>
      </Row>
    </div>
  );
}

export default ProductInfo;
