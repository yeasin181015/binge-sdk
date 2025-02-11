"use client";
import { Box, Typography } from "@mui/material";

const TextContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "21px",
        mx: {
          xs: "40px !important",
          md: "200px !important",
          lg: "340px !important",
        },
        mt: "43px !important",
      }}
    >
      <Typography
        className="banner-text"
        sx={{
          color: "#202939",
          fontSize: "36px",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        About Binge
      </Typography>
      <Typography
        className="binge-text"
        sx={{
          color: "#697586",
          fontSize: "16px",
          fontWeight: "400",
          textAlign: "center",
        }}
      >
        Binge is an online video streaming platform that offers endless
        entertainment of Web Series, Bangla Dubbed Foreign Drama, Classic
        Hollywood Movies.
      </Typography>
    </Box>
  );
};
export default TextContainer;
