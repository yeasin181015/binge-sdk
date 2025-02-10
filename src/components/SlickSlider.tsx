import { useState, useRef, useEffect } from "react";
import Slider, { Settings } from "react-slick";
import { motion } from "framer-motion";
import { styled, Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ProductType } from "./PortalProvider";
import SimilarVideoCard from "./SimilarVideoCard";
import VideoItemWithHover from "./VideoItemWithHover";
import { CategoryProps } from "../App";
import CustomNavigation from "./CustomNavigation";
import Image from "./Image";
import RowSkeleton from "./RowSkeleton";
import NetflixNavigationLink from "./NetflixNavigationLink";
import VideoCardMedia from "./VideoCardMedia";
import videojs from "video.js";

export const LOCAL_BASE_URL = "https://web-api.binge.buzz";

const ARROW_MAX_WIDTH = 50;
const RootStyle = styled("div")(() => ({
  position: "relative",
  overflow: "inherit",
}));

const StyledSlider = styled(Slider)<{
  padding: number;
  visibleOverflow: boolean;
}>(
  ({
    theme,
    padding,
    visibleOverflow,
  }: {
    theme: Theme;
    padding: number;
    visibleOverflow: boolean;
  }) => ({
    display: "flex", // removed !important
    justifyContent: "center",
    overflow: "initial", // removed !important
    "& > .slick-list": {
      overflow: visibleOverflow ? "visible" : "hidden",
    },
    [theme.breakpoints.up("sm")]: {
      "& > .slick-list": {
        width: `calc(100% - ${2 * padding}px)`,
      },
      "& .slick-list > .slick-track": {
        margin: "0px", // removed !important
      },
      "& .slick-list > .slick-track > .slick-current > div > .BingeBox-root > .BingePaper-root:hover":
        {
          transformOrigin: "0% 50%",
        },
    },
    [theme.breakpoints.down("sm")]: {
      "& > .slick-list": {
        width: `calc(100% - ${padding}px)`,
      },
    },
  })
);

interface SlideItemProps {
  item: ProductType;
  type?: string;
  tile?: number;
}

function SlideItem({ item, type, tile }: SlideItemProps) {
  return (
    <Box sx={{ pr: 0.5 }}>
      {type === "cardNoHover" ? (
        <SimilarVideoCard video={item} />
      ) : (
        <VideoItemWithHover video={item} tile={tile} />
      )}
    </Box>
  );
}

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

  // async function fetchBaseUrl() {
  //   const base = await baseURL();
  //   setBaseUrl(base);
  // }
  // useEffect(() => {
  //   fetchBaseUrl();
  // }, []);

  useEffect(() => {
    if (sliderRef.current && sliderRef.current.props.slidesToShow) {
      setNextShow(
        sliderRef.current.props.slidesToShow < data.length ||
          (matchesXxs && data.length >= 3) ||
          (matchesXs && data.length >= 4) ||
          (matchesSm && data.length >= 5) ||
          (matches1200 && data.length >= 6)
      ); // (matches1200 && movies.length >= 6) this condition showing slider arrow if the screen is less than 1200 px and there is more than 6 contents
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

  const afterChange = async (currentIndex: number) => {
    // console.log(currentIndex, "current index");
    // playActiveVideo(currentIndex);
  };

  const settings: Settings = {
    speed: 500,
    infinite: false,
    arrows: false,
    lazyLoad: "ondemand",
    slidesToShow: type === "cardNoHover" ? 4 : 6,
    afterChange,
    beforeChange,
    onEdge: (direction) => {},
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: type === "cardNoHover" ? 4 : 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: type === "cardNoHover" ? 3 : 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: type === "cardNoHover" ? 2 : 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const playActiveVideo = (currentSlide: number) => {
    const videoPlayers = document.querySelectorAll(".video-js");
    videoPlayers.forEach((player, index) => {
      if (index === currentSlide) {
        const videojsPlayer = videojs(player);
        videojsPlayer.play();
      } else {
        const videojsPlayer = videojs(player);
        videojsPlayer.pause();
      }
    });
  };

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const handleSlideNext = () => {
    sliderRef.current?.slickNext();
  };

  const adImgSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    // lazyLoad: false,
    autoplaySpeed: 10000,
  };

  return (
    <Box
      sx={{ overflow: "hidden", height: "100%", zIndex: 1 }}
      className="carousal"
    >
      {data.length > 0 &&
        categories.category_type &&
        categories.category_type !== "ad_category" && (
          <>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              sx={{ mb: 1 }}
            >
              <NetflixNavigationLink
                to={`/categories/${categories.category_id}/${categories.category_type}/${categories.tile_type}`}
              >
                {`${categories.name} `}
                <KeyboardArrowRightIcon style={{ fontSize: "26px" }} />
              </NetflixNavigationLink>
            </Stack>

            <RootStyle>
              <CustomNavigation
                isEnd={isEnd}
                arrowWidth={ARROW_MAX_WIDTH}
                onNext={handleSlideNext}
                onPrevious={handlePrevious}
                activeSlideIndex={activeSlideIndex}
              >
                <StyledSlider
                  ref={sliderRef}
                  visibleOverflow={visibleOverflow || false}
                  {...settings}
                  padding={ARROW_MAX_WIDTH}
                  theme={theme}
                  slidesToScroll={1}
                >
                  {data
                    // .filter((i) => !!i.backdrop_path)
                    .map((item, index) => {
                      return (
                        <VideoCardMedia
                          video={item}
                          isActive={index === activeSlideIndex}
                        />
                      );
                      // <p>Name</p>
                    })}
                </StyledSlider>
              </CustomNavigation>
            </RootStyle>
          </>
        )}
      {categories.category_type &&
        categories.category_type === "ad_category" &&
        data.length && (
          <StyledSlider
            visibleOverflow={false}
            ref={sliderRef}
            {...adImgSettings}
            padding={ARROW_MAX_WIDTH}
            theme={theme}
            slidesToScroll={1}
            // tile={genre?.tile_type}
            // screenWidth={screenWidth}
          >
            {data.length &&
              data.map((movie, index) => {
                return (
                  <VideoCardMedia
                    video={movie}
                    isActive={index === activeSlideIndex}
                  />
                );
              })}
            {data.length == 0 && <RowSkeleton />}
          </StyledSlider>
        )}
    </Box>
  );
}
