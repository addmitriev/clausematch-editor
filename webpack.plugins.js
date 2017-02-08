const webpack = require('webpack');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.HashedModuleIdsPlugin(),
  new WebpackChunkHash(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: '[chunkhash].vendor.js',
    minChunks: (module)=> {
      return module.context && module.context.includes('node_modules')
    },
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'runtime',
    filename: 'runtime.js',
    chunks: [ 'vendor' ],
    minChunks: Infinity
  }),
  new ChunkManifestPlugin({
    filename: "manifest.json",
    manifestVariable: "webpackManifest"
  }),
  new HtmlWebpackPlugin({
    template: 'index.html'
  })
];

module.exports = plugins;