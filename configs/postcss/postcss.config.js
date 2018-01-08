module.exports = {
  sourceMap: true,
  browsers: ['ie >= 10', 'last 3 versions'],
  plugins: {
    // 'postcss-import': {},
    'postcss-cssnext': {
      features: {
        customProperties: {
          strict: true,
          variables: {
            wooticus: "blue",
          },
          warnings: false,
          appendVariables: 'computed',
          preserve: "computed"
        }
      }
    },
    // 'cssnano': {}
  }
};
