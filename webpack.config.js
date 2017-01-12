var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  
  entry: {
    app: PATHS.app
  },

  output: {
    path: PATHS.build,
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'] // allow imports without an extension
  },

  devServer: {
    hot: true,
    inline: true,
    stats: 'errors-only'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass'),
        include: PATHS.app
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin({
        multiStep: true
      }), // this is a default setting that is useful maybe?
    new ExtractTextPlugin('[name].css')
  ]
};