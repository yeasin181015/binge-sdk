import React, { useEffect, useState } from "react";
import "./App.css";
import { handleAnonLogin } from "./utils/handleAnnonLogin";
import Banner from "./components/Banner";
import { Box, Stack, useMediaQuery } from "@mui/material";
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
  const [banners, setBanners] = useState([]);
  const [categoryList, setCategoryList] = useState<CategoryProps[]>([]);

  const token = useAnonToken();

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
    setCategoryList(resAllCatData.categories.slice(1, 2));
  };

  useEffect(() => {
    if (token) fetchData();
  }, [token]);

  if (banners?.length === 0) return <p>Loading...</p>;

  return (
    <Box>
      <TopContainer />
      <TextContainer />
      <Box
        sx={{
          zIndex: 1,
          marginTop: "100px !important",
        }}
      >
        {categoryList?.map((item, index) => (
          <Box key={item.category_id}>
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
    </Box>
  );
}

export default App;
