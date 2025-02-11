import type { PaletteMode } from "@mui/material";
declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        xlg: true;
        lg: true;
        xl: true;
        xxl: true;
    }
}
declare const palette: {
    text: {
        primary: string;
        secondary: string;
        disabled: string;
    };
    background: {
        default: string;
        paper: string;
    };
    mode: PaletteMode;
    breakpoints: {
        values: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xlg: number;
            xl: number;
            xxl: number;
            xxxl: number;
        };
    };
    typography: {
        fontFamily: string;
    };
    common: {
        black: string;
    };
    primary: {
        contrastText: string;
        main: string;
        dark: string;
    };
    secondary: {
        contrastText: string;
        light: string;
        main: string;
        dark: string;
    };
    grey: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        1000: string;
        1100: string;
        1200: string;
        1300: string;
        1400: string;
        1500: string;
        1600: string;
        1700: string;
        1800: string;
        1900: string;
        2000: string;
    };
    action: {
        active: string;
        hoverOpacity: number;
        disabledOpacity: number;
    };
};
export default palette;
