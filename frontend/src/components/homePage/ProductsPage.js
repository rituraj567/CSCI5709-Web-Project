import { Box, Grid } from "@mui/material";
import React from "react";
import Filters from "./Filters";
import ProductsList from "./ProductsList";

const ProductsPage = () => {
  return (
    <Box>
      <Box
        sx={{
          flexGrow: 1,
          paddingTop: "3rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={6} md={3}>
            <Filters />
          </Grid>
          <Grid item xs={6} md={9}>
            <ProductsList />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductsPage;
