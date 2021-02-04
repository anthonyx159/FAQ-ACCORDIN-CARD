const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        publicPath: 'http://localhost:9001/',
        path: path.resolve(__dirname,  '../dist'),//..dist indica que sube un nivel
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname,'../dist'),
        index: 'index.html',
        port: 9001,
        writeToDisk: true
    },
    module: {
        rules: [

            // {
            //     test: /\.css$/,
            //     use: [
            //             miniCssExtractPlugin.loader, 'css-loader'
            //             // options: {
            //             //     publicPath: ''
            //             // }
                    
            //     ]
            // },
            {
                test: /\.scss$/,
                use: [
                        miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                    
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(jpg|svg|png|gif|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[contenthash].[ext]',
                            outputPath: 'static',
                            useRelativePath: true
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            // minify: {
            //         collapseWhitespace: true,
            //         keepClosingSlash: true,
            //         removeComments: true,
            //         removeRedundantAttributes: true,
            //         removeScriptTypeAttributes: true,
            //         removeStyleLinkTypeAttributes: true,
            //         useShortDoctype: true
            // }
            minify: false
        }),
        new miniCssExtractPlugin({
            filename: 'css/[name].css' //cambia el nombre del dev en prod
        }),
    ]
}