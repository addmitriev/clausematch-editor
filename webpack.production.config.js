'use strict';
const path = require('path');
const webpack = require('webpack');
const loaders = require('./webpack.production.loaders');
const plugins = require('./webpack.production.plugins');

module.exports = {
  context: path.resolve(path.join(__dirname, 'app')),
  entry: {
    app: path.resolve(path.join(__dirname, 'app', 'index.js'))
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[chunkhash].[name].bundle.js'
  },
  plugins: plugins,
  module: {
    rules: loaders
  }
};
