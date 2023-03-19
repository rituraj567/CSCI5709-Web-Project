import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";

export function CardComponent(props) {
  const navigate = useNavigate();
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Card Total: ${props.totalCost}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.totalItems} items added to cart
          </Typography>
          <div className="mt-4 center-buttons">
            <Link to="/checkout">
              <Button variant="contained" sx={{minWidth:'100%'}} size="large" className="mb-3">
               Checkout
              </Button>
            </Link>

            <Button
              variant="outlined"
              size="large"
              sx={{minWidth:'100%'}}
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
              View Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
