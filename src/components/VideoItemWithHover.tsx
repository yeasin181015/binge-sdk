import { useEffect, useState, useRef } from "react";
import { useDebounce } from "react-use";
import { Link } from "react-router-dom";
import { ProductType, usePortal, usePortalData } from "./PortalProvider";
import VideoItemWithHoverPure from "./VideoItemWithHoverPure";

interface VideoItemWithHoverProps {
  video: ProductType;
  tile?: number;
  fromSlider?: boolean;
}

export default function VideoItemWithHover({
  video,
  tile,
}: VideoItemWithHoverProps) {
  const setPortal = usePortal();
  const { miniModalMediaData, anchorElement } = usePortalData();
  const elementRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [debouncedHoverStated, setDebouncedHoverState] = useState(false);

  const getImageSrc = () => {
    let imgSrc;
    if (tile == 5) {
      imgSrc =
        video.image_portrait ||
        video.image_landscape ||
        video.thumb_path ||
        video.image_square;
    } else {
      imgSrc =
        video.image_landscape ||
        video.image_portrait ||
        video.thumb_path ||
        video.image_square;
    }
    return imgSrc;
  };

  useDebounce(
    () => {
      setDebouncedHoverState(isHovered);
    },
    500,
    [isHovered]
  );

  useEffect(() => {
    if (debouncedHoverStated) {
      if (miniModalMediaData) {
        setPortal(null, null);
      }
      window.innerWidth >= 1024 && setPortal(elementRef.current, video);
    }
    if (isHovered === false) {
      // setPortal(null, null);
    }
  }, [debouncedHoverStated]);

  return (
    <VideoItemWithHoverPure
      ref={elementRef}
      handleHover={setIsHovered}
      src={getImageSrc()}
      tile={tile}
      premium={video.free_or_premium}
      isSony={video.sony_id && video.sony_id?.slice(1, -1).length > 0}
      isTvod={video.tvod_ids && video.tvod_ids?.slice(1, -1).length > 0}
      isLive={video.is_live}
      onClick={() => {
        setPortal(null, null);
      }}
    />
    // </Link>
  );
}
