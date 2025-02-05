import { forwardRef } from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ButtonBase, {
  ButtonBaseProps,
} from "@mui/material/ButtonBase/ButtonBase";

const NetflixIconButton = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ children, sx, ...others }, ref) => {
    return (
      <ButtonBase
        sx={{
          color: "white",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "hsla(0,0%,100%,.5)",
          backgroundColor: "rgba(42,42,42,.6)",
          height: "40px",
          width: "40px",
          borderRadius: "50%",
          "&:hover, &:focus": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "#fff",
          },
          ...sx,
        }}
        {...others}
        ref={ref}
      >
        {children}
      </ButtonBase>
    );
  }
);

export default NetflixIconButton;
