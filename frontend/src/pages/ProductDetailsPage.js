import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { NavBar } from "../components/product/NavBar";
import Header from "../components/Header";
import Products from "../components/product/Products.json";
import ProductInfo from "../components/product/ProductInfo";
import { QuestionAnswers } from "../components/product/QuestionAnswers";
import { Ratings } from "../components/product/Ratings";
import { UserReviews } from "../components/product/UserReviews";
import ErrorPage from "../components/ErrorPage";
import '../components/cart/ViewCart.css'
export default function ProductPageDetails() {
  const [products, setProducts] = useState(Products);
  
  const fetchProducts = async() => {
    const products = await axios.get("https://riturajkcsci5709group10productbackend.onrender.com/products/");
    setProducts(products)

  }
  useEffect(()=>{
    fetchProducts()
  },[])
  return (
    <div>
      {localStorage.getItem("isUserLoggedIn") ? (
        <div>
          <Header />
          <Container className="margin-top">
            <ProductInfo product={products[0]} />

            <Ratings />
            <UserReviews />
            <QuestionAnswers />
          </Container>
        </div>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
}
