'use strict';
const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path              = require('path');

const __API__ = JSON.stringify('http://localhost:10080/');

module.exports = {
    entry: './src/index_test.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "js/index.js"
    },

    devtool: 'inline-source-map',

    watchOptions: {
        aggregateTimeout: 50,
        poll: false,
        ignored: [ /node_modules/, "src/**/*.tsx", "src/**/*.ts", "src/**/*.scss", "src/**/*.css" ]
    },

    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                use: {
                    loader: 'worker-loader',
                    options: { inline: true, fallback: true }
                }
            },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: { name: 'fonts/[name].[ext]' }
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('styles/styles.[hash:8].css'),
        new webpack.DefinePlugin({__API__: __API__}),
        new webpack.ProvidePlugin({Promise: 'es6-promise'})
    ]
};
