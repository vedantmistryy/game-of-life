const fs  = require("fs");
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const entries = (() => {
  const tsExtRegExp = new RegExp('.ts$', 'g');
  const rootDirectory = './src/life';
  const rootDirectoryRegExp = new RegExp(`^${rootDirectory}/`, 'g');
  const createEntry = (directory) => {
    return fs.readdirSync(directory).reduce((obj, name) => {
      const path = `${directory}/${name}`;
      if (tsExtRegExp.test(name)) {
        obj[path.replace(rootDirectoryRegExp, '').replace(tsExtRegExp, '')] = path;
      } else {
        obj = {
          ...obj,
          ...createEntry(path),
        };
      }
      return obj;
    }, {});
  };
  return createEntry(rootDirectory);
})();

const baseHTMLConfig = {
  minify: {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    removeComments: true
  },
};

module.exports = (env, arg) => {
  const config = {
    entry: entries,
    optimization: {
      splitChunks: {
        cacheGroups: {
          common: {
            name: 'common',
            minChunks: 3,
            chunks: 'all',
            enforce: true,
          }
        },
      },
    },
    output: {
      path: path.join(process.cwd(), "docs"),
      filename: "[name].[chunkhash].js",
      crossOriginLoading: false
    },
    resolve: {
      extensions: [".js", ".ts"],
      plugins: [new TsconfigPathsPlugin()]
    },
    module: {
      rules: [{
        test: /\.ts$/,
        loader: "ts-loader"
      }, {
        test: /\.(css|gif)$/,
        loader: "file-loader"
      }]
    },
    plugins: Object.keys(entries).map((entry) => (
      new HtmlWebpackPlugin({
        ...baseHTMLConfig,
        filename: `${entry}.html`,
        template: "./src/template/life.js",
        templateParameters: { entry },
        chunks: [entry]
      })
    )).concat(
      new HtmlWebpackPlugin({
        ...baseHTMLConfig,
        filename: `index.html`,
        template: "./src/template/index.js",
        templateParameters: { entries },
        chunks: []
      })
    ),
    devServer: {
      port: 4200,
      historyApiFallback: true
    },
  };

  if (arg.mode === "production") {
    config.plugins = config.plugins.concat([
      new CleanWebpackPlugin()
    ]);
  }

  return config;
};
