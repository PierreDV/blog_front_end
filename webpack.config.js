const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
    port: '3000',
    historyApiFallback: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js','.jsx', '.json'],
    alias: {
      reducers: path.resolve(__dirname, './src/reducers')
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both are optional
      filename: "style.css"
    }),
    new webpack.DefinePlugin(envKeys)
  ]
};