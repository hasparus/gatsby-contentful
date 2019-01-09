// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'docz-plugin-css';

export default {
  plugins: [
    css({
      preprocessor: 'sass',
      cssmodules: true,
      loaderOpts: {
        /* whatever your preprocessor loader accept */
      },
    }),
  ],
};
