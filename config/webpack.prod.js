const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
module.exports = webpackMerge(commonConfig, {
  entry: {
    'react-bootstrap-xeditable': helpers.root('src') + '/index.js',
    'react-bootstrap-xeditable.min': helpers.root('src') + '/index.js',
  },
  devtool: 'source-map',
  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
    library: 'ReactBootstrapXEditable',
    libraryTarget: 'umd',
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
});
