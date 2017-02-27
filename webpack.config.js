const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// process.traceDeprecation = true // debug

const VENDOR_LIBS = ['react', 'react-dom'];

module.exports = {
  entry: {
    bundle: './src/index.jsx',
    vendor: VENDOR_LIBS
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'dist/'
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_module/,
        use: 'eslint-loader',
        test: /\.(jsx|js)$/
      },
      {
        use: 'babel-loader',
        test: /\.(jsx|js)$/,
        exclude: /node_modules/
      },
      {
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        }),
        test: /\.(css|scss)$/
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000,
              name: '[name].[ext]'
            }
          },
          'image-webpack-loader'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: {
          loader: 'file-loader',
          options: {name: '[name].[hash].[ext]'}
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
