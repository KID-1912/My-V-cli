const path = require('path');
const webpack = require('webpack');

// 插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


  const glob = require('glob');   // glob包用于匹配文件
  function getEntry(){
      let entry = {};
      glob.sync('./src/pages/*/index.js')
      .forEach(filepath => {
          let chunkName = filepath.match(/pages\/(.+)\/index\.js/)[1];
          entry[chunkName] = filepath;
      });
      console.log(entry);
      return entry;
  }

  let templates = [];
  glob.sync('./src/pages/*/*.html')
  .forEach(filepath => {
      filepath.match(/pages\/(.+)\/index\.html/);
      let chunk = RegExp.$1;
      let name = `${chunk}.html`;
      templates.push(new HtmlWebpackPlugin({
          publicPath: name ==  'index.html' ? '' : '../',
          filename: name ==  'index.html' ? name : './pages/' + name,
          template: filepath,
          chunks: [chunk],
          inject: 'body'
      }))
  });
  module.exports = {
    // entry: {
    //   index: './src/pages/index/index.js',
    //   reactPage: './src/pages/reactPage/index.js',
    //   vuePage: './src/pages/vuePage/index.js'
    // },
    entry: getEntry(),
    output: {
        publicPath: '',
        path: path.resolve(__dirname,'../dist'),
        chunkFilename: 'chunk-[id].js',
        filename: './js/[name].[chunkhash:8].js',
    },
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname,'../src/assets/'),
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.html$/,
          use: 'html-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader',
          'css-loader','postcss-loader']
        },
        {
          test: /\.s[ac]ss$/,
          use: ['style-loader',
          'css-loader','postcss-loader','sass-loader',
          ],
        },
        {
          test: /\.js$/,
          include: /src/,
          use: 'babel-loader'
        },
        {
          test: /\.(png|gif|jpe?g|eot|ttf|svg|woff2?)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 1024 * 1,
              falllback: 'file-loader',
              name: './img/[name]-[contenthash:8].[ext]'
            }
          }
        }
      ],
      // noParse: [/react\.\w+\.min\.js$/],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      // new HtmlWebpackPlugin({
      //   filename: 'index.html',
      //   template: './src/pages/index/index.html',
      //   chunks: ['index']
      // }),
      // new HtmlWebpackPlugin({
      //   filename: 'reactPage.html',
      //   template: './src/pages/reactPage/index.html',
      //   chunks: ['reactPage']
      // }),
      // new HtmlWebpackPlugin({
      //   filename: 'vuePage.html',
      //   template: './src/pages/vuePage/index.html',
      //   chunks: ['vuePage']
      // }),
      ...templates,
      new VueLoaderPlugin(),
    ]
  }
// }

