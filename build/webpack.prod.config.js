const path = require('path');
const baseconfig = require('./webpack.base.config.js');

const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(baseconfig,{
  mode: 'production',
  devtool: false,
  resolve: {
    alias: {
      'react': path.resolve(__dirname, '../node_modules/react/umd/react.production.min.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader,
        'css-loader','postcss-loader']
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader,
        'css-loader','postcss-loader','sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: './css/[name].[contenthash:8].css'
    })
  ]
})