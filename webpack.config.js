const webpack = require('webpack')

module.exports = {
    entry: './main.js',
    output: {
        filename: 'dist.js',
        path: __dirname
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            }
        ]
    },
    externals: {
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    }
}
