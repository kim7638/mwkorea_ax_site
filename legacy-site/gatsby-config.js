const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  pathPrefix: '/mwk-home',
  siteMetadata: {
    title: 'Mobile Works Korea Site',
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [autoprefixer()],
        cssLoaderOptions: {
          camelCase: 'dashesOnly',
        },
      },
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-polyfill-io',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        assets: path.join(__dirname, 'src/assets'),
        datas: path.join(__dirname, 'src/datas'),
        utils: path.join(__dirname, 'src/utils'),
        store: path.join(__dirname, 'src/store'),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
