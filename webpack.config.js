var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.pug'
  })],
  module: {
    rules: [
      {
        test: /\.pug$/, use: 'pug-loader'
      },
      { test: /\.js$/, use: "babel-loader" }
    ]
  }
};

//TODO - path context, separate lib.js and app.js, .favicon, fonts, assets, sass