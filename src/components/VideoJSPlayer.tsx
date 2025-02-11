import { Box } from "@mui/material";
import React, { LegacyRef, useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Player from "video.js/dist/types/player";
import { GetCookiesValue } from "../utils/cookie";

function checkLiveOrStage() {
  const env =
    window.location.hostname === "pre.binge.buzz" ||
    window.location.hostname.includes("localhost")
      ? "staging"
      : "production";
  return env;
}

function drmCall(bingeToken: string) {
  //@ts-ignore
  videojs.Vhs.xhr.beforeRequest = (options) => {
    const modifiedOptions = { ...options };
    if (modifiedOptions.uri.startsWith("https://ss.binge.buzz/binge-drm")) {
      const search = new URL(options.uri);
      const searchParam = search.searchParams.get("r");
      if (checkLiveOrStage() === "staging") {
        modifiedOptions.uri = `https://ss-staging.binge.buzz/binge-drm/secured?r=${searchParam}&drmtoken=${bingeToken}`;
      }
      modifiedOptions.headers = modifiedOptions.headers || {};
      modifiedOptions.headers.Authorization = `Bearer ${bingeToken}`;
      videojs.xhr(
        {
          uri: modifiedOptions.uri,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${bingeToken}`,
          },
        },
        (err, resp) => {
          if (resp.statusCode === 429) {
            // handleCloseContentError();
          } else if (resp.statusCode === 401) {
            // handleUnauthorizedError();
          } else if (resp.statusCode !== 200) {
            // fireError();
          }
        }
      );
    }
    return modifiedOptions;
  };
}

const VideoJSPlayer = ({
  _hlsStreamUrl,
  isActive,
}: {
  _hlsStreamUrl: string;
  isActive: boolean;
}) => {
  const videoJsOptions = {
    autoplay: isActive,
    muted: isActive,
    controls: true,
    responsive: true,
    fluid: true,
    experimentalSvgIcons: true,
    playbackRates: [0.5, 1, 1.5, 2],
    controlBar: {
      skipButtons: {
        forward: 10,
        backward: 10,
      },
    },
    sources: [
      {
        src: _hlsStreamUrl,
        type: _hlsStreamUrl?.endsWith(".mpd")
          ? "application/dash+xml"
          : "application/x-mpegURL",
      },
    ],
  };

  const VideoPlayer = (props: { options: any; onReady: any }) => {
    const videoRef = useRef<HTMLElement | null>(null);
    const playerRef = useRef<Player | null>(null);
    const [playbackRate, setPlaybackRate] = useState(1);
    const { options, onReady } = props;

    const bingeToken = GetCookiesValue("jwtToken", false);

    useEffect(() => {
      if (!playerRef.current) {
        const videoElement = document.createElement("video-js");

        videoElement.classList.add("vjs-big-play-centered");
        videoRef.current!.appendChild(videoElement);

        const player = ((playerRef.current as any) = videojs(
          videoElement,
          options,
          () => {
            videojs.log("player is ready");
            onReady && onReady(player);
          }
        ));
        player.on("loadstart", function (_e: any) {
          drmCall(bingeToken);
        });
      } else {
        const player = playerRef.current;

        (playerRef.current as Player).autoplay(options.autoplay);
        player.src(options.sources);
      }
    }, [options, videoRef]);

    useEffect(() => {
      if (playerRef.current) {
        playerRef?.current?.playbackRate(playbackRate);
      }
    }, [playbackRate]);

    useEffect(() => {
      const player = playerRef.current;

      return () => {
        if (player && !player.isDisposed()) {
          player.dispose();
          playerRef.current = null;
        }
      };
    }, [playerRef]);

    return (
      <>
        <div
          data-vjs-player
          style={{ width: "100%", height: "100%", borderRadius: "16px" }}
        >
          <div
            style={{ borderRadius: "16px" }}
            ref={videoRef as LegacyRef<HTMLDivElement> | undefined}
          />
        </div>
        <style>
          {`
          .vjs-loading-spinner {
            margin-top: 0 !important;
            margin-left: 0 !important;
            border-radius: "16px"
          }
        `}
        </style>
      </>
    );
  };
  return (
    <div>
      <VideoPlayer
        options={videoJsOptions}
        onReady={() => console.log("The video is ready to play")}
      />
    </div>
  );
};

export default VideoJSPlayer;
