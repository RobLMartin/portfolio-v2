import { createTheme, styled } from "@mui/material/styles";

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      secondary: "#6d6d6d",
      primary: "#282c34",
    },
  },
  typography: {
    h1: {
      fontSize: 60,
      fontWeight: 700,
      lineHeight: 1.15,
    },
    h2: {
      fontSize: 35,
      fontWeight: 600,
      marginTop: 40,
    },
    h3: {
      fontSize: 35,
      fontWeight: 300,
      marginTop: 80,
    },
    h4: {
      fontSize: 30,
      fontWeight: 600,
      marginTop: 80,
    },
    subtitle1: {
      fontSize: 24,
      fontWeight: 300,
      lineHeight: 1.7,
      color: "#6d6d6d",
      marginTop: 50,
    },
    fontWeightLight: 300,
    body1: {
      marginTop: 30,
      fontSize: 17,
      lineHeight: 1.7,
      maxWidth: "42em",
    },
    body2: {
      fontSize: 16,
      color: "#1a1a1a",
      maxWidth: "42em",
    },
    caption: {
      fontSize: 17,
      fontStyle: "italic",
      lineHeight: 1.7,
      maxWidth: "42em",
    },
  },
};

export default createTheme(themeOptions);
