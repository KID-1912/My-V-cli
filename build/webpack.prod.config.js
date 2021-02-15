const path = require('path');
const baseconfig = require('./webpack.base.config.js');

const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

module.exports = merge(baseconfig,{
  mode: 'production',
  devtool: false,
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,
        'css-loader','postcss-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader,
        'css-loader','postcss-loader','sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: './css/[name].[contenthash:8].css'
    }),
    new ParallelUglifyPlugin({
      // 传递给 UglifyJS 的参数
      uglifyJS: {
        output: {
          beautify: false,
          comments: false,
        },
        compress: {
          drop_console: true,
          collapse_vars: true,
          reduce_vars: true,
        }
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    usedExports: true,
    "sideEffects": false
  },
})