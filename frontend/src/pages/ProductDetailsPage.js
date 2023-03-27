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
import axios from "axios"

export default function ProductPageDetails() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async() => {
    const products = await axios.get("http://localhost:5000/products/");
    console.log("Products",products)
    setProducts(products.data);
  }

  useEffect(()=>{
    fetchProducts();
  },[]);

  return (
    <div>
      {localStorage.getItem("isUserLoggedIn") ? (
        <div>
          <Header />
          <Container className="margin-top">
            <ProductInfo product={products.length>0 && products[0]} />

            <Ratings product={products.length>0 && products[0]}/>
            <UserReviews reviews={products.length>0 && products[0]?.ratingsData[0]?.ratingDesc.ratings} />
          
          </Container>
        </div>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
}
