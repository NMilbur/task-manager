import { createTheme } from "@mui/material";

export const COLORS = {
  primary: "#6bbc49",
};

export const THEME = createTheme({
  palette: {
    background: {
      default: "#DEDEDE",
    },
    primary: {
      main: COLORS.primary,
    },
  },
});
