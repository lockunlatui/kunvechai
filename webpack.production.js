const merge = require("webpack-merge");
const common = require("./webpack.common");
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require("webpack");

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
    new TerserPlugin({
      chunkFilter: (chunk) => {
        if (chunk.name === 'vendor') {
          return false;
        }
        return true;
      },
      cache: true,
      terserOptions: {
        output: {
          comments: false,
        },
        compress: {
          drop_console: true,
        },
      },
      extractComments: false,
     })
  ]
})
