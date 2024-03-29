const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const pkg = require('./package.json');
// import { name as _name, version, displayName } from './package.json' assert { type: "json" };

module.exports = {
  name: 'development',
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
  rules: [
    {
      test: /\.ts?$/,
      use: {
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.development.json'
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
    filename: pkg.name + '-' + pkg.version + '-dev' + '.js',
    path: path.resolve(__dirname,'dist','development'),
  clean: false,
  },
  plugins: [
  new HtmlWebpackPlugin({
    title: pkg.displayName + ' Build: ' + pkg.version,
    appName: pkg.name,
    template: './src/templates/index.ejs',
    showErrors: true,
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: './LICENSES.txt',
        to: path.resolve(__dirname, 'dist', 'development'),
      },
      // {
      //   from: './src/styles/style.css',
      //   to: path.resolve(__dirname, 'dist', 'development'),
      // }
    ]
  }),
  ],
};
