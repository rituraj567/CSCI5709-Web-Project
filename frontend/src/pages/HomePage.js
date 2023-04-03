import { Box } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import Category from "../components/homePage/Category";
import ProductsPage from "../components/homePage/ProductsPage";
import Sort from "../components/homePage/Sort";
import Header from "../components/Header";
import ErrorPage from "../components/ErrorPage";
const HomePage = () => {
  return (
    <Box>
      {localStorage.getItem("Token") ? (
        <Box>
          <Header />
          <Divider />
          <Category />
          <Sort />
          <ProductsPage />
        </Box>
      ) : (
        <ErrorPage />
      )}
    </Box>
  );
};

export default HomePage;
