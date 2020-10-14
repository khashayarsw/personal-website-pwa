const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const WebpackMonitor = require("webpack-monitor");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = function (_env, argv) {
  return {
    mode: argv.mode,
    entry: "./src/index.js",
    devtool: argv.mode === "development" ? "eval-source-map" : "",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "public/js/[name].[contenthash:8].js",
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName:
                argv.mode === "production" ? "production" : "development",
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            argv.mode === "production"
              ? MiniCssExtractPlugin.loader
              : "style-loader",
            "css-loader",
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          use: {
            loader: "url-loader",
            options: {
              limit: 15000,
              name: "public/img/[name].[hash:8].[ext]",
            },
          },
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          loader: require.resolve("file-loader"),
          options: {
            name: "public/fonts/[name].[hash:8].[ext]",
          },
        },
        {
          test: /\.s[ac]ss$/,
          use: [
            argv.mode === "production"
              ? MiniCssExtractPlugin.loader
              : "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
              },
            },
            "resolve-url-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    devServer: {
      port: 2030,
      historyApiFallback: true,
      overlay: true,
    },
    plugins: [
      argv.mode === "production" &&
        new MiniCssExtractPlugin({
          filename: "public/css/[name].[contenthash:8].css",
          chunkFilename: "public/css/[name].[contenthash:8].chunk.css",
        }),
      // argv.mode === "production" &&
      //   new WebpackMonitor({
      //     capture: true, // -> default 'true'
      //     target: "../monitor/myStatsStore.json", // default -> '../monitor/stats.json'
      //     launch: true, // -> default 'false'
      //     port: 3030, // default -> 8081
      //   }),
      // new webpack.DefinePlugin({
      //   "process.env.NODE_ENV": JSON.stringify(
      //     isProduction ? "production" : "development"
      //   ),
      // }),
      new HtmlWebpackPlugin({
        title: "Progressive Personal Website",
        template: "./index.html",
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
        },
      }),
      new WorkboxPlugin.GenerateSW({
        // these options encourage the ServiceWorkers to get in there fast
        // and not allow any straggling "old" SWs to hang around
        clientsClaim: true,
        skipWaiting: true,
      }),
      new CopyPlugin({
        patterns: [
          { from: "public/img/pwa", to: "public/img" },
          { from: "./manifest.json", to: "manifest.json" },
        ],
      }),
    ].filter(Boolean),
    optimization: {
      minimize: argv.mode === "production",
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            compress: {
              comparisons: false,
            },
            mangle: {
              safari10: true,
            },
            output: {
              comments: false,
              ascii_only: true,
            },
            warnings: false,
          },
        }),
        new OptimizeCssAssetsPlugin(),
      ],
      splitChunks: {
        chunks: "all",
        minSize: 0,
        maxInitialRequests: 20,
        maxAsyncRequests: 20,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name(module, chunks, cacheGroupKey) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `${cacheGroupKey}.${packageName.replace("@", "")}`;
            },
          },
          common: {
            minChunks: 2,
            priority: -10,
          },
        },
      },
      runtimeChunk: "single",
    },
  };
};
