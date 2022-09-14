const theme = {
  font: {
    family:
      "Roboto, --apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen,Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    tiny: {
      size: "12px",
      weight: "400",
      lineHeight: "12px",
    },
    small: {
      size: "14px",
      weight: "400",
      lineHeight: "14px",
    },
    medium: {
      size: "18px",
      weight: "normal",
      lineHeight: "20px",
    },
    large: {
      size: "32px",
      weight: "400",
      lineHeight: "32px",
    },
    title: {
      size: "24px",
      weight: "400",
      lineHeight: "28px",
    },
    inputs: {
      size: "18px",
      weight: "400",
      lineHeight: "normal",
    },
  },
  colors: {
    black: "rgba(0,0,0,1)",
    activeBlue: "rgba(55,135,255,1)",
    grayWhite: "rgba(255,255,255,0.3)",
    greyLabel: "rgba(149,149,153,1)",
    greyWeb: "rgba(123,123,123,1)",
    grayHover: "rgba(37,37,37,1)",
    skeleton: "rgba(74, 74, 81, 1)",
    transparentWhite: "rgba(255,255,255,0.5)",
    white: "rgba(255,255,255,1)",
    red: "rgba(255,0,0,1)",
  },
  breakpoints: {
    mobileFoldMax: `(max-width: 280px)`,
    mobileSmMax: `(max-width: 320px)`,
    mobileS: `(min-width: 320px)`,
    mobileM: `(min-width: 375px)`,
    mobileL: `(min-width: 425px)`,
    mobileLgMax: `(max-width: 425px)`,
    mobileMax: `(max-width: 540px)`,
    tablet: `(min-width: 769px)`,
    tabletMax: `(max-width: 769px)`,
    laptopMax: `(max-width: 1024px)`,
    laptop: `(min-width: 1025px)`,
    laptopL: `(min-width: 1440px)`,
    desktop: `(min-width: 2560px)`,
    desktopL: `(min-width: 2560px)`,
  },
};

export { theme };
