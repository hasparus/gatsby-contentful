import Typography from 'typography';
import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from 'typography-breakpoint-constants';

const theme = {
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  blockMarginBottom: 0.75,
  scaleRatio: 2.15,
  // eslint-disable-next-line no-unused-vars
  overrideStyles: ({ rhythm, scale }, options) => ({
    'h1,h2,h3,h4': {
      lineHeight: 1.2,
    },
    [TABLET_MEDIA_QUERY]: {
      html: {
        fontSize: `${(17 / 16) * 100}%`,
      },
    },
    [MOBILE_MEDIA_QUERY]: {
      html: {
        fontSize: '100%',
      },
    },
  }),
};

const typography = new Typography(theme);

export default typography;

export const {
  rhythm,
  scale,
  options,
} = typography;
