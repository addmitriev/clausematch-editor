'use strict';
const path = require('path');
const webpack = require('webpack');
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

module.exports = {
  devtool: 'source-map',
  context: path.resolve(path.join(__dirname, 'app')),
  entry: {
    app: path.resolve(path.join(__dirname, 'app', 'index.js'))
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[chunkhash].[name].bundle.js'
  },
  devServer: {
    contentBase: path.resolve(path.join(__dirname, 'app')),
    hot: true
  },
  plugins: plugins,
  module: {
    rules: loaders
  }
};
