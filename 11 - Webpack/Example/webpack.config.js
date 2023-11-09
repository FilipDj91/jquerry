const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // JavaScript - main bundle
    entry: './src/index.js',
    output: {
        filename: 'bundle.min.js',
        path: path.join(__dirname, 'public'),
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },

    // SCSS to CSS
    // The module key, in the config file, is where we generally add the loaders
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader', // creates style nodes from JS strings
                'css-loader', // translates CSS into CommonJS
                'sass-loader' // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    },

    // Development Server
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3030
    },

    // Copying index.html from source to public
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html'
    })],

    // Development Mode
    mode: 'development'
};