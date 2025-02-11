import { useState, useRef, useEffect } from "react";
import Slider, { Settings } from "react-slick";
import { motion } from "framer-motion";
import { styled, Theme, useTheme } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ProductType } from "./PortalProvider";
import SimilarVideoCard from "./SimilarVideoCard";
import VideoItemWithHover from "./VideoItemWithHover";
import { CategoryProps } from "../App";
import CustomNavigation from "./CustomNavigation";
import RowSkeleton from "./RowSkeleton";
import NetflixNavigationLink from "./NetflixNavigationLink";
import VideoCardMedia from "./VideoCardMedia";
import videojs from "video.js";
import Image from "./Image";
import VideoJSPlayer from "./VideoJSPlayer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const LOCAL_BASE_URL = "https://web-api.binge.buzz";
interface SlickSliderProps {
  data: any[];
  categories: CategoryProps;
  totalProduct: number;
  handleNext: () => void;
  type?: string;
  visibleOverflow?: boolean;
}

export default function SlickSlider({
  data,
  categories,
  totalProduct,
  handleNext,
  type,
  visibleOverflow,
}: SlickSliderProps) {
  console.log(data);
  const sliderRef = useRef<Slider>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [showExplore, setShowExplore] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [nextShow, setNextShow] = useState(true);
  const theme = useTheme();
  const [baseUrl, setBaseUrl] = useState<string>(LOCAL_BASE_URL);
  const matchesSm = useMediaQuery("(max-width:800px)");
  const matchesXs = useMediaQuery("(max-width:700px)");
  const matchesXxs = useMediaQuery("(max-width:450px)");
  const matches1200 = useMediaQuery("(max-width:1200px)");
  const [mute, setVolumeStatus] = useState<boolean>(true);

  useEffect(() => {
    if (sliderRef.current && sliderRef.current.props.slidesToShow) {
      setNextShow(
        sliderRef.current.props.slidesToShow < data.length ||
          (matchesXxs && data.length >= 3) ||
          (matchesXs && data.length >= 4) ||
          (matchesSm && data.length >= 5) ||
          (matches1200 && data.length >= 6)
      );
    }
  }, [sliderRef.current, matches1200]);

  const beforeChange = async (currentIndex: number, nextIndex: number) => {
    if (data.length < totalProduct) {
      handleNext();
    }
    if (currentIndex < nextIndex) {
      setActiveSlideIndex(nextIndex);
    } else if (currentIndex > nextIndex) {
      setIsEnd(false);
    } else if (data.length == totalProduct) {
      setIsEnd(true);
    }
    setActiveSlideIndex(nextIndex);
  };

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const handleSlideNext = () => {
    sliderRef.current?.slickNext();
  };

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <Box
        className={className} // Ensure the className is included
        onClick={onClick}
        sx={{
          ...style,
          top: "50%",
          right: 0, // Ensure it's visible
          transform: "translateY(-50%)",
          zIndex: 10, // Make sure it's above slides
          display: "block !important", // Override any hidden styles
          cursor: "pointer",
          position: "absolute",
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: 20, color: "black" }} />
      </Box>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <Box
        className={className} // Ensure the className is included
        onClick={onClick}
        sx={{
          ...style,
          top: "50%",
          left: 0, // Ensure it's visible
          transform: "translateY(-50%)",
          zIndex: 10, // Make sure it's above slides
          display: "block !important", // Override any hidden styles
          cursor: "pointer",
          position: "absolute",
        }}
      >
        <ArrowBackIosIcon sx={{ fontSize: 20, color: "black" }} />
      </Box>
    );
  }

  const settings: Settings = {
    speed: 500,
    infinite: false,
    arrows: false,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setActiveSlideIndex(newIndex),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.75,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.75,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ overflowX: "hidden", position: "relative" }}>
      {data.length > 0 &&
        categories.category_type &&
        categories.category_type !== "ad_category" && (
          <>
            <SamplePrevArrow onClick={() => sliderRef?.current?.slickPrev()} />
            <Slider ref={sliderRef} {...settings}>
              {data.map((item, index) => {
                return (
                  <Box key={index} sx={{ borderRadius: "16px" }}>
                    {index !== activeSlideIndex ? (
                      <Image
                        path={
                          item.image_landscape ||
                          item.image_portrait ||
                          item.image_square ||
                          item.thumb_path
                        }
                        sx={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "16px",
                        }}
                      />
                    ) : (
                      <VideoJSPlayer
                        //@ts-ignore
                        _hlsStreamUrl={item.trailer_link}
                        isActive={index === activeSlideIndex}
                      />
                    )}
                  </Box>
                );
              })}
            </Slider>
            <SampleNextArrow onClick={() => sliderRef?.current?.slickNext()} />
          </>
        )}
    </Box>
  );
}
