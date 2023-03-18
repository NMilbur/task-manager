import { createTheme } from "@mui/material";

export const COLORS = {
  primary: "#89d16b",
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
