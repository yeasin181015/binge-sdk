import { useState, useRef, useCallback, useEffect } from "react";
import Player from "video.js/dist/types/player";
import { Box } from "@mui/material";
import { ProductType } from "./PortalProvider";
import LiveBadge from "./LiveBadge";
import SonyBadge from "./SonyBadge";
import Image from "./Image";
import VideoJSPlayer from "./VideoJSPlayer";
import MaxLineTypography from "../utils/MaxLineTypography";
import NetflixIconButton from "./NetflixIconButton";
import { VolumeHigh } from "../utils/common";
import { VolumeOff } from "@mui/icons-material";
import Badge from "./Badge";
import videojs from "video.js";

const EXTENSION = "/manifest.m3u8";
const TV_BASE_URL = "https://ott.bingebd.com/live/ngrp:";

export default function VideoCardMedia({ video }: { video: ProductType }) {
  const [mute, setVolumeStatus] = useState<boolean>(false);
  let video_url = video.hls_url || video.hls_link;

  if (video.content_type === "tv_channel") {
    video_url = video?.hls_link?.includes("ngrp")
      ? video.hls_link
      : `${TV_BASE_URL}${video.hls_link}${EXTENSION}`;
  }
  const playerRef = useRef<Player | null>(null);

  const handleMute = useCallback(
    (status: boolean) => {
      if (mute === true) {
        setVolumeStatus(false);
      } else {
        setVolumeStatus(true);
      }

      //@ts-ignore
      playerRef.current.muted = !status;
    },
    [mute]
  );

  const checkIfTrailerIsAvailable = (video: ProductType): boolean => {
    return video.trailer_link && video.trailer_link.length > 0 ? true : false;
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
      }}
    >
      {video.tvod_ids && video.tvod_ids?.slice(1, -1).length > 0 ? (
        <Box
          component="span"
          sx={{
            position: "relative",
            zIndex: 1000,
            top: 8,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <Badge tag="Rent" />
          </Box>

          {video?.is_live && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 8,
              }}
            >
              <LiveBadge />
            </Box>
          )}
        </Box>
      ) : video.sony_id ? (
        <Box
          component="span"
          sx={{
            position: "relative",
            zIndex: 1000,
            top: 8,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 8,
            }}
          >
            <SonyBadge />
          </Box>

          {video?.is_live && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 8,
              }}
            >
              <LiveBadge />
            </Box>
          )}
        </Box>
      ) : (
        video.free_or_premium === 2 && (
          <Box
            component="span"
            sx={{
              position: "relative",
              zIndex: 1000,
              top: 8,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <Badge />
            </Box>

            {video?.is_live && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 8,
                }}
              >
                <LiveBadge />
              </Box>
            )}
          </Box>
        )
      )}

      <Box
        sx={{
          width: "100%",
          aspectRatio: "16/9",
        }}
      >
        <Image
          path={
            video.image_landscape ||
            video.image_portrait ||
            video.image_square ||
            video.thumb_path
          }
          sx={{
            width: "100%",
            aspectRatio: "16/9",
            objectFit: "contain",
            position: "absolute",
            zIndex: 50,
            animation: `${
              checkIfTrailerIsAvailable(video)
                ? "hide 1s ease-in-out forwards"
                : ""
            }`,

            [`@keyframes hide`]: {
              to: {
                display: "none",
              },
            },
          }}
        />
        <VideoJSPlayer
          //@ts-ignore
          _hlsStreamUrl={video.trailer_link}
          muted={mute}
          //@ts-ignore
          playerRef={playerRef}
          sx={{
            position: "absolute",
            animation: `show 1s ease-out-in forwards`,
            display: "none",
            animationDelay: "1s",
            [`@keyframes show`]: {
              to: {
                display: "block",
              },
            },
          }}
        />
      </Box>

      {checkIfTrailerIsAvailable(video) && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            left: 0,
            right: 0,
            bottom: 0,
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingBottom: "4px",
            position: "absolute",
            zIndex: 100,
          }}
        >
          <MaxLineTypography
            maxLine={2}
            sx={{ width: "80%", fontWeight: 700 }}
            variant="h6"
          >
            {video.name}
          </MaxLineTypography>

          <NetflixIconButton
            sx={{
              transition: "all 0.5s linear",
              marginBottom: "12px",
              "& svg": {
                color: "hsla(0,0%,100%,.5)",
                transition: "all 0.5s linear",
              },
              "&:hover, &:focus": {
                borderColor: "#fff",
                "& svg": {
                  color: "white",
                },
              },
            }}
            onClick={(event) => {
              event.stopPropagation();
              handleMute(mute);
              event.preventDefault();
            }}
          >
            {!mute ? <VolumeHigh /> : <VolumeOff />}
          </NetflixIconButton>
        </Box>
      )}
    </Box>
  );
}
