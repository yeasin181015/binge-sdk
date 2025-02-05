import { Box } from "@mui/material";
const SonyBadge = () => {
  return (
    <Box
      component="img"
      width="18px"
      height="18px"
      src={"/assets/sonyliv.jpg"}
      sx={{
        zIndex: "100",
      }}
    ></Box>
  );
};

export default SonyBadge;
