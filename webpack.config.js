const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  output: {
    publicPath: isDevelopment
      ? "http://localhost:8080/"
      : "http://preact-green.vercel.app/",
    path: path.resolve(__dirname, "build"),
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "starter",
      library: { type: "var", name: "starter" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Header": "./src/Header",
      },
      shared: require("./package.json").dependencies,
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
