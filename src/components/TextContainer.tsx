"use client";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { ReactComponent as WatchIcon } from "../images/watch.svg";

const TextContainer = () => {
  return (
    <div style={{ fontFamily: "Manrope" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
        }}
      >
        <Typography
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
    </div>
  );
};
export default TextContainer;
