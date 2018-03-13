'use strict';
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: {
        app: './src/index.js',
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: "js/[name].[chunkhash:6].js",
        chunkFilename: 'js/[name].[chunkhash:6].js'
    },
    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                use: {
                    loader: 'worker-loader',
                    options: { inline: true, fallback: false }
                }
            },
            { enforce: 'pre', test: /\.js$/, use: 'source-map-loader' },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file-loader',
                options: { name: '[path][name].[chunkhash:6].[ext]' }
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: { name: 'fonts/[name].[ext]' }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles/styles.[hash:6].css'),
        new CopyWebpackPlugin([ {from:'static/img',to:'img'} ]),
        new CopyWebpackPlugin([ {from:'static/fonts',to:'fonts'} ]),
        new CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
        new HtmlWebpackPlugin({ template: './static/index.html' })
    ]
};