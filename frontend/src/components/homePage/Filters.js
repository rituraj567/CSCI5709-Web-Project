import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Link from "@mui/material/Link";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { SearchContext } from "../../SearchContext";

const categories = [
  {
    id: 0,
    title: "All",
  },
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
    id: 0,
    title: "All",
    minValue: -1,
    maxValue: -1,
  },
  {
    id: 1,
    title: "Under $25",
    minValue: 1,
    maxValue: 25,
  },
  {
    id: 2,
    title: "$25 to $50",
    minValue: 25,
    maxValue: 50,
  },
  {
    id: 3,
    title: "$50 to $100",
    minValue: 50,
    maxValue: 100,
  },
  {
    id: 4,
    title: "$100 to $200",
    minValue: 100,
    maxValue: 200,
  },
  {
    id: 5,
    title: "$200 & Above",
    minValue: 200,
    maxValue: 99999999999,
  },
];

const review = [
  {
    id: 0,
    title: "All",
  },
  {
    id: 4,
    title: "4",
  },
  {
    id: 3,
    title: "3",
  },
  {
    id: 2,
    title: "2",
  },
  {
    id: 1,
    title: "1",
  },
];

const Filters = ({
  setProductsList,
  sortCategory,
  getProductsWithWishlisted,
}) => {
  const [initial, setInitial] = useState(true);
  const { utilState, setUtilState } = useContext(SearchContext);
  const token = localStorage.getItem("Token");
  const primaryColor = "#2B2D42";
  const selectedColor = "#EF233C";

  const setPrice = (item) => {
    if (item.title === "All") {
      setUtilState({
        ...utilState,
        search: "All",
        minPrice: "All",
        maxPrice: "All",
      });
    } else {
      setUtilState({
        ...utilState,
        minPrice: item.minValue,
        maxPrice: item.maxValue,
      });
    }
  };

  const handleSetCategory = (categoryItem) => {
    let tempCategory = categoryItem.title;
    if (tempCategory === "All") {
      setUtilState({ ...utilState, search: "All", category: "All", value: 0 });
    } else {
      setUtilState({
        ...utilState,
        category: tempCategory,
        value: categoryItem.id,
      });
    }
  };

  const handleSetRating = (item) => {
    let tempRating = item.id;
    if (tempRating === "All") {
      setUtilState({ ...utilState, search: "All", rating: "All" });
    } else {
      setUtilState({
        ...utilState,
        rating: tempRating,
      });
    }
  };

  const fetchFilteredProductsList = async () => {
    const products = await axios.post(
      `${process.env.REACT_APP_BACKEND_SERVER}/products/filter`,
      {
        category: utilState.category,
        minPrice: utilState.minPrice,
        maxPrice: utilState.maxPrice,
        rating: utilState.rating,
        sortCategory: utilState.sortCategory,
      },
      {
        headers: { Authorization: token },
      }
    );
    setUtilState({ ...utilState, totalPages: products.data.totalPages });
    const productsWithWishlisted = await getProductsWithWishlisted(products);
    setProductsList(productsWithWishlisted);
  };

  useEffect(() => {
    if (initial) {
      setInitial(false);
    } else {
      fetchFilteredProductsList();
    }
  }, [utilState.category, utilState.minPrice, utilState.rating]);

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
        {categories.map((categoryItem) => {
          return (
            <Link
              key={categoryItem.id}
              onClick={() => handleSetCategory(categoryItem)}
              underline="hover"
              sx={{
                color:
                  categoryItem.title === utilState.category
                    ? selectedColor
                    : primaryColor,
                paddingBottom: "0.2rem",
                cursor: "pointer",
              }}
            >
              {categoryItem.title}
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
              key={price.id}
              onClick={() => setPrice(price)}
              underline="hover"
              sx={{
                color:
                  price.maxValue === utilState.maxPrice
                    ? selectedColor
                    : primaryColor,
                paddingBottom: "0.2rem",
                cursor: "pointer",
              }}
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
          paddingBottom: "4rem",
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
              key={item.id}
              onClick={() => handleSetRating(item)}
              underline="hover"
              sx={{
                color:
                  item.id === utilState.rating ? selectedColor : primaryColor,
                margin: "0",
                cursor: "pointer",
              }}
            >
              {item.title === "All" ? (
                <span
                  style={{
                    color:
                      item.id === utilState.rating
                        ? selectedColor
                        : primaryColor,
                  }}
                >
                  {item.title}
                </span>
              ) : (
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
                  />
                  <Typography
                    variant="body"
                    sx={{
                      margin: "0",
                    }}
                    color={
                      item.id === utilState.rating
                        ? selectedColor
                        : primaryColor
                    }
                  >
                    &nbsp; & up
                  </Typography>
                </span>
              )}
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default Filters;
