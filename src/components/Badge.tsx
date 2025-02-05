import { Box } from "@mui/material";
const Badge = ({ tag = "Premium" }) => {
  return (
    <>
      <Box
        style={{
          borderRadius: "unset",
          // borderTopRightRadius:'4px',
          // borderBottomRightRadius:'4px',
          clipPath: "polygon(0% 0%, 100% 0, 90% 50%, 100% 100%, 0% 100%)",
        }}
        sx={{
          color: "white !important",
          border: "none",
          padding: "2px 6px",
          fontSize: "10px",
          background: "#DE0D1E",
          fontStyle: "italic",
          fontWeight: "500",
          letterSpacing: "0.2px",
        }}
      >
        <span style={{ padding: "0 5px" }}>{tag}</span>
        {/* <span className="MuiTouchRipple-root"></span> */}
      </Box>
    </>
  );
};

export default Badge;
