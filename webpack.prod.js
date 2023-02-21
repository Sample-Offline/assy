const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const pkg = require('./package.json');
// import { name as _name, version, displayName } from './package.json' assert { type: "json" };

module.exports = {
  name: 'production',
  mode: 'production',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
  rules: [
    {
      test: /\.ts?$/,
      use: {
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.production.json'
        }
      },
      exclude: /node_modules/,
    },
  ],
  },
  resolve: {
  extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: pkg.name + '-' + pkg.version + '.js',
    path: path.resolve(__dirname, 'dist', 'production'),
  clean: true,
  },
  plugins: [
  new HtmlWebpackPlugin({
    title: pkg.displayName,
    template: 'src/templates/index.ejs',
    showErrors: false,
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: './LICENSES.txt',
        to: path.resolve(__dirname, 'dist', 'production'),
      }
    ]
  }),
  ],
};
