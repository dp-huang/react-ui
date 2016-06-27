var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/app.jsx'),
    vendors: ['webpack-dev-server/client?http://localhost:3005', 'webpack/hot/only-dev-server']
  },
  debug: true,
  devtool: 'eval-source-map',
  output: { 
    path: path.join(__dirname, 'dist'), 
    publicPath: '/dist/',
    filename: 'bundle.js' 
  },
  serverConfig: {
    port: '3005',// server port
    publicPath: '/dist/',// js path
    contentBase: './'//web root path
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel?{presets:["es2015","stage-0","react"]}'
        ]
      }, 
      {
        test: /\.css$/, loader: 'style-loader!css-loader'
      }
    ]
  },
  externals: {
    'Config': {'host': 'http://localhost:8080'}
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
