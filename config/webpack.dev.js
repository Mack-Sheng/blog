const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackcommon = require('./webpack.common');

module.exports = merge(webpackcommon, {
    mode: 'development',
    devServer: {
        contentBase: '../dist',
        open: true,
        port: 8081,
        hot: true,
        hotOnly: true,
        historyApiFallback: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: 'cheap-module-eval-source-map',
});
