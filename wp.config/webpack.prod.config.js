/* eslint-disable */
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const devConfig = require('./webpack.dev.config');

const prodConfiguration = env => {
  return merge([
    {
      optimization: {
        minimizer: [new UglifyJsPlugin()],
      },
      plugins: [
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsPlugin()
      ],
    },
  ]);
}

module.exports = env => {
  return merge(
    devConfig(env),
    prodConfiguration(env)
  );
}
