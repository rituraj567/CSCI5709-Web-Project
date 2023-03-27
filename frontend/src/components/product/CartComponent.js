import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { Row } from "react-bootstrap";
import Products from "./Products.json";
import { CardComponent } from "./CardComponent";

export default function CartComponent({product}) {
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
console.log(product)
  const [totalCartCost, setTotalCartCost] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);

  useEffect(() => {
    handleTotalCostOfCart();
  }, [cartItems]);

  const handleAddProductsToCart = (item) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingCartItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...item, quantity: 1 },
      ]);
    }
  };

  const handleRemoveProductsFromCart = (cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
    if (existingCartItem) {
      if (existingCartItem.quantity === 1) {
        setCartItems((prevCartItems) =>
          prevCartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
          )
        );
      } else {
        setCartItems((prevCartItems) =>
          prevCartItems.map((cartItem) =>
            cartItem.id === cartItemToRemove.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        );
      }
    }
  };

  const handleTotalCostOfCart = () => {
    let sum = 0;
    let items = 0;
    cartItems.map((cartItem) => {
      sum += cartItem.price * cartItem.quantity;
      items += cartItem.quantity;
    });

    setTotalCartCost(sum);
    setTotalCartItems(items);
  };

  return (
    <div>
      <div className="add-cart">
        <Row>
          <div className="d-grid">
            <Button
              variant="contained"
              size="large"
              className="button"
              sx={{ mb: 3,minWidth:'100%', backgroundColor: '#d90429' }}
              onClick={() => {
                handleAddProductsToCart(product);
                handleTotalCostOfCart();
                setCartVisible(true);
              }}
            >
              Add to Cart
            </Button>

            {cartVisible ? (
              <Button
                variant="contained"

                size="large"
                className="button-black"
                sx={{ mt: 3,minWidth:'100%' }}
                onClick={() => {
                  handleRemoveProductsFromCart(product);
                  handleTotalCostOfCart();
                }}
              >
                Remove From Cart
              </Button>
            ) : null}
          </div>
        </Row>
        <Row className="mt-5">
          {cartVisible ? (
            <CardComponent
              totalCost={totalCartCost}
              totalItems={totalCartItems}
              cartItems={cartItems}
            />
          ) : null}
        </Row>
      </div>
    </div>
  );
}
