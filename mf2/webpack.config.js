const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const dependencies = require('./package.json').dependencies;

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'micro2',
      filename: 'remoteEntry.js',
      exposes: {
        './Wrapper': './src/components/Wrapper',
      },
      shared: {
        react: {
          singleton: true,
          version: dependencies['react'],
        },
        'react-dom': {
          singleton: true,
          version: dependencies['react-dom'],
        },
        'react-redux': {
          singleton: true,
          version: dependencies['react-redux'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
