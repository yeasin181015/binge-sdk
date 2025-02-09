"use client";
import { Box, Container, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import {ReactComponent as WatchIcon} from '../images/watch.svg';

const HeaderWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  backgroundImage: `url('/assets/images/HeroImage.png')`,
  backgroundSize: "85% auto",
  backgroundPosition: "right center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
});

const GradientOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  // background: "linear-gradient(to right, #F8F8F8 27%, #FFFFFF00)",
  background:
    "linear-gradient(to right, #464A54 0%, #464A54 27%, rgba(255, 255, 255, 0.00))",
});

const TopContainer = () => {
  return (
    <HeaderWrapper
      sx={{
        height: { xs: "114px", lg: "402px" },
      }}
    >
      <GradientOverlay />
      <Container
        maxWidth="lg"
        sx={{
          zIndex: 1,
          padding: { xs: 2, lg: 0 },
        }}
        disableGutters
      >
        <Box sx={{width: '569px'}}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "28px", lg: "48px" },
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginLeft: "40px",
          }}
        >
          <img
            src="/assets/images/binge-logo.svg"
            alt="binge"
            style={{ width: "165px", height: "65px", marginLeft: "0" }}
          />{" "}
          <span>is an online video</span>
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "28px", lg: "48px" },
            color: "#fff",
            marginLeft: "40px",
          }}
        >
          streaming platfom
        </Typography>
        <Button
          sx={{
            background: "#FF4A50",
            borderRadius: "32px",
            display: "flex",
            justifyCoontent: 'center',
            padding: "12px 18px",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
            color: "#fff",
            textTransform: "none",
            marginLeft: "40px",
            fontSize: '16px',
            fontWeight: '600',
            marginTop: '47px',
          }}
        >
          Watch Now
          <WatchIcon />
        </Button>
        </Box>
      </Container>
    </HeaderWrapper>
  );
};
export default TopContainer;
