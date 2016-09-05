'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3005',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname, 'src/modules/index.jsx')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx',".css",".less"]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'src/modules/index.tpl.html',
          inject: 'body',
          filename: 'index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    //eslint: {
        //configFile: '.eslintrc',
        //failOnWarning: false,
        //failOnError: false
    //},
    postcss: [autoprefixer],
    module: {
        //preLoaders: [
        //    {
        //        test: /\.js$/,
        //        exclude: /node_modules/,
        //        loader: 'eslint'
        //    }
        //],
        loaders: [
            {
                test: /\.js[x]?$/,
                include: [
                    path.join(__dirname, '/src/'),
                    path.join(__dirname, '/node_modules/react-icons/'),
                ],
                loader: 'babel'
            },
            {
                test: /\.less$/,
                loader: 'style!css!postcss!less'
            },
            {
                test: /\.css/,
                loader:'style!css!postcss'                
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'url?limit=25000&name=img/[hash:8].[name].[ext]'
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}

        ]
    }
};
