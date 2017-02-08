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
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          camelCase: true,
          localIdentName: '[path]__[local]--[hash:base64:5]'
        }
      },
      { loader: 'postcss-loader' }
    ]
  }
];

module.exports = loaders;