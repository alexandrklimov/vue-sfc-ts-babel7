'use strict';
const path = require('path');
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;


module.exports = function(env){
    return {
        mode: "development",
        entry: "./src/app.ts",
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "app.js"
        },
        resolve: {
            extensions: ['.ts', '.js', '.vue'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.resolve('src')
            }
        },
        module:{
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    exclude: /node_modules/
                },
                /*{
                    test: /\.ts$/,

                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                },*/
                {
                    test: /\.(ts|js)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                // this will apply to both plain `.css` files
                // AND `<style>` blocks in `.vue` files
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader'
                    ]
                }
            ]
        },
        plugins: [
            // make sure to include the plugin for the magic
            new VueLoaderPlugin()
        ],
        stats: "verbose",
        devtool: "eval-source-map",
        devServer: {
            port: 9090,
            open: true
        }
    }
}