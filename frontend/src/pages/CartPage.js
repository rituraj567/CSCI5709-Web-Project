import React from "react";
import { ViewCart } from "../components/cart/ViewCart";
import Header from "../components/Header";
import ErrorPage from "../components/ErrorPage";

const CartPage = () => {
  return (
    <div>
      {localStorage.getItem("isUserLoggedIn") ? (
        <div>
          <Header />
          <ViewCart />
        </div>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default CartPage;
