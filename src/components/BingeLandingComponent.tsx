import React from "react";
import { Box } from "@mui/material";
import palette from "../theme/palette";
import BingeSlider from "./BingeSlider";
import TopContainer from "./TopContainer";
import TextContainer from "./TextContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const BingeLandingComponent = () => {
  return (
    <ThemeProvider theme={createTheme({ palette })}>
      <Box>
        <TopContainer />
        <TextContainer />
        <BingeSlider />
      </Box>
    </ThemeProvider>
  );
};

export default BingeLandingComponent;
