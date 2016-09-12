'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
let extractCss = new ExtractTextPlugin('css/[name]-[hash:8].min.css');

module.exports = {
    devtool: 'eval-source-map',
    entry:{
        vendor: ['react', 'classnames', 'react-router', 'react-dom', 'react-redux', 'redux'],
        app:path.join(__dirname, 'src/modules/index.jsx')
    },
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'js/[name]-[hash:8].min.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx',".css",".less"]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),

        new HtmlWebpackPlugin({
            template: 'src/modules/index.tpl.html',
            inject: 'body',
            filename: 'index.html',
            minify: {
                removeComments: true,
            }
        }),
        extractCss,
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    //eslint: {
        //configFile: '.eslintrc',
        //failOnWarning: false,
        //failOnError: false
    //},
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
                test: /\.json?$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'url?limit=8000&name=img/[name]-[hash:8].[ext]'
            },
            {
                test: /\.less$/,
                loader: extractCss.extract('style-loader', 'css-loader!postcss-loader!less-loader')
            },
            {
                test: /\.css/,
                loader: extractCss.extract('style-loader', 'css-loader!postcss-loader')
            },
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&name=fonts/[name]-[hash:8].[ext]&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,          loader: 'url?limit=10000&name=fonts/[name]-[hash:8].[ext]&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,          loader: 'url?limit=10000&name=fonts/[name]-[hash:8].[ext]'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,          loader: 'url?limit=10000&name=fonts/[name]-[hash:8].[ext]&mimetype=image/svg+xml'}
        ]
    }
};
