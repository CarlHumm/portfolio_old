module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 3,
      autoprefixer: {
        flexbox: 'no-2009',
      },
    }),
  ],
};