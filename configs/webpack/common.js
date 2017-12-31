// shared config (dev and prod)
const {resolve} = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CSSWebpackPluginConfig = new ExtractTextPlugin('application.css');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /styles\/.*\.css$/,
        exclude: /build|node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1
              }
            },
            {loader: 'postcss-loader', options: {sourceMap: true}}
          ]
        })
      },
      {
        test: /node_modules\/.*\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1
              }
            },
            {loader: 'postcss-loader', options: {sourceMap: true}}
          ]
        })
      },
      {
        test: /\.css$/,
        exclude: /(build|node_modules|src\/styles)\//,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                // minimize: env.NODE_ENV === 'production',
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                camelCase: true,
                localIdentName: '[path][local]-[hash:base64:5]'
              }
            },
            {loader: 'postcss-loader', options: {sourceMap: true}}
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  plugins: [
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({template: 'index.html',}),
    CSSWebpackPluginConfig
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  performance: {
    hints: false,
  },
};
