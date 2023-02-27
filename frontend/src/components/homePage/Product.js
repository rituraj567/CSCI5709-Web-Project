import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Product = (props) => {
  const { id, title, image, price, description, category, rating } =
    props.productData;
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
          <img
            alt={title}
            src={image}
            style={{
              height: "100%",
              maxWidth: "100%",
              width: "100%",
            }}
          />
        </Box>
      </Box>
      <Typography sx={{ fontWeight: "bold" }}>
        {title.length < 80 ? title : title.substr(0, 80) + "..."}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifySelf: "flex-start",
            width: "100%",
            flex: "2",
          }}
        >
          <Typography>{rating.rate}</Typography>
          <Stack sx={{ paddingRight: "6px" }} spacing={1}>
            <Rating
              name="half-rating-read"
              value={rating.rate}
              precision={0.5}
              readOnly
            />
          </Stack>
          <Typography>({rating.count})</Typography>
        </Box>
        <Box>
          <IconButton aria-label="wishlist button">
            <FavoriteBorderIcon sx={{ fontSize: "2rem" }} />
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
