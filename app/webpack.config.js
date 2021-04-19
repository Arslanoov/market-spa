const path = require("path")

const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),

  output: {
    path: path.resolve(__dirname, "dist")
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },

      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.(s[ac]ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",

          {
            loader: "sass-resources-loader",
            options: {
              resources: ["./src/styles/bootstrap.scss"]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "main-[hash:8].css"
    })
  ]
};
