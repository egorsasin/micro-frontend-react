const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const dependencies = require('./package.json').dependencies;

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        /* The following line to ask babel 
             to compile any file with extension
             .js */
        test: /\.js?$/,
        /* exclude node_modules directory from babel. 
            Babel will not compile any files in this directory*/
        exclude: /node_modules/,
        // To Use babel Loader
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
            '@babel/preset-react',
          ], // to compile react to ES5
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        mf1: 'micro1@http://localhost:8081/remoteEntry.js',
        mf2: 'micro2@http://localhost:8082/remoteEntry.js',
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
