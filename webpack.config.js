const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve('./src', 'index.js'),
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
    // proxy: {
    //   '/fonts/Commodore64.ttf': 'http://localhost:8000',
    //   '/api': 'http://localhost:8000'
    // }
    proxy: [
      {
        context: ['/api', '/socket.io', '/fonts'],
        target: 'http://localhost:8000'
      }
    ]
  }
};
