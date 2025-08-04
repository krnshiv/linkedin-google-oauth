import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#0a66c2" },   // LinkedIn-style blue
    secondary: { main: "#0073b1" },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});
