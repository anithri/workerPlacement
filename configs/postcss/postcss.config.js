module.exports = {
  plugins: {
    // 'postcss-import': {},
    'postcss-cssnext': {
      features: {
        customProperties: {
          variables: {
            wooticus: "green"
          },
          appendVariables: 'computed',
          preserve: "computed"
        }
      }
    },
    // 'cssnano': {}
  }
};
