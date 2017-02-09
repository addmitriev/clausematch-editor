'use strict';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const loaders = [
  {
    test: /\.js$/,
    loader: 'babel-loader',
    query: {
      presets: [
        'es2015'
      ],
      plugins: []
    },
    include: [
      path.resolve(__dirname, 'app')
    ]
  },
  {
    test: /\.html$/,
    loader: 'html-loader'
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        { loader: 'css-loader', },
        { loader: 'postcss-loader' }
      ]
    })
  }
];

module.exports = loaders;