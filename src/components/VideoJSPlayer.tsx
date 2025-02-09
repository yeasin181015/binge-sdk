import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-youtube";
import "video.js/dist/video-js.css";
import Player from "video.js/dist/types/player";
import { GetCookiesValue } from "../utils/cookie";
import { debug } from "console";

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

export default function VideoJSPlayer({
  _hlsStreamUrl,
  muted,
  playerRef,
  style,
}: {
  _hlsStreamUrl: string;
  muted: boolean;
  playerRef: Player | null;
  style: any;
}) {
  let player: any;

  const bingeToken = GetCookiesValue("jwtToken", false);

  function fireError() {
    player.pause();
    player.dispose();
  }

  useEffect(() => {
    const videoElement = document.getElementById("video_vdrm");
    console.log("Before videojs call:", videoElement);
    try {
      player = videojs("video_vdrm", {
        muted: true,
        autoplay: true,
        liveui: true,
        loop: true,
        responsive: true,
        fluid: true,
        debug: true,
        techOrder: ["html5"],
        html5: {
          vhs: {
            overrideNative: true,
          },
          nativeAudioTracks: false,
          nativeVideoTracks: false,
        },
      });

      player.on("loadedmetadata", () => {
        // Hide the poster image
      });

      player.ready(() => {
        let promise = player.play();
        if (promise !== undefined) {
          promise
            .then(() => {})
            .catch((_error: any) => {
              console.log('coming here--------------', _error);
              player.play();
            });
        }
      });
      player.on("play", function (_e: any) {
        player.posterImage.hide();
      });
      player.on("loadstart", function (_e: any) {
        player.posterImage.show();
        drmCall(bingeToken);
      });
      player.on("error", function () {
        if (player.error()) {
          fireError();
        }
      });

      if (_hlsStreamUrl === null || _hlsStreamUrl === undefined) {
        player.dispose();
        player = null;
      }
      console.log("before catch:", document.getElementById("video_vdrm"));
    } catch (err) {
      console.log(err, "error");
    }
    console.log(
      "outside try catch block:",
      document.getElementById("video_vdrm")
    );
  }, []);

  useEffect(() => {
    if (_hlsStreamUrl) {
      try {
        player.src({
          fluid: true,
          src: _hlsStreamUrl,
          type: _hlsStreamUrl.endsWith(".mpd")
            ? "application/dash+xml"
            : "application/x-mpegURL",
        });
      } catch (e) {
        console.log(e);
      }
    }
  }, [_hlsStreamUrl]);

  useEffect(
    () => () => {
      if (player) {
        if (!player["isDisposed_"]) {
          player.dispose();
        }
        player = null;
      }
    },
    []
  );

  return (
    <video
      id={"video_vdrm"}
      className="video-js"
      style={{ width: "100%", aspectRatio: "16/9 !important" }}
      //@ts-ignore
      ref={playerRef}
    ></video>
  );
}
