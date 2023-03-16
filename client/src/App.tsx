import { CssBaseline, ThemeProvider } from "@mui/material";
import AppRoutes from "AppRoutes";
import { THEME } from "_constants/styles";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
