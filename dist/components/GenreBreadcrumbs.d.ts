import { BreadcrumbsProps } from "@mui/material/Breadcrumbs";
interface GenreBreadcrumbsProps extends BreadcrumbsProps {
    genres: string[];
}
export default function GenreBreadcrumbs({ genres, ...others }: GenreBreadcrumbsProps): import("react/jsx-runtime").JSX.Element;
export {};
