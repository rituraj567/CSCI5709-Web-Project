import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import axios from "axios";
import { SearchContext } from "../../SearchContext";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const token = localStorage.getItem("Token");
  const primaryColor = "#2B2D42";
  const selectedColor = "#EF233C";

  const fetchWishlist = async () => {
    const tempWishlist = await axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/wishlist`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    setWishlist(tempWishlist.data[0].products);
  };

  const deleteFromWishlist = async (item) => {
    await axios.post(
      `${process.env.REACT_APP_BACKEND_SERVER}/wishlist/delete`,
      {
        productId: item.productId,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    fetchWishlist();
  };

  useEffect(() => {
    fetchWishlist();
  }, []);
  return (
    <Box>
      {wishlist.map((item) => {
        return (
          <Box
            key={item._id}
            sx={{
              width: "50%",
              margin: "auto",
              paddingTop: "2rem",
              flexGrow: 1,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <LazyLoadImage
                  src={item.imageThumbnailUrl}
                  width={"50%"}
                  style={{
                    maxWidth: "30rem",
                    cursor: "pointer",
                  }}
                  height={"70%"}
                  alt={item.name}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6" color="initial" align="left">
                  {item.name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    width: "100%",
                  }}
                >
                  <Button
                    aria-label="Add to Cart"
                    sx={{
                      background: primaryColor,
                      textTransform: "none",
                      height: "2.5rem",
                      width: "7rem",
                      "&:hover": {
                        backgroundColor: selectedColor,
                      },
                    }}
                    variant="contained"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    aria-label="Delete"
                    sx={{
                      background: primaryColor,
                      textTransform: "none",
                      height: "2.5rem",
                      width: "7rem",
                      "&:hover": {
                        backgroundColor: selectedColor,
                      },
                    }}
                    onClick={() => deleteFromWishlist(item)}
                    variant="contained"
                  >
                    Delete
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Divider sx={{ background: "black", borderBlockWidth: 1 }} />
          </Box>
        );
      })}
    </Box>
  );
};

export default Wishlist;
