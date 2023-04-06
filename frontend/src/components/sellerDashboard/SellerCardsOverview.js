import { Box, Grid, Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";

// https://github.com/devias-io/material-kit-react
const SellerCardsOverview = () => {
  const [totalProducts, settotalProducts] = useState();
  const [productsRunningLow, setproductsRunningLow] = useState();
  const [averageRating, setaverageRating] = useState();
  useEffect(() => {
    const token = localStorage.getItem("Token");
    const headers = {
      Authorization: token,
    };
    axios
      .get(
        process.env.REACT_APP_BACKEND_SERVER +
          "/productmanagement/getselleroverview",
        {
          headers: headers,
        }
      )
      .then((response) => {
        settotalProducts(response.data.numberOfProducts);
        setproductsRunningLow(response.data.numberOfLowProducts);
        setaverageRating(response.data.averageRating);
      })
      .catch((response) => {
        console.log(`Error useEffect sellerProducts ${response}`);
      });
  }, []);

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid xs={12} sm={6} lg={3} sx={{ display: "flex" }}>
          <DashboardCard
            cardName="Total products"
            cardNumber={totalProducts}
            cardSymbol="#"
          />
          <DashboardCard
            cardName="Average Rating"
            cardNumber={averageRating}
            cardSymbol="★"
          />
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid xs={12} sm={6} lg={3} sx={{ display: "flex" }}>
          <DashboardCard
            cardName="Products running low (<=3)"
            cardNumber={productsRunningLow}
            cardSymbol="⚠"
          />
          <DashboardCard cardName="Rating" cardNumber="4.2" cardSymbol="★" />
        </Grid>
      </Container>
    </Box>
  );
};

export default SellerCardsOverview;
