import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Rating from "@mui/material/Rating";

const categories = [
  {
    id: 1,
    title: "Electronics",
  },
  {
    id: 2,
    title: "Kitchen",
  },
  {
    id: 3,
    title: "Hardware & Tools",
  },
  {
    id: 4,
    title: "Seasonal",
  },
  {
    id: 5,
    title: "Clothes & Accessories",
  },
  {
    id: 6,
    title: "Health & Beauty",
  },
  {
    id: 7,
    title: "Stationary & Craft",
  },
  {
    id: 8,
    title: "Home Decor",
  },
  {
    id: 9,
    title: "Celebration",
  },
  {
    id: 10,
    title: "Cards",
  },
  {
    id: 11,
    title: "Food",
  },
  {
    id: 12,
    title: "Toys",
  },
];

const priceListFilter = [
  {
    id: 1,
    title: "Under $25",
  },
  {
    id: 2,
    title: "$25 to $50",
  },
  {
    id: 3,
    title: "$50 to $100",
  },
  {
    id: 4,
    title: "$100 to $200",
  },
  {
    id: 5,
    title: "$200 & Above",
  },
];

const review = [
  {
    id: 5,
  },
  {
    id: 4,
  },
  {
    id: 3,
  },
  {
    id: 2,
  },
  {
    id: 1,
  },
];

const Filters = () => {
  const primaryColor = "#2B2D42";
  const selectedColor = "#EF233C";

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", paddingBottom: "0.5rem" }}
        color="initial"
      >
        Filters
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "2rem",
        }}
      >
        <Typography
          variant="body"
          sx={{ fontWeight: "bold", paddingBottom: "0.5rem" }}
          color="initial"
        >
          Department
        </Typography>
        {categories.map((category) => {
          return (
            <Link
              href="#"
              underline="hover"
              sx={{ color: "black", paddingBottom: "0.2rem" }}
            >
              {category.title}
            </Link>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "2rem",
        }}
      >
        <Typography
          variant="body"
          sx={{ fontWeight: "bold", paddingBottom: "0.5rem" }}
          color="initial"
        >
          Price
        </Typography>
        {priceListFilter.map((price) => {
          return (
            <Link
              href="#"
              underline="hover"
              sx={{ color: "black", paddingBottom: "0.2rem" }}
            >
              {price.title}
            </Link>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body"
          sx={{ fontWeight: "bold", paddingBottom: "0.5rem" }}
          color="initial"
        >
          Reviews
        </Typography>
        {review.map((item) => {
          return (
            <Link
              href="#"
              underline="hover"
              sx={{
                color: "black",
                margin: "0",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0",
                  minHeight: "0",
                }}
              >
                <Rating
                  name="half-rating-read"
                  value={item.id}
                  precision={0.5}
                  readOnly
                />{" "}
                <p style={{ margin: "0" }}> &nbsp; & up</p>
              </span>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default Filters;
