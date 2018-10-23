const webpack = require('webpack');
const path = require('path');

let config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'output.js'
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules|build/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.resolve (__dirname, './public'),
    historyApiFallback: true,
    inline: true,
    open: true
  },
  devtool: 'eval-source-map'
}


module.exports = config;
