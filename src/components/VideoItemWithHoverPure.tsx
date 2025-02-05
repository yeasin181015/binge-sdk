import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "./Image";
import LiveBadge from "./LiveBadge";
import SonyBadge from "./SonyBadge";
import Badge from "./Badge";

type VideoItemWithHoverPureType = {
  src: string;
  innerRef: React.ForwardedRef<HTMLDivElement>;
  handleHover: (value: boolean) => void;
  premium: number;
  isTvod?: boolean;
  isSony?: boolean;
  isLive?: boolean;
  tile?: number;
  onClick: () => void;
};

class VideoItemWithHoverPure extends React.PureComponent<VideoItemWithHoverPureType> {
  render() {
    return (
      <Paper
        ref={this.props.innerRef}
        sx={{
          zIndex: 9,
          cursor: "pointer",
          borderRadius: this.props.tile == 5 ? 5 : 0.5,
          width: "100%",
          position: "relative",
          aspectRatio: this.props.tile == 5 ? "26/37" : "16/9",
          // paddingTop: "calc(9 / 16 * 100%)",
          // paddingTop: "calc(16 / 9 * 100%)",
        }}
        onClick={this.props.onClick}
        onMouseEnter={() => {
          this.props.handleHover(true);
        }}
        onMouseLeave={() => {
          this.props.handleHover(false);
        }}
        onPointerCancel={() => {
          this.props.handleHover(false);
        }}
      >
        {this.props.isTvod ? (
          <div
            style={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              justifyContent: "space-between",
              top: 6,
              paddingRight: 6,
            }}
          >
            <Badge tag="Rent" />
            {this.props.isLive && <LiveBadge />}
          </div>
        ) : (
          (this.props.isSony && (
            <div
              style={{
                position: "relative",
                zIndex: 10,
                display: "flex",
                justifyContent: "space-between",
                // top: 5,
                padding: 6,
              }}
            >
              <SonyBadge />
              {this.props.isLive && <LiveBadge />}
            </div>
          )) ||
          (this.props.premium === 2 && (
            <div
              style={{
                position: "relative",
                zIndex: 10,
                display: "flex",
                justifyContent: "space-between",
                top: 6,
                paddingRight: 6,
              }}
            >
              <Badge />
              {this.props.isLive && <LiveBadge />}
            </div>
          ))
        )}

        <Image
          path={this.props.src}
          sx={{
            top: 0,
            width: "100%",
            height: "100%",
            aspectRatio: this.props.tile == 5 ? "26/37" : "16/9",
            objectFit: "contain",
            position: "absolute",
            borderRadius: this.props.tile == 5 ? 2 : 0.5,
          }}
        />
      </Paper>
    );
  }
}

export default React.forwardRef<
  HTMLDivElement,
  Omit<VideoItemWithHoverPureType, "innerRef">
>((props, ref) => <VideoItemWithHoverPure {...props} innerRef={ref} />);
