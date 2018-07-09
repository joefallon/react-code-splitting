'use strict';
const webpack        = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge          = require('webpack-merge');
const common         = require('./webpack.base.js');

const __API__ = JSON.stringify('http://localhost:10080/');

const NODE_ENV = {
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
};

module.exports = merge(common, {

    mode: 'production',

    plugins: [
        new UglifyJSPlugin({ }),
        new webpack.DefinePlugin(NODE_ENV),
        new webpack.DefinePlugin({__API__: __API__})
    ]
});