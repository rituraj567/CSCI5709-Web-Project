import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Product from "./Product";
import Grid from "@mui/material/Grid";
import axios from "axios";

const ProductsList = () => {
  const [productsList, setProducts] = useState();

  const fetchProducts = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/products`
    );
    const products = response.data;
    console.log("products", products);
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        gridAutoRows: "1fr",
      }}
    >
      <Grid container spacing={3}>
        {productsList?.length > 0 &&
          productsList?.map((productData) => {
            return (
              <Grid item xs={3}>
                <Product key={productData._id} productData={productData} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default ProductsList;
