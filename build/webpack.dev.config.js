const path = require('path');
const baseconfig = require('./webpack.base.config.js');

const {merge} = require('webpack-merge');


module.exports = merge(baseconfig,{
  mode: 'development',
  devtool: 'source-map' ,
  resolve: {
    alias: {
      'react': path.resolve(__dirname, '../node_modules/react/umd/react.development.js')
    }
  },
  devServer: {
    contentBase: './dist',
    inline: true,
    hot: true
  }
});
  