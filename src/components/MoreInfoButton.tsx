import Button, { ButtonProps } from "@mui/material/Button";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { ButtonBase } from "@mui/material";
import Box from "@mui/material/Box";

export default function MoreInfoButton({ sx, ...others }: ButtonProps) {
  return (
    <ButtonBase
      variant="contained"
      {...others}
      sx={{
        paddingLeft: "1.3rem",
        paddingRight: "1.5rem",
        paddingTop: "8px",
        paddingBottom: "8px",
        alignSelf: "center",
        fontSize: { xs: 12, sm: 16, md: 20 },
        lineHeight: 1.5,
        whiteSpace: "nowrap",
        gap: {
          xs: "5px",
          md: "10px",
        },
        textTransform: "capitalize",
        bgcolor: "#4D4D4D",
        borderRadius: "4px",
        "&:hover": { bgcolor: "#4D4D4D95" },
        ...sx,
      }}
    >
      <Box
        sx={{
          lineHeight: 0,
        }}
      >
        <Box
          sx={{
            width: {
              xs: "0.75rem",
              sm: "0.875rem",
              md: "1.5rem",
              lg: "2rem",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-name="CircleI"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
              fill="white"
            ></path>
          </svg>
        </Box>
      </Box>
      <Box
        component="span"
        sx={{
          display: "block",
          color: "white",
          fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            md: "1rem",
            lg: "1.5rem",
          },
          fontWeight: "400",
        }}
      >
        More Info
      </Box>
    </ButtonBase>
  );
}
