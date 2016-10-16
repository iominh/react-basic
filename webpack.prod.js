const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = require('./webpack.base')({
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        })
    ],
    loaders: [{
        test: /\.css?$/,
        include: [
          path.join(__dirname, 'client')
        ],
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
            loader: 'css-loader'
        })
    }]
});
