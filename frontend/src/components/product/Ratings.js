import Button from '@mui/material/Button';
import React from "react";
import { Star } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { RatingsModel } from "./RatingsModel";

export function Ratings() {
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
                <Star color="#282c34" sx={{ fontSize: 30,marginRight:'5px' }} />
                <Typography variant="h4" component="div" sx={{ mr: 1 }}>
                  4.4
                </Typography>
              </div>
              <Typography variant="subtitle1" component="div">
                10,000 Ratings
              </Typography>
              <Typography variant="subtitle1" component="div">
                326 Reviews
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" component="div">
                5 Stars
              </Typography>
              <LinearProgress variant="determinate" value={80} color="success" sx={{ mb: 1 }} />
              <Typography variant="subtitle1" component="div">
                4 Stars
              </Typography>
              <LinearProgress variant="determinate" value={70} color="success" sx={{ mb: 1 }} />
              <Typography variant="subtitle1" component="div">
                3 Stars
              </Typography>
              <LinearProgress variant="determinate" value={50} color="success" sx={{ mb: 1 }} />
              <Typography variant="subtitle1" component="div">
                2 Stars
              </Typography>
              <LinearProgress variant="determinate" value={40} color="warning" sx={{ mb: 1 }} />
              <Typography variant="subtitle1" component="div">
                1 Star
              </Typography>
              <LinearProgress variant="determinate" value={10} color="error" sx={{ mb: 1 }} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
