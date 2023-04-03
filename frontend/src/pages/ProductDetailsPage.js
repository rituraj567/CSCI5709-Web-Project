import React from "react";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import "../components/cart/ViewCart.css";
import ErrorPage from "../components/ErrorPage";
import Header from "../components/Header";
import ProductInfo from "../components/product/ProductInfo";
import { Ratings } from "../components/product/Ratings";

export default function ProductPageDetails() {
  const { state } = useLocation();

  const product = state.product;

  return (
    <div>
      {localStorage.getItem("isUserLoggedIn") ? (
        <div>
          <Header />
          <Container className="margin-top">
            {product ? (
              <div>
                <ProductInfo product={product} />
                <Ratings product={product} />
              </div>
            ) : null}
          </Container>
        </div>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
}
