import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
export function CardComponent(props) {
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Total: ${props.totalCost} </Card.Title>

          <Card.Text>{props.totalItems} items added to cart</Card.Text>
          <div className="mt-4 center-buttons">
            <Link to="/checkout">
              <Button variant="dark" size="lg" className="mb-3">
                Proceed To Checkout
              </Button>
            </Link>

            <Button
              variant="warning"
              size="lg"
              onClick={() =>
                navigate("/cart", {
                  replace: false,
                  state: {
                    cartItems: props.cartItems,
                    totalCost: props.totalCost,
                    totalItems: props.totalItems,
                  },
                })
              }
            >
              Go to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
