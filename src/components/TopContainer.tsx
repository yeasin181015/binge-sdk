"use client";
import { Box, Container, Typography, Button } from "@mui/material";
import { ReactComponent as WatchIcon } from "../images/watch.svg";

const TopContainer = () => {
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
          src="/assets/images/HeroImage.png"
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
        <Container sx={{ zIndex: 1, paddingLeft: { xs: 2, lg: 4 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "20px", lg: "48px" },
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
              sx={{ width: { xs: 120, lg: 165 } }}
            />
            <span>is an online video</span>
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "20px", lg: "48px" },
              color: "#fff",
              marginLeft: "40px",
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
              marginLeft: "40px",
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
