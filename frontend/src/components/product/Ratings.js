import React from "react";
import { Star } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { RatingsModel } from "./RatingsModel";

export function Ratings({product}) {
  const { ratingsData, totalRating } = product;
  const ratingsCount = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  
  if (ratingsData) {
    ratingsData.forEach(({ratingDesc}) => {
      ratingsCount[Math.round(ratingDesc.ratings[0].rating)] += 1;
    });
  }

  
  const ratingsPercentage = {
    5: Math.round((ratingsCount[5] / totalRating) * 100),
    4: Math.round((ratingsCount[4] / totalRating) * 100),
    3: Math.round((ratingsCount[3] / totalRating) * 100),
    2: Math.round((ratingsCount[2] / totalRating) * 100),
    1: Math.round((ratingsCount[1] / totalRating) * 100),
  };

  return (
    <div>
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h5" component="div" sx={{ mr: 1 }}>
                  Reviews & Ratings
                </Typography>
                <RatingsModel />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Star color="#282c34" sx={{ fontSize: 30, marginRight: "5px" }} />
                <Typography variant="h4" component="div" sx={{ mr: 1 }}>
                  {Math.round(product.averageRating)}
                </Typography>
              </div>
              <Typography variant="subtitle1" component="div">
                {product.totalRating} Ratings &
              </Typography>
              <Typography variant="subtitle1" component="div">
                {ratingsData?.length} {ratingsData?.length === 1 ? "Review" : "Reviews"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" component="div">
                5 Stars
              </Typography>
              <LinearProgress variant="determinate" value={ratingsPercentage[5]} color="success" sx={{ mb: 1 }} />
              <Typography variant="subtitle1" component="div">
                4 Stars
              </Typography>
              <LinearProgress variant="determinate" value={ratingsPercentage[4]} color="success" sx={{ mb: 1 }} />
              <Typography variant="subtitle1" component="div">
                3 Stars
              </Typography>
              <LinearProgress variant="determinate" value={ratingsPercentage[3]} color="success" sx={{ mb: 1 }} />
              <Typography variant="subtitle1" component="div">
                2 Stars
              </Typography>
              <LinearProgress variant="determinate" value={ratingsPercentage[2]} color="warning" sx={{ mb: 1 }} />
              <Typography variant="subtitle1" component="div">
                1 Star
              </Typography>
              <LinearProgress variant="determinate" value={ratingsPercentage[1]} color="error" sx={{ mb: 1 }} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
  }