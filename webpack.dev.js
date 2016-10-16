module.exports = require('./webpack.base')({
    devtool: 'eval',
    loaders: [
        {
            test: /\.css$/,
            exclude: /node_modules/,
            loaders: 'style-loader!css-loader'
        }
    ]
});
