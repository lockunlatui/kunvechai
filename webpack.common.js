const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "none",
  entry: {
    main:"./src/index.js",
    "firebase-messaging-sw": "./src/firebase/firebase-messaging-sw.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ["file-loader"]
      },
      {
        test: /favicon\.ico$/,
        loader: "url",
        query: {
          limit: 1,
          name: "[name].[ext]"
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      "@kun-containers": path.resolve(__dirname, 'src/containers'),
      "@kun-firebase": path.resolve(__dirname, 'src/firebase'),
      "@kun-redux": path.resolve(__dirname, 'src/reduxs'),
      "@kun-assets": path.resolve(__dirname, 'src/assets'),
      "@kun-utils": path.resolve(__dirname, 'src/utils'),
      "@kun-constants": path.resolve(__dirname, 'src/constants'),
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./src/assets/images/favicon.png"
    }),
    new CleanWebpackPlugin()
  ]
};
