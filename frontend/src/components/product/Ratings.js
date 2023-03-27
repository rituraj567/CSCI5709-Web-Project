import { Star } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { RatingsModel } from "./RatingsModel";
import axios from 'axios'
import {useState,useEffect} from 'react'
export function Ratings({ product }) {
  const [reviews, setRatings] = useState();
  const { ratingsData } = product;
  const [ratingsCount, setRatingsCount] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });

  const fetchRatings = async () => {
    try {
      console.log("id", product.productId);
      const response = await axios.get(`http://localhost:5000/products/${product.productId}/ratings`);
      console.log("ratings", response.data);
      setRatings(response.data);
    } catch (error) {
      console.log(error);
    }

    if (reviews) {
      const count = {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0,
      };
      reviews.forEach((review) => {
        count[Math.round(review.rating)]+=1;
      });
      setRatingsCount(count);
    }
  };

  useEffect(() => {
    fetchRatings();
 
  }, [ratingsData]);
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
                <RatingsModel product={product}/>
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
                {ratingsData && ratingsData[0]?.ratingDesc.ratings.length} {ratingsData &&  ratingsData[0]?.ratingDesc.ratings.length === 1 ? "Review" : "Reviews"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" component="div">
                5 Stars
              </Typography>
              <LinearProgress variant="determinate" value={ratingsCount[5]} color="success" sx={{ mb: 1 }} />
              <Typography variant="subtitle1" component="div">
                4 Stars
              </Typography>
              <LinearProgress variant="determinate" value={ratingsCount[4]} color="success" sx={{ mb: 1 }} />
              <Typography variant="subtitle1" component="div">
                3 Stars
              </Typography>
              <LinearProgress variant="determinate" value={ratingsCount[3]} color="success" sx={{ mb: 1 }} />
              <Typography variant="subtitle1" component="div">
                2 Stars
              </Typography>
              <LinearProgress variant="determinate" value={ratingsCount[2]} color="warning" sx={{ mb: 1 }} />
              <Typography variant="subtitle1" component="div">
                1 Star
              </Typography>
              <LinearProgress variant="determinate" value={ratingsCount[1]} color="error" sx={{ mb: 1 }} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );

}