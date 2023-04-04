import { Box } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import Wishlist from "../components/wishlist/Wishlist";
import Header from "../components/Header";
import ErrorPage from "../components/ErrorPage";
const WishlistPage = () => {
  return (
    <Box>
      {localStorage.getItem("isUserLoggedIn") ? (
        <Box>
          <Header />
          <Divider />
          <Wishlist />
        </Box>
      ) : (
        <ErrorPage />
      )}
    </Box>
  );
};

export default WishlistPage;
