const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

const ruleForStyles = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

const rulesForJavascript = {
  test: /\.(js|jsx)$/,
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
  },
};


const rules = [rulesForJavascript, ruleForStyles]

module.exports = (argv) => {

  const {mode} = argv;
  const isProduction = mode === "production";

  return {

    entry: "./src/index.js",
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build"),
    }, 
    plugins: [
      new HtmlWebpackPlugin({template: "src/index.html"}),
      new ErrorOverlayPlugin()
    ],
    module: { rules },
    devServer: {
      open: true, // abre el navegdor
      port: 3000,
      compress: true // comprime con gzip
    },
    devtool: "source-map",
    resolve: {
      extensions: [".js", ".css", ".jsx"]
    },
  };
};