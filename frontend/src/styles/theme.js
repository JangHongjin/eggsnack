import palettes, { gray as grays } from 'styles/palette';

export default {
  // For `styled-components-breakpoint`
  breakpoints: {
    // targeting all devices
    mobile: 0,
    // targeting devices that are LARGER than the iPhone 6 Plus
    // (which is 736px in landscape mode)
    tablet: 737,
    // targeting devices that are LARGER than the iPad
    // (which is 1024px in landscape mode)
    desktop: 1025,
  },
  // For `styled-components-spacing`
  spacing: {
    [-8]: '-128px',
    [-7]: '-64px',
    [-6]: '-48px',
    [-5]: '-32px',
    [-4]: '-20px',
    [-3]: '-16px',
    [-2]: '-8px',
    [-1]: '-4px',
    0: '0', // none
    1: '4px', // extra-tight
    2: '8px', // tight
    3: '16px', // base
    4: '20px', // loose
    5: '32px', // extra-loose
    6: '48px',
    7: '64px',
    8: '128px',
  },
  spacingSets: {
    container: { mobile: 3, tablet: 4, desktop: 5 },
    containerReverse: { mobile: -3, tablet: -4, desktop: -5 },
    default: { mobile: 3, tablet: 4 },
    defaultReverse: { mobile: -3, tablet: -4 },
  },
  // Application-specific
  colors: {
    black: '#000000',
    white: '#ffffff',
    gray0: grays[0],
    gray1: grays[1],
    gray2: grays[2],
    gray3: grays[3],
    gray4: grays[4],
    gray5: grays[5],
    gray6: grays[6],
    gray7: grays[7],
    textLight: grays[5],
    textDark: grays[7],
    primary: '#4285FB',
    secondary: '#181E63',
    accent: '#2555B6',
    success: '#44A28C',
    warning: '#F49342',
    warningBg: '#FEF9EF',
    danger: '#DE3618',
    dangerBg: '#FBEAE5',
    link: '#007ACE',
  },
  containerWidth: '1340px',
  palettes,
  zIndexes: {
    0: 1, // relative z-index
    1: 100, // SideSlider
    2: 200, // Fixed bottom bar
    3: 300,
    4: 400,
    5: 500, // Pane
    6: 600, // Modal backdrop
    7: 700,
    8: 800,
    9: 900,
    10: 1000,
  },
  fontWeights: {
    default: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
  displayValueFontSizes: {
    extraLarge: '60px',
    largest: '48px',
    larger: '40px',
    large: '32px',
    default: '24px',
    small: '20px',
  },
  fontSizes: {
    pageTitle: '60px', // H1
    pageSubtitle: '48px', // H2
    title: '40px', // H3
    subtitle: '32px', // H4
    heading: '24px', // H5
    subheading: '20px', // H6

    largest: '24px',
    larger: '20px',
    large: '16px', // Body1
    default: '14px', // Body2
    small: '12px', // Caption1
    smaller: '11px', // Caption2
    smallest: '10px', // Caption3
  },
};
