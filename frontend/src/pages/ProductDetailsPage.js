import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { NavBar } from "../components/product/NavBar";
import Header from "../components/Header";
import Products from "../components/product/Products.json";
import ProductInfo from "../components/product/ProductInfo";
import { QuestionAnswers } from "../components/product/QuestionAnswers";
import { Ratings } from "../components/product/Ratings";

import ErrorPage from "../components/ErrorPage";
import "../components/cart/ViewCart.css";
import axios from "axios";

export default function ProductPageDetails() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const products = await axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/products/`
    );
    console.log("Products", products);
    setProducts(products.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {localStorage.getItem("isUserLoggedIn") ? (
        <div>
          <Header />
          <Container className="margin-top">
            {products.length > 0 ? (
              <div>
                <ProductInfo product={products[0]} />
                <Ratings product={products.length > 0 && products[0]} />
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
