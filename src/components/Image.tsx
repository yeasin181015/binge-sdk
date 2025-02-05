import Box from "@mui/material/Box";
import { LOCAL_BASE_URL } from "./SlickSlider";

const checkContentImageUrl = (imgUrl: string) => {
  if (imgUrl?.includes("http") || imgUrl?.includes("https")) {
    return imgUrl;
  }
};

function Image({ path, sx }: { path: string; sx: any }) {
  const onMediaFallback = (event: { target: any }) => {
    const { target } = event;
    target.src = "/assets/images/landscape.png";
  };

  return (
    <Box
      sx={{ ...sx }}
      component={"img"}
      // src={baseUrl+ '/' + path}
      src={`${LOCAL_BASE_URL}/${path}`}
      onError={onMediaFallback}
    />
  );
}

export default Image;
