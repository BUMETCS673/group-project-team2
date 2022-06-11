import { DefaultTheme } from "styled-components";

const appTheme: DefaultTheme = {
  colors: {
      nav: {
          backgroundColor:"rgba(0, 0, 0, 0.83)", //translucent black
      },
    primary: {
      main: "#80D0C2", //aquagreen
      translucent: "rgba(128, 208, 194, 0.1)", //translucent aquagreen
    },
    secondary: {
      main: "#EF9C4B",
      dark: "#FD8030",
    },
    text: {
      main: "#848080", //gray
      secondary: "#FFFFFF", //white
    },
    button: {
      add: '#73D689', //green
      save: "#3DA8E4", //blue
    },
    background: {
      primary: "white",
      secondary: {
        light: "#F9F9F9", //light gray
        dark: "#dbdbdb", // darker gray
      },
    }
  },
  input: {
    borderRadius: "10px",
    backgroundColor: {
      primary: "#F8F8F8", // little grayish white
      secondary: 'rgba(239, 223, 75, .23)',
      
    },
    opacity: 0.4,
  },

};

export { appTheme };
