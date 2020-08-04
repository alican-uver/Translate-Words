const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env')
});

module.exports = {
  entry: ["@babel/polyfill", './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: 'bundle.js'
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: 'style-loader',
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed)
    }),
  ],
  devServer: {
    port: 3200,
    contentBase: path.join(__dirname, './bundles'),
    watchContentBase: true,
  },
  performance: {
    hints: false
  }
};



