const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'public/dist')
};

module.exports = {
  devtool: 'source-map',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },
  entry: {
    app: PATHS.src,
    vendor: [
      'immutable',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux'
    ]
  },
  output: {
    path: PATHS.dist,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js',
    publicPath: '/public/dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader/url' },
          {
            loader: 'file-loader',
            options: { name: '[name].[hash].css' }
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' }
        ],
        include: PATHS.src
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader/url' },
          {
            loader: 'file-loader',
            options: { name: '[name].[hash].css' }
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ],
        include: PATHS.src
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          { loader: 'babel-loader' }
        ],
        include: PATHS.src
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      publicPath: '/public/dist/'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
};
