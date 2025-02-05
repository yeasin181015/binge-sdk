import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Portal from "@mui/material/Portal";
import VideoCardPortal from "./VideoCardPortal";
import { Box } from "@mui/material";
import { varZoomIn, varZoomInLeft, varZoomInRight } from "../utils/ZoomIn";
import { usePortalData } from "./PortalProvider";
import MotionContainer from "./MotionContainer";

export default function VideoPortalContainer() {
  const { miniModalMediaData, anchorElement } = usePortalData();
  const container = useRef(null);
  const rect = anchorElement?.getBoundingClientRect();

  let isFirstElement = false;
  let isLastElement = false;
  let variant = varZoomIn;
  if (anchorElement) {
    const parentElement = anchorElement.closest(".slick-active");
    const nextSiblingOfParentElement = parentElement?.nextElementSibling;
    const previousSiblingOfParentElement =
      parentElement?.previousElementSibling;
    if (!previousSiblingOfParentElement?.classList.contains("slick-active")) {
      isFirstElement = true;
      variant = varZoomInLeft;
    } else if (
      !nextSiblingOfParentElement?.classList.contains("slick-active")
    ) {
      isLastElement = true;
      variant = varZoomInRight;
    }
  }

  return (
    <>
      {miniModalMediaData && anchorElement !== null ? (
        <Portal container={container.current}>
          <VideoCardPortal
            video={miniModalMediaData}
            anchorElement={anchorElement}
          />
        </Portal>
      ) : null}
      <AnimatePresence>
        <MotionContainer open={anchorElement !== null} initial="initial">
          <Box
            className="removeHoina"
            ref={container}
            component={motion.div}
            variants={variant}
            sx={{
              zIndex: 1,
              position: "absolute",
              display: "inline-block",
              ...(rect && {
                top: rect.top + window.pageYOffset - 0.2 * rect.height,
                ...(isLastElement
                  ? {
                      right: document.documentElement.clientWidth - rect.right,
                    }
                  : {
                      left: isFirstElement
                        ? rect.left
                        : rect.left - 0.25 * rect.width,
                    }),
              }),
              // display: "none",
            }}
          />
        </MotionContainer>
      </AnimatePresence>
    </>
  );
}
