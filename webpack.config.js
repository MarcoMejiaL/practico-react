const path = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports={
    entry:'./src/index.js',//archivo principal de entrada
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'boundle.js',        
    },
    mode: 'development',
    resolve: {
        extensions:['.js', '.jsx']
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",

                    
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebapckPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    
}