import React, { useState } from "react";
import { Star } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Products from "./Products.json";

export function UserReviews({reviews}) {
 

  return (
    <div>
      
      <Card sx={{ width: "100%", marginTop: "1rem" }}>
        <CardContent>
    
                <Typography variant="h5" component="div" sx={{ mr: 1,marginBottom:'1rem' }}>
                  Reviews 
                </Typography>
         
          {reviews.length > 0 && reviews.map((review) => (
            <div key={review.rating}>
              <div style={{ display: "flex", alignItems: "center",marginBottom:'6px'  }}>
                <Typography variant="body1" style={{ marginRight: "4px" }}>
                  {review.ratingDesc?.ratings[0]?.rating}
                </Typography>
                <Star color="#2b2d42" />
              </div>
              <Typography variant="body2" sx={{marginBottom:'6px' }}> {review.ratingDesc?.ratings[0]?.comment}</Typography>
              <div style={{ display: "flex" }}>
                <Typography
                  variant="body2"
                  style={{ marginRight: "4px", fontWeight: "bold" }}
                >
                {"Raj"}
                </Typography>
                <Typography variant="body2"></Typography>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
