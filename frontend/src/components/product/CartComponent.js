import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlined
} from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { CardComponent } from "./CardComponent";

export default function CartComponent({ product, userId }) {
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem("Token");
  const [totalCartCost, setTotalCartCost] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [removeError, setRemoveError] = useState();
  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/cart/`, 
      {
        headers: { Authorization: token },
      }
    );
  
    setCartItems(response.data.cartItems);
    setTotalCartCost(Number(response.data.totalCost).toFixed(2));
    setTotalCartItems(Number(response.data.totalQuantity).toFixed(2));
  };

  const handleCartProcess = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_SERVER}/cart/`,
      {
        productId: product.productId,
        name: product.name,
        description: product.description,
        price: product.price,
        averageRating: product.averageRating,
        totalRating: product.totalRating,
        category: product.category,
        quantity: 1,
        imageThumbnailUrl: product.imageThumbnailUrl,
      },
      {
        headers: { Authorization: token },
      }
    );
    const cartItems = response.data.cartItems;
    setTotalCartCost(Number(response.data.totalCost).toFixed(2));
    setTotalCartItems(response.data.totalQuantity);
    setCartVisible(true);
    setCartItems(cartItems);
    setRemoveError("");
  };

  const handleRemoveCartProcess = async () => {
    const itemExists = cartItems.find(
      (item) => item.productId === product.productId
    );
    if (itemExists) {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_SERVER}/cart/${product.productId}`,
        {
          headers: { Authorization: token },
        }
      );

      const cartItems = response.data.cartItems;
      setTotalCartCost(response.data.totalCost);
      setTotalCartItems(response.data.totalQuantity);
      setCartItems(cartItems);
    } else {
      setRemoveError("Item doesn't exist in the cart, cannot remove");
    }
  };

  return (
    <div>
      <div className="add-cart">
        <Row>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <AddCircleOutlineOutlined
              sx={{
                color: "#2ecc71",
                marginTop: "-1rem",
                cursor: "pointer",
                marginRight: "1rem",
              }}
              onClick={() => handleCartProcess()}
            />
            <RemoveCircleOutlined
              sx={{
                color: "#d90429",
                marginTop: "-1rem",
                cursor: "pointer",
              }}
              onClick={() => handleRemoveCartProcess()}
            />
          </div>
        </Row>
        <Row className="mt-5">
          <div>
            <p style={{ marginBottom: "1rem" }}>{removeError}</p>
            <CardComponent
              totalCost={totalCartCost}
              totalItems={totalCartItems}
              cartItems={cartItems}
            />
          </div>
        </Row>
      </div>
    </div>
  );
}
