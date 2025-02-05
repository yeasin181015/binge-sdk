import Image from "./Image";
import { useRef } from "react";
import Slider from "react-slick";
import PlayButton from "./PlayButton";
import MoreInfoButton from "./MoreInfoButton";
import { Box, useMediaQuery } from "@mui/material";
import CountDownComponent from "./CountdownComponent";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Banner = ({ data }: { data: any }) => {
  const sliderRef = useRef<Slider>(null);
  const matchesSm = useMediaQuery("(max-width:768px)");
  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const bannerImgSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    swipeToSlide: true,
    arrows: true,
    autoplaySpeed: 5000,
  };

  return <div>Banner</div>;

  // return (
  //   <Box
  //     sx={{
  //       aspectRatio: { xs: "1/1.15", md: "20/10" },
  //       position: "relative",
  //       overflow: "hidden",
  //     }}
  //   >
  //     <Box
  //       sx={{
  //         position: "realtive",
  //       }}
  //     >
  //       <Box
  //         sx={{
  //           top: 0,
  //           left: 0,
  //           right: 0,
  //           position: "absolute",
  //         }}
  //       >
  //         {data.length && (
  //           <Slider ref={sliderRef} {...bannerImgSettings}>
  //             {data.map((bannerData: any, i: number) => (
  //               <Box
  //                 key={bannerData.id}
  //                 sx={{
  //                   position: "relative",
  //                   cursor: "pointer",
  //                 }}
  //                 onClick={() => {
  //                   setDetailType({
  //                     content_type: bannerData.content_type,
  //                     id: bannerData.id,
  //                   });
  //                 }}
  //               >
  //                 <Image
  //                   key={bannerData.id}
  //                   path={
  //                     matchesSm
  //                       ? bannerData?.banner_portrait_image_path
  //                       : bannerData?.banner_landscape_image_path
  //                   }
  //                   sx={{
  //                     width: "100%",
  //                     objectFit: "cover",
  //                     aspectRatio: { xs: "1/1.15", md: "20/10" },
  //                   }}
  //                 />
  //                 <Box
  //                   sx={{
  //                     top: 0,
  //                     left: 0,
  //                     bottom: 0,
  //                     right: "26.09%",
  //                     opacity: 1,
  //                     position: "absolute",
  //                     transition: "opacity .5s",
  //                   }}
  //                 />
  //                 <Box
  //                   sx={{
  //                     position: "absolute",
  //                     bottom: {
  //                       xs: "40%",
  //                       md: "30%",
  //                     },
  //                     left: "50%",
  //                     transform: "translate(-50%, -30%)",
  //                   }}
  //                 >
  //                   {bannerData.countdown_expiry && (
  //                     <CountDownComponent
  //                       dateTObe={bannerData.countdown_expiry}
  //                     />
  //                   )}
  //                 </Box>
  //                 <Box
  //                   sx={{
  //                     display: "flex",
  //                     gap: "10px",
  //                     marginLeft: { xs: "30px", sm: "50px" },
  //                     position: "absolute",
  //                     bottom: "30%",
  //                     zIndex: 20,
  //                   }}
  //                 >
  //                   <PlayButton
  //                     sx={{
  //                       color: "#fff",
  //                     }}
  //                     contentId={bannerData.id}
  //                     contentType={bannerData.content_type}
  //                   />
  //                   <MoreInfoButton
  //                     onClick={() => {
  //                       setDetailType({
  //                         content_type: bannerData.content_type,
  //                         id: bannerData.id,
  //                       });
  //                     }}
  //                   />
  //                 </Box>
  //               </Box>
  //             ))}
  //           </Slider>
  //         )}
  //       </Box>
  //       <Box
  //         onClick={goToPrev}
  //         sx={{
  //           top: "45%",
  //           left: "2%",
  //           transform: "translateY(-45%)",
  //           color: "white",
  //           position: "absolute",
  //           zIndex: 10,
  //           cursor: "pointer",
  //           opacity: 0.2,
  //           "&:hover": {
  //             opacity: 1,
  //           },
  //         }}
  //       >
  //         <ArrowBackIosIcon
  //           sx={{
  //             fontSize: "40px",
  //           }}
  //         />
  //       </Box>
  //       <Box
  //         onClick={goToNext}
  //         sx={{
  //           top: "45%",
  //           right: "2%",
  //           transform: "translateY(-45%)",
  //           color: "white",
  //           position: "absolute",
  //           zIndex: 10,
  //           cursor: "pointer",
  //           opacity: 0.2,
  //           "&:hover": {
  //             opacity: 1,
  //           },
  //         }}
  //       >
  //         <ArrowForwardIosIcon
  //           sx={{
  //             fontSize: "40px",
  //           }}
  //         />
  //       </Box>
  //     </Box>

  //     <Box
  //       sx={{
  //         backgroundColor: "transparent",
  //         backgroundRepeat: "repeat-x",
  //         backgroundPosition: "0px top",
  //         backgroundSize: "100% 100%",
  //         bottom: 0,
  //         position: "absolute",
  //         height: "14.7vw",
  //         opacity: 1,
  //         top: "auto",
  //         width: "100%",
  //       }}
  //     />
  //   </Box>
  // );
};

export default Banner;
