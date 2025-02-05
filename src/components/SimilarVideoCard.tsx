import { useState, useEffect } from "react";
import Image from "./Image";
import "./SimilarVideoCardStyle.css";
import { ProductType } from "./PortalProvider";
import { LOCAL_BASE_URL } from "./SlickSlider";

interface SimilarVideoCardProps {
  video: ProductType;
}

export default function SimilarVideoCard({ video }: SimilarVideoCardProps) {
  // const [baseUrl, setBaseUrl] = useState<string>(LOCAL_BASE_URL);
  //   async function fetchBaseUrl() {
  //     const base = await baseURL();
  //     setBaseUrl(base);
  //   }
  //   useEffect(() => {
  //     fetchBaseUrl();
  //   }, []);
  return (
    <a href={`/playing-${video.content_type}/${video.id}`}>
      <div
        className="similarTitleCard--container--container more-like-this-item"
        data-uia="similarTitleCard--container--container"
        role="button"
        style={{
          background: "#202020",
        }}
      >
        <div className="similarTitleCard--container-imageWrapper has-duration">
          <div className="ptrack-content">
            <Image
              sx={{
                width: "100%",
                aspectRatio: "16/9",
                objectFit: "contain",
                borderRadius: "4px",
              }}
              path={
                video.image_landscape ||
                video.image_portrait ||
                video.image_square ||
                video.thumb_path
              }
            />
          </div>
          <div className="similarTitleCard--container-playIcon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="similarTitleCard--container-playSVG ltr-4z3qvp e1svuwfo1"
              data-name="Play"
              aria-hidden="true"
            >
              <path
                d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          {/* <span className="duration ellipsized">{`${formatMinuteToReadable(video.duration)}`}</span> */}
        </div>
        <div></div>
      </div>
    </a>
  );
}
