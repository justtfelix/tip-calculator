export interface Theme {
  colors: {
    cyan: {
      strong: string;
      dark: string;
      darkGrayish: string;
      grayish: string;
      lightGrayish: string;
      extraLightGrayish: string;
    };
    white: string;
    cultured: string;
    crystal: string;
    orange: string;
    darkGreen: string;
  };
  fonts: {
    primary: string;
  };
}

export const defaultTheme = {
  colors: {
    cyan: {
      strong: "hsl(172, 67%, 45%)",
      dark: "hsl(183, 100%, 15%)",
      darkGrayish: "hsl(186, 14%, 43%)",
      grayish: "hsl(184, 14%, 56%)",
      lightGrayish: "hsl(185, 41%, 84%)",
      extraLightGrayish: "hsl(189, 41%, 97%)",
    },
    white: "hsl(0, 0%, 100%)",
    cultured: "hsla(185, 38%, 97%, 1)",
    crystal: "hsla(172, 61%, 77%, 1)",
    orange: "hsla(13, 70%, 61%, 1)",
    darkGreen: "hsla(183, 78%, 24%, 1)",
  },
  fonts: {
    primary: "Space Mono",
  }
}