import React, { useState } from "react";
import { Star } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Products from "./Products.json";

export function UserReviews() {
  const [reviews, setReviews] = useState(Products[0].reviews);

  return (
    <div>
      <Card sx={{ width: "100%", marginTop: "1rem" }}>
        <CardContent>
          {reviews.map((review) => (
            <div key={review.rating}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body1" style={{ marginRight: "4px" }}>
                  {review.rating}
                </Typography>
                <Star color="#2b2d42" />
              </div>
              <Typography variant="body2">{review.description}</Typography>
              <div style={{ display: "flex" }}>
                <Typography
                  variant="body2"
                  style={{ marginRight: "4px", fontWeight: "bold" }}
                >
                  {review.user}
                </Typography>
                <Typography variant="body2">{review.date}</Typography>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
