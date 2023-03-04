import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Product = (props) => {
  const primaryColor = "#2B2D42";
  const selectedColor = "#EF233C";
  const navigate = useNavigate();
  const { id, title, image, price, description, category, rating } =
    props.productData;

  const handleProductClick = () => {
    navigate("/product");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        padding: "0rem 2rem 3rem 2rem",
        borderRadius: "10px",
        boxShadow: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          paddingTop: "2rem",
          justifySelf: "center",
          alignSelf: "center",
          height: "13rem",
          width: "9rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LazyLoadImage
            onClick={handleProductClick}
            src={image}
            width={"100%"}
            style={{ maxWidth: "100%", cursor: "pointer" }}
            height={"100%"}
            alt={title}
          />
        </Box>
      </Box>
      <Typography
        component={Link}
        to={"/product"}
        sx={{
          fontWeight: "bold",
          textDecoration: "none",
          color: primaryColor,
          "&:hover": { color: selectedColor },
        }}
      >
        {title.length < 80 ? title : title.substr(0, 80) + "..."}
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifySelf: "flex-start",
            width: "100%",

            alignItems: "center",
          }}
        >
          <Typography>{rating.rate}</Typography>
          <Stack sx={{ paddingRight: "0.2rem" }} spacing={1}>
            <Rating
              name="half-rating-read"
              value={rating.rate}
              precision={0.5}
              readOnly
              size="small"
            />
          </Stack>
          <Typography>({rating.count})</Typography>
        </Box>
        <Box sx={{ display: "flex", justifySelf: "flex-start" }}>
          <IconButton
            aria-label="wishlist button"
            sx={{ width: "2px", paddingLeft: "1rem" }}
          >
            <FavoriteBorderIcon sx={{ fontSize: "1.6rem" }} />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        $ {price}
      </Typography>
    </Box>
  );
};

export default Product;
