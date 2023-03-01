import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h3" color="initial">
        Error Page
      </Typography>
      <Link to="/">Back to MainPage</Link>
    </Box>
  );
}

export default ErrorPage;
