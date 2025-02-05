import Box from "@mui/material/Box";
import { ButtonBase } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";

const MAIN_PATH = {
  root: "",
  // browse: "browse",
  genreExplore: "categories",
  watch: "watch",
  tv: "watch-tv",
  sports: "sports",
  movie: "movies",
  series: "series",
  watchVod: "playing-vod",
  watchTv: "playing-tv_channel",
  watchTv2: "playing-tv",
  login: "login",
  t_c: "terms-conditions",
  faq: "faq-content",
  privacy: "privacy-policy",
  profile: "profile",
  notFound: "404-not-found",
  subscription: "subscription",
  myList: "favourites",
  bingeOriginals: "binge-originals",
  searchContent: "search-result",
  connectTv: "connect-to-tv",
  availVoucher: "avail-voucher",
  logout: "logout",
};

type PlayButtonProps = ButtonProps & {
  contentId?: number;
  contentType?: string;
  handleOnClick?: () => void;
};

export default function PlayButton({
  sx,
  contentId,
  contentType,
  handleOnClick,
  ...others
}: PlayButtonProps) {
  return (
    <ButtonBase
      color="inherit"
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
        backgroundColor: "rgb(229, 9, 20)",
        color: "#fff",
        borderRadius: "4px",
        ...sx,
      }}
      disableTouchRipple
      onClick={(e) => {
        e.stopPropagation();
        window.location.href =
          contentType === ("vod" as ButtonProps["type"])
            ? `/${MAIN_PATH.watchVod}/${contentId}`
            : `/${MAIN_PATH.watchTv}/${contentId}`;
        handleOnClick && handleOnClick();
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
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Play"
            aria-hidden="true"
          >
            <path
              d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
              fill="#fff"
            ></path>
          </svg>
        </Box>
      </Box>
      <Box
        component="span"
        sx={{
          display: "block",
          color: "#fff",
          fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            md: "1rem",
            lg: "1.5rem",
          },
          fontWeight: "500",
        }}
      >
        Play
      </Box>
    </ButtonBase>
  );
}
