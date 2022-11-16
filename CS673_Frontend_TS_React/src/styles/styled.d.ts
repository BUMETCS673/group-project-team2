import 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        nav :{
            backgroundColor: string;
    }
      primary: {
          main: string;
          translucent: string,
    }
      secondary: {
          main: string;
          dark: string;
      }
      text: {
          main: string;
          secondary: string;
          error: string;
      }
      button: {
        add: string,
        save: string,
      }
      background: {
        primary: string;
        secondary: {
          light: string;
          dark :string;
        }
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