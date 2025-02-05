import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import { devNull } from "os";
import NetflixIconButton from "./NetflixIconButton";
import PlayCircleIcon from "./PlayCircleIcon";
import { StyledToolTip } from "./StyledToolTip";
import GenreBreadcrumbs from "./GenreBreadcrumbs";

const formatMinuteToReadable = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  const hoursPart = h > 0 ? `${h}h` : "";
  const minutesPart = m > 0 ? `${m}m` : "";
  const secondsPart = s > 0 ? `${s}s` : "";
  const timeString = [hoursPart, minutesPart, secondsPart]
    .filter(Boolean)
    .join(" ");

  return timeString || "0s";
};

const VideoCardPortalDescription = ({ video }: { video: any }) => {
  return (
    <>
      <Box
        sx={{
          margin: "1rem",
          marginBottom: "0",
        }}
      >
        <Stack spacing={1}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={1}
            sx={{
              marginBottom: "8px",
            }}
          >
            <Stack direction="row" spacing={1}>
              <NetflixIconButton
                sx={{
                  p: 0,
                  bgcolor: "white",
                  width: "40px",
                  height: "40px",
                  borderColor: "#fff",
                  "&:hover": {
                    bgcolor: "#fff",
                  },
                }}
                onClick={() => {
                  window.location.href = `/playing-${video.content_type}/${video.id}`;
                }}
              >
                <PlayCircleIcon />
              </NetflixIconButton>
            </Stack>
            <StyledToolTip title="More Info" placement="top" arrow>
              <NetflixIconButton
                sx={{
                  "&:hover": {
                    borderColor: "#fff",
                  },
                }}
                onClick={() => {
                  //   setDetailType({
                  //     content_type: video.content_type,
                  //     id: video.id,
                  //     disposePlayer: false,
                  //   });
                }}
              >
                <ExpandMoreIcon />
              </NetflixIconButton>
            </StyledToolTip>
          </Stack>
          <Stack
            sx={{
              color: "#bcbcbc",
              fontSize: "14px",
            }}
            direction="row"
            spacing={1}
            alignItems="center"
          >
            {/* {video.maturity_level_id && (
              <AgeLimitChip ageId={video.maturity_level_id} />
            )} */}
            {video.duration != null && video.duration > 0 && (
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: "14px",
                }}
              >{`${formatMinuteToReadable(video.duration)}`}</Typography>
            )}
            {/* <QualityChip label="HD" /> */}
            {/* {video.avg_rating && <QualityChip label={video.avg_rating} />} */}
          </Stack>
          {video.genre && (
            <GenreBreadcrumbs
              genres={video.genre
                // .filter((genre) => video.genre_ids.includes(genre.id))
                .map((genre: { title: any }) => genre.title)}
            />
          )}
        </Stack>
      </Box>
    </>
  );
};

export default VideoCardPortalDescription;
