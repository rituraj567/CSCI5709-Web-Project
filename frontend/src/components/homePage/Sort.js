import { Box } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const Sort = () => {
  const [sortCategory, setSortCategory] = React.useState("");

  const WhiteBorderTextField = styled(Select)({
    "&.Mui-focused": {
      borderColor: "red",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "red",
      },
    },
  });

  const handleChange = (event) => {
    setSortCategory(event.target.value);
  };
  return (
    <Box
      sx={{ display: "flex", justifyContent: "flex-end", paddingTop: "1rem" }}
    >
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <WhiteBorderTextField
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortCategory}
          label="Sort by"
          onChange={handleChange}
        >
          <MenuItem value={"priceLow"}>Price: Low to High</MenuItem>
          <MenuItem value={"priceHigh"}>Price: High to Low</MenuItem>
          <MenuItem value={"highestReview"}>Highest Reviews</MenuItem>
          <MenuItem value={"newest"}>Newest Arrival</MenuItem>
        </WhiteBorderTextField>
      </FormControl>
    </Box>
  );
};

export default Sort;
