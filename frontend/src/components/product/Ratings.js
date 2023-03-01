import React from "react";
import { StarFill } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import { RatingsModel } from "./RatingsModel";
export function Ratings() {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <div className="center mb-3 flex-around">
            <Card.Title>Reviews & Ratings</Card.Title>
            <RatingsModel />
          </div>
          <Row>
            <Col xs={12} md={6}>
              <div className="icon-div">
                <StarFill className="icon-styles" color="black" />
                <p className="icon-text">4.4</p>
              </div>
              <div>
                <p className="rating-text">10,000 Rating & </p>
                <p className="review-text">326 Reviews</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={4} md={4}>
                  <div className="icon-div">
                    <p className="icon-text">5</p>
                    <StarFill
                      className="icon-styles margin-left"
                      color="black"
                    />
                  </div>
                </Col>
                <Col xs={88} md={8}>
                  {" "}
                  <ProgressBar
                    now={80}
                    variant="success"
                    style={{
                      height: "0.5rem",
                      marginTop: "5px",
                      marginLeft: "-10px",
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={4} md={4}>
                  <div className="icon-div">
                    <p className="icon-text">4</p>
                    <StarFill
                      className="icon-styles margin-left"
                      color="black"
                    />
                  </div>
                </Col>
                <Col xs={8} md={8}>
                  {" "}
                  <ProgressBar
                    now={70}
                    variant="success"
                    style={{
                      height: "0.5rem",
                      marginTop: "5px",
                      marginLeft: "-10px",
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={4} md={4}>
                  <div className="icon-div">
                    <p className="icon-text">3</p>
                    <StarFill
                      className="icon-styles margin-left"
                      color="black"
                    />
                  </div>
                </Col>
                <Col xs={8} md={8}>
                  {" "}
                  <ProgressBar
                    now={50}
                    variant="success"
                    style={{
                      height: "0.5rem",
                      marginTop: "5px",
                      marginLeft: "-10px",
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={4} md={4}>
                  <div className="icon-div">
                    <p className="icon-text">2</p>
                    <StarFill
                      className="icon-styles margin-left"
                      color="black"
                    />
                  </div>
                </Col>
                <Col xs={8} md={8}>
                  {" "}
                  <ProgressBar
                    now={40}
                    variant="warning"
                    style={{
                      height: "0.5rem",
                      marginTop: "5px",
                      marginLeft: "-10px",
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={4} md={4}>
                  <div className="icon-div">
                    <p className="icon-text">1</p>
                    <StarFill
                      className="icon-styles margin-left"
                      color="black"
                    />
                  </div>
                </Col>
                <Col xs={8} md={8}>
                  {" "}
                  <ProgressBar
                    now={10}
                    variant="danger"
                    style={{
                      height: "0.5rem",
                      marginTop: "5px",
                      marginLeft: "-10px",
                    }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
