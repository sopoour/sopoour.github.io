export const colors = {
  primary: "rgba(232, 101, 56, 1)",
  primaryFaded: "rgba(232, 101, 56, 0.6)",
  primaryText: "rgba(255, 255, 239, 0.8)",
  secondary: "rgba(255, 255, 255, 1)",
  secondaryFaded: "rgba(255, 255, 239, 0.6)",
  secondayText: "rgba(232, 101, 56, 0.8)",
  textOnColor: "rgba(255, 255, 255, 1)",
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}


export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};