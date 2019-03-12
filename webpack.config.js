const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve('./src', 'client/index.js'),
  output: { path: path.resolve(__dirname, 'build'), filename: 'bundle.js' },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.TTF$/,
        use: [
          {
            loader: 'ttf-loader',
            options: {
              name: './font/C64.ttf'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    publicPath: '/build',
    proxy: {
      '/fonts/Commodore64.ttf': 'http://localhost:3000'
    }
  }
};
