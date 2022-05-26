import { DefaultTheme } from "styled-components";

const appTheme: DefaultTheme = {
  colors: {
      nav: {
          backgroundColor:"rgba(0, 0, 0, 0.83)",
      },
    primary: {
      main: "#80D0C2",
    },
    secondary: {
      main: "#EF9C4B",
      dark: "#FD8030",
    },
    text: {
      main: "#848080",
      secondary: "#FFFFFF",
    },
    background: {
      primary: "rgba(128, 208, 194, 0.1)",
      secondary: "#F9F9F9",
    }
  },
  input: {
    borderRadius: "10px",
    backgroundColor: {
      primary: "#F8F8F8",
      secondary: 'rgba(239, 223, 75, .23)',
    },
    opacity: 0.4,
  },

};

export { appTheme };
