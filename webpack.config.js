const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const CopyWepbackPlugin = require('copy-webpack-plugin');

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin");




const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const plugins = () =>  {
    const basePlugins = [
        
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template:  path.join(__dirname, 'app/pages/index/index.pug'),
            filename: 'index.html',
            chunks: ['index'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new HTMLWebpackPlugin({
            template:  path.join(__dirname, 'app/pages/second-page/second-page.pug'),
            filename: 'second-page.html',
            chunks: ['second'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new HTMLWebpackPlugin({
            template:  path.join(__dirname, 'app/pages/registration/registration.pug'),
            filename: 'registration.html',
            chunks: ['registr'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new HTMLWebpackPlugin({
            template:  path.join(__dirname, 'app/pages/login/login.pug'),
            filename: 'login.html',
            chunks: ['login'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new HTMLWebpackPlugin({
            template:  path.join(__dirname, 'app/pages/specific/specific.pug'),
            filename: 'specific.html',
            chunks: ['specific'],
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new NodePolyfillPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`
        }),
        new webpack.ProvidePlugin({
            $: 'jquery', 
            jQuery: 'jquery',
          }),
            
        require('autoprefixer'),
      
       
    ];
    if(isProd){
        basePlugins.push(
            
        )
    }

    return basePlugins;
};

module.exports = {
    context: path.resolve(__dirname, 'app'),
    mode: 'development',
    entry: {
        index: '../app/pages/index/index.js',
        second: '../app/pages/second-page/second-page.js',
        registr: '../app/pages/registration/registration.js',
        login: '../app/pages/login/login.js',
        specific: '../app/pages/specific/specific.js',
    },
    target: process.env.NODE_ENV === "development" ? "web" : "browserslist",
    watch: true,
    experiments: {
        asset: true,
    },
    output: {
        filename: `./js/${filename('js')}` ,
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'dist/[name][ext]'
        
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
       

    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: plugins(),
     devtool: 'source-map',
    module:{
        rules:[
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                    options: {
                        pretty: true
                    }
               
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/i,
                use: ['css-loader',
                {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: isDev,
                   
                       
                },
            },
        
        ],
        
    },
           
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 
                    
                    'css-loader', 
                    'postcss-loader',
                    'resolve-url-loader',
                    'sass-loader', 
                    
                    
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf)$/,
        
                type: 'asset',
                generator:{
                    filename: 'fonts/[name][ext][query]',
                    publicPath: '../'
                    
                },
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    
                    filename: 'images/[name][ext][query]',
                    
                }
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
           
        ]
    }
};