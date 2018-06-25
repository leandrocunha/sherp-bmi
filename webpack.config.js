const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    historyApiFallback: true
  },
  devtool: 'inline-source-map',
  entry: './src/app.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'stage-0']
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader' // inject CSS to page
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS modules
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function() {
                // post css plugins, can be exported to postcss.config.js
                return [require('precss'), require('autoprefixer')];
              }
            }
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(svg)/,
        use: {
          loader: 'svg-url-loader'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/templates/index.html',
      title: 'Meet Sherpa'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jQuery',
      'windows.jQuery': 'jquery'
    })
  ]
};
