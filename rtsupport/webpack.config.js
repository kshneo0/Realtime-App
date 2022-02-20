// webpack.config.js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  devServer: {
    port: 8080,
    static: {
      directory: __dirname,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
