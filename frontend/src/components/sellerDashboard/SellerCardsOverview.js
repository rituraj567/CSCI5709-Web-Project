import { Box, Grid, Container } from "@mui/material";
import React from "react";
import DashboardCard from "./DashboardCard";

const SellerCardsOverview = () => {
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
          <DashboardCard cardName="Total Sales" cardNumber="$12" />
          <DashboardCard cardName="Rating" cardNumber="4.2" />
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid xs={12} sm={6} lg={3} sx={{ display: "flex" }}>
          <DashboardCard cardName="Total Sales" cardNumber="$12" />
          <DashboardCard cardName="Rating" cardNumber="4.2" />
        </Grid>
      </Container>
    </Box>
  );
};

export default SellerCardsOverview;
