import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ProductType, usePortal } from "./PortalProvider";
import VideoCardPortalDescription from "./VideoCardPortalDescription";
import VideoCardMedia from "./VideoCardMedia";

interface VideoCardModalProps {
  video: ProductType;
  anchorElement: HTMLElement;
}
export default function VideoCardModal({
  video,
  anchorElement,
}: VideoCardModalProps) {
  const setPortal = usePortal();
  const rect = anchorElement.getBoundingClientRect();

  return (
    <Card
      onMouseLeave={() => {
        setPortal(null, null);
      }}
      onPointerCancel={() => {
        setPortal(null, null);
      }}
      onScroll={() => {
        setPortal(null, null);
      }}
      sx={{
        width: rect.width * 1.4,
        cursor: "pointer",
        borderRadius: "6px",
        boxShadow: "rgba(0, 0, 0, 0.75) 0px 3px 10px",
        backgroundColor: "#181818 !important",
      }}
    >
      <CardContent
        sx={{
          padding: "unset",
          margin: "unset",
          backgroundColor: "#181818",
        }}
      >
        {/* <a href={`/playing-${video.content_type}/${video.id}`}>
          <VideoCardMedia video={video} />
        </a> */}
        <VideoCardPortalDescription video={video} />
      </CardContent>
    </Card>
  );
}
