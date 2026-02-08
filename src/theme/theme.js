import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6C63FF", // Primary brand color (matches modern login UIs)
    },
    secondary: {
      main: "#00BFA6",
    },
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111827",
      secondary: "#6B7280",
    },
  },

  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif",
    h4: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },

  shape: {
    borderRadius: 8,
  },
});

export default theme;

