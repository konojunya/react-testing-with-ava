var webpack = require("webpack")
var path = require("path")
 
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: __dirname + "/src/app.js",
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js',
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        query: {
          presets: ["es2015","react"]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false }),
  ]
};