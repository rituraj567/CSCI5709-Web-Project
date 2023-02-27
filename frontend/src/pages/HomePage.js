import { Box } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import Category from "../components/homePage/Category";
import ProductsPage from "../components/homePage/ProductsPage";
import Sort from "../components/homePage/Sort";
import Header from "../components/Header";
const HomePage = () => {
  return (
    <Box>
      <Header/>
      <Divider />
      <Category />
      <Sort />
      <ProductsPage />
    </Box>
  );
};

export default HomePage;
