/**
 * Webpack config common to all
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = function(options) {
    return {
        entry: './client/index.jsx',
        devtool: options.devtool || false,
        output: {
            path: path.join(__dirname, 'dist', 'client'), // needs to be absolute
            publicPath: '/',
            filename: 'bundle.js'
        },
        plugins: (options.plugins || []).concat([
            new HtmlWebpackPlugin({
                template: 'client/index.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
                },
            }),
            new ExtractTextPlugin('[name].[contenthash].css'),
        ]),
        module: {
            loaders: (options.loaders || []).concat([{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: 'babel'
            }])
        },
        devServer: options.devServer || { // mute dev server info
            stats: {
                children: false,
                chunks: false
            }
        }
    }
}
