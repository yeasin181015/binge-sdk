import type { PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // Keep default breakpoints
    sm: true;
    md: true;
    xlg: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

const breakPoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xlg: 1400,
    xl: 1536,
    xxl: 1920,
    xxxl: 2560,
  },
};

const PRIMARY = {
  // light: "#B8B8B8",
  main: "#141414",
  dark: "#0E0A0A",
};

const SECONDARY = {
  light: "#808080",
  main: "#E50914",
  dark: "#C11119",
};

const GREY = {
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#B0B0B080",
  900: "#161C24",
  1000: "#484c4f80",
  1100: "#b3b3b3",
  1200: "#d8d8d8",
  1300: "#bcbcbc",
  1400: "#e5e5e5",
  1500: "#a0b3b0",
  1600: "#dcdcdc",
  1700: "#0000007F",
  1800: "#dadde9",
  1900: "#3D3D3D",
  2000: "#202020",
};

const WHITE = {
  25: "#FFFFFF25",
  75: "#FFFFFF75",
  50: "#FFFFFF50",
  55: "#FFFFFF55",
  70: "#FFFFFF70",
  80: "#FFFFFF80",
  100: "#FFFFFF",
};

const COMMON = {
  common: {
    black: "#000",
    //  white: "#fff"
  },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  // white:{...WHITE, contrastText:"#DE2537"},
  grey: GREY,
  action: {
    active: GREY[500],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  ...COMMON,
  text: { primary: "#fff", secondary: "#d8d8d8", disabled: GREY[600] },
  background: { default: PRIMARY.main, paper: PRIMARY.main },
  mode: "dark" as PaletteMode,
  breakpoints: breakPoints,
  typography: {
    fontFamily: [
      'Manrope !important',
      'sans-serif',
    ].join(','),
 }
};

export default palette;
