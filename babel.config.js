module.exports = {
  presets: [
    [ "@babel/preset-env",
      {
        modules: false,
        targets: {
          "chrome": "58",
          "ie": "11"
        },
        'useBuiltIns': "usage",
        "corejs": 3,
      }
    ],
    "@babel/preset-react"
  ]

}