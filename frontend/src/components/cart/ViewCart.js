import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useLocation, useNavigate } from "react-router-dom";
import "./ViewCart.css";
const calculateTax = (totalCost) => {
  return totalCost * 0.15;
};

export function ViewCart() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { totalCost, cartItems } = state;
  console.log("state", state);
  console.log(totalCost);
  const tax = calculateTax(totalCost);

  return (
    <Container className="margin-top">
      <h1 className="heading-2">View Cart Page</h1>

      {cartItems.map((cartItem) => (
        <div
          key={cartItem.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={cartItem.image}
            style={{ height: "10rem", width: "10rem" }}
            className="mb-4 mt-5"
            alt={cartItem.id}
          />

          <p>
            {" "}
            <strong>Quantity: </strong>
            {cartItem.quantity}
          </p>
          <p>
            {" "}
            <strong>Cost: </strong> ${totalCost}
          </p>
        </div>
      ))}
      <hr className="mt-4 mb-4" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p>
          <strong>Total Cost: </strong>
          <span>${(totalCost + tax).toFixed(2)}</span>
        </p>
        <p>
          <strong> Tax (15%): </strong>
          <span>${tax.toFixed(2)}</span>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Button
          variant="success"
          size="lg"
          className="mb-3"
          onClick={() => navigate("/checkout")}
        >
          Proceed To Checkout
        </Button>
      </div>
    </Container>
  );
}
