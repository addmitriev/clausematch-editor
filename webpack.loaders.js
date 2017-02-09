'use strict';
const path = require('path');

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
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader', },
      { loader: 'postcss-loader' }
    ]
  }
];

module.exports = loaders;