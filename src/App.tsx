import React, { useEffect, useState } from "react";
import "./App.css";
import { handleAnonLogin } from "./utils/handleAnnonLogin";
import Banner from "./components/Banner";
import { Box, Stack, useMediaQuery } from "@mui/material";
import PortalProvider, { usePortal } from "./components/PortalProvider";
import SliderRowForGenre from "./components/SliderRowForGenre";
import VideoPortalContainer from "./components/VideoPortalContainer";
import { GetCookiesValue } from "./utils/cookie";
import { useAnonToken } from "./hooks/useAnonToken";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopContainer from "./components/TopContainer";
import TextContainer from "./components/TextContainer";

export interface CategoryProps {
  id?: number;
  category_id: number;
  category_type: "vod" | "tv_channel" | "ad_category" | "tvod";
  position?: number;
  tile_type?: number;
  page_size?: number;
  page_id?: number;
  order_by?: any;
  created_at?: string;
  updated_at?: string;
  name?: string;
  ad_type?: number;
  target_user?: number;
}

function App() {
  const setPortal = usePortal();
  const [banners, setBanners] = useState([]);
  const [categoryList, setCategoryList] = useState<CategoryProps[]>([]);

  const token = useAnonToken();

  const matchesSm = useMediaQuery("(max-width:767px)");

  const fetchData = async () => {
    const res = await fetch(
      "https://web-api.binge.buzz/api/v3/banner/vod-home",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "Device-Type": "web",
        },
      }
    );
    const resAllCat = await fetch(
      "https://web-api.binge.buzz/api/v3/page/allCategories",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "Device-Type": "web",
        },
        body: JSON.stringify({
          page: "web-home-vod",
        }),
      }
    );

    const response = await res.json();
    setBanners(response.banners);
    const resAllCatData = await resAllCat.json();
    setCategoryList(resAllCatData.categories.slice(0, 3));
  };

  useEffect(() => {
    if (token) fetchData();
  }, [token]);

  if (banners?.length === 0) return <p>Loading...</p>;

  return (
    <Box
      sx={{
        width: "100%",
        // minHeight: "100vh",
        bgcolor: "#fff",
        // border: "solid 1px white",
      }}
    >
      <Stack
        spacing={8}
        onWheel={() => {
          setPortal(null, null);
        }}
      >
        <TopContainer />
        <TextContainer />
        <Box
          sx={{
            zIndex: 1,
            margin: "unset",
            marginTop: "135px !important",
          }}
        >
          {categoryList?.map((item, index) => (
            <Box key={item.category_id} sx={{ paddingTop: "2rem" }}>
              <SliderRowForGenre
                key={item.category_id}
                category={item}
                type="cardWithHover"
                visibleOverflow={true}
                token={token ?? ""}
              />
            </Box>
          ))}
        </Box>
      </Stack>
      <VideoPortalContainer />
    </Box>
  );
}

export default App;
