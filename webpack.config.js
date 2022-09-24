const path = require("path");

// ! Webpack configuration object
module.exports = {
  //! entry point for bundling
  entry: "./src/index.js",

  //! output for the bundled script
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  // ! development server configuration and asset needed for serving
  devServer: {
    // ! source file
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },

  // ! wepback loaders and styling modules
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // ! current mode
  mode: "production",
};
