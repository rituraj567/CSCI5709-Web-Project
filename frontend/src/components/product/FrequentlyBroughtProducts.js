import React from "react";
import { Grid, Typography } from "@mui/material";

export function FrequentlyBroughtProducts(props) {
  return (
    <div>
      <div className={"center-div"}>
        <Typography variant="h4" component="strong" className="mb-4">
          Frequently Brought Together
        </Typography>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <img
            className="responsive-image"
            src={props.products[1].image}
            alt={props.products[1].id}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            className="responsive-image"
            src={props.products[2].image}
            alt={props.products[2].id}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            className="responsive-image"
            src={props.products[3].image}
            alt={props.products[3].id}
          />
        </Grid>
      </Grid>
    </div>
  );
}
