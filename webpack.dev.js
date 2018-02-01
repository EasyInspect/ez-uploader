const merge             = require('webpack-merge');
const common            = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: false
                        }
                    }, {
                        loader: 'postcss-loader'
                    }, {
                        loader: 'sass-loader'
                    }]
                })
            }
        ]
    },
    watchOptions: {
        ignored: /node_modules/
    }
});