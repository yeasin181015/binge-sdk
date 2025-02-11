"use client";
import { Box, Typography } from "@mui/material";

const TextContainer = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "95%",
          sm: "80%",
          md: "65%",
          lg: "50%",
        },
        mx: "auto !important",
        display: "flex",
        flexDirection: "column",
        gap: "21px",
        mt: "43px !important",
      }}
    >
      <Typography
        className="banner-text"
        sx={{
          color: "#202939",
          fontSize: {
            xs: "30px",
            sm: "36px",
          },
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
          fontSize: {
            xs: "14px",
            sm: "16px",
          },
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
