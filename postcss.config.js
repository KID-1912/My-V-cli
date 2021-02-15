
module.exports = {
  plugins: [
    // require('postcss-cssnext'),
    require("autoprefixer")({
      overrideBrowserslist:[
          "defaults",
          "Android 4.1",
          "iOS 7.1",
          "Chrome>31",
          "ff>31",
          "ie>=8",
          "last 2 versions",
          ">0%"
          // 'last 2 version','>1%'
      ]
    })
  ]
}
