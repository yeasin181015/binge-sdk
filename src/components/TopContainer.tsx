"use client";
import { Box, Container, Typography, Button, useMediaQuery } from "@mui/material";
import { ReactComponent as WatchIcon } from "../images/watch.svg";

const TopContainer = () => {
  const isXs = useMediaQuery("(max-width:600px)");
  const isLg = useMediaQuery("(min-width:1200px)"); 

  let imageSrc = "/assets/images/HeroImage.png"; 

  if (isXs) {
    imageSrc = "/assets/images/HeroImage.png"; 
  } else if (isLg) {
    imageSrc = "/assets/images/HeroImage.png"; 
  }

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "end",
          width: "100%",
        }}
      >
        <img
          src={imageSrc}
          alt="hero"
          style={{ width: "80%", height: "auto" }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "80%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(to right, #464A54 0%, #464A54 27%, rgba(255, 255, 255, 0.00))",
        }}
      >
        <Container sx={{ zIndex: 1, marginLeft: {xs: '40px', lg:'161px'}}}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "25px", lg: "48px" },
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Box
              component="img"
              src="/assets/images/binge-logo.svg"
              alt="binge"
              sx={{ width: { xs: 100, lg: 165 } }}
            />
            <span>is an online video</span>
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "25px", lg: "48px" },
              color: "#fff",
            }}
          >
            streaming platform
          </Typography>
          <Button
            sx={{
              background: "#FF4A50",
              borderRadius: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
              padding: { xs: "8px 14px", lg: "12px 18px" },
              color: "#fff",
              textTransform: "none",
              fontSize: { xs: "14px", lg: "16px" },
              fontWeight: "600",
              marginTop: "30px",
            }}
          >
            Watch Now
            <WatchIcon style={{ width: "16px", height: "16px" }} />
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default TopContainer;
