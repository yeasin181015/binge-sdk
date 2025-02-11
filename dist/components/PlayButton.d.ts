import { ButtonProps } from "@mui/material/Button";
type PlayButtonProps = ButtonProps & {
    contentId?: number;
    contentType?: string;
    handleOnClick?: () => void;
};
export default function PlayButton({ sx, contentId, contentType, handleOnClick, ...others }: PlayButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
