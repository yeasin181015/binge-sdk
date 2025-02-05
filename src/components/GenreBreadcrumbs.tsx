import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs, { BreadcrumbsProps } from "@mui/material/Breadcrumbs";

const Separator = (
  <Box
    component="span"
    sx={{
      width: 4,
      height: 4,
      borderRadius: "50%",
      bgcolor: "#fff",
    }}
  />
);

interface GenreBreadcrumbsProps extends BreadcrumbsProps {
  genres: string[];
}

export default function GenreBreadcrumbs({
  genres,
  ...others
}: GenreBreadcrumbsProps) {
  return (
    <Breadcrumbs separator={Separator} {...others}>
      {genres.map((genre, idx) => (
        <Typography
          key={idx}
          sx={{
            color: "text.primary",
            wordBreak: "break-all",
            textTransform: "capitalize",
            fontSize: {
              xs: "10px",
              sm: "14px",
            },
          }}
        >
          {genre.toLowerCase() !== "na" &&
            genre.toLocaleLowerCase().replace("/", " / ")}
        </Typography>
      ))}
    </Breadcrumbs>
  );
}
