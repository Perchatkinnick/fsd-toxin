const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './scripts/index',
        authoriz: './scripts/authoriz',
        roomDetails: './scripts/room-details',
        searchRoom: './scripts/search-room',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            chunks: ['main'],
            //template: path.resolve(__dirname, 'src') + '/index.pug'
            template: './index.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'room-details.html',
            chunks: ['roomDetails'],
            //template: path.resolve(__dirname, 'src') + '/index.pug'
            template: './room-details.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'search-room.html',
            chunks: ['searchRoom'],
            //template: path.resolve(__dirname, 'src') + '/index.pug'
            template: './search-room.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'authoriz.html',
            chunks: ['authoriz'],
            //template: path.resolve(__dirname, 'src') + '/index.pug'
            template: './authoriz.html'
        }),
         new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // {
            //     test: /\.less$/,
            //     use: cssLoaders('less-loader')
            // },
            // {
            //     test: /\.s[ac]ss$/,
            //     use: cssLoaders('sass-loader')
            // },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            // {
            //     test: /\.xml$/,
            //     use: ['xml-loader']
            // },
            // {
            //     test: /\.csv$/,
            //     use: ['csv-loader']
            // },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: jsLoaders(),
            //     //loader: 'babel-loader',
            //     //options: babelOptions()
            // },
            // {
            //     test: /\.ts$/,
            //     exclude: /node_modules/,
            //     loader: 'babel-loader',
            //     options: babelOptions('@babel/preset-typescript')
            // },
            // {
            //     test: /\.jsx$/,
            //     exclude: /node_modules/,
            //     loader: 'babel-loader',
            //     options: babelOptions('@babel/preset-react')
            // }
        ]
    } 
}



