import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
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
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <Container maxWidth="lg" className="margin-top">
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
              src={cartItem.imageThumbnailUrl}
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
            variant="contained"
            size="large"
            className="mb-3 button"
            sx={{minWidth: '40%'}}
            onClick={() => navigate("/checkout")}
          >
            Proceed To Checkout
          </Button>
        </div>
      </Container>
    </Box>
  );
}
