import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import SliderRowForGenre from "./SliderRowForGenre";
import { useAnonToken } from "../hooks/useAnonToken";
import { fetchCategories } from "../apis/bingeProducts";
import { SliderContainerStyle } from "../styles/BingeSlider";

interface CategoryProps {
  id?: number;
  name?: string;
  order_by?: any;
  ad_type?: number;
  page_id?: number;
  position?: number;
  tile_type?: number;
  page_size?: number;
  category_id: number;
  created_at?: string;
  updated_at?: string;
  target_user?: number;
  category_type: "vod" | "tv_channel" | "ad_category" | "tvod";
}

const BingeSlider = () => {
  const token = useAnonToken();
  const [categoryList, setCategoryList] = useState<CategoryProps[]>([]);

  useEffect(() => {
    if (token) {
      fetchCategories(token).then((category) => {
        setCategoryList(category);
      });
    }
  }, [token]);

  return (
    <Box sx={SliderContainerStyle}>
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
  );
};

export default BingeSlider;
