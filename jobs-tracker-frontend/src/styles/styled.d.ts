import 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        nav :{
            backgroundColor: string;
    }
      primary: {
          main: string;
    }
      secondary: {
          main: string;
          dark: string;
      }
      text: {
          main: string;
          secondary: string;
      }
      background: {
        primary: string;
        secondary: string;
      }
    
    }
    input: {
        borderRadius: string;
        backgroundColor: {
            primary: string;
            secondary: string;

        },
        opacity: number;
    }
   
  }
}