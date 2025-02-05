import { Box } from "@mui/material";
const LiveBadge = () => {
  return (
    <Box
      component="img"
      width="25px"
      // height="22px"
      src={"/assets/live_label.png"}
      sx={{
        zIndex: "100",
      }}
    ></Box>
  );
};

export default LiveBadge;
