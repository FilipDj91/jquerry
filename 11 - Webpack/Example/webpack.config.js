const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // javascript - main file koji je polazišna točka našeg bundlera
  entry: "./src/index.js",
  // output - naš glavni BUNDLANI file - bundle.min.js
  output: {
    filename: "bundle.min.js",
    path: path.join(__dirname, "public"),
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //kreira style node od JS stringova
          "css-loader", //Prevodi CSS jezik u JS
          "sass-loader", //Kompajla SASS u CSS
        ],
      },
    ],
  },

  // Konfiguracija za LOKALNI DEV SERVER
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3030,
  },
  // Plugin koji će kopirati index.html i zalijepiti ga u public/index.html - filename je ime file-a, template je index.html
  // koji kopiramo
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
  ],
  mode: "development",
};
