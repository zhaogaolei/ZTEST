const chalk = require('chalk')
const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const { smart } = require('webpack-merge')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJsPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

console.log(chalk.blue('读取配置...') + '\n')
const distBaseName = 'zmjd'
function webpackConfig () {
  const pkg = require(path.join(process.cwd(), 'package.json'))
  const entry = path.join(__dirname, '../src/index.js')
  const config = {
    mode: 'production', // 'production', development
    stats: {
      modules: false, // 隐藏构建模块信息
      children: false // 隐藏children 信息
    },
    output: {
      path: path.join(__dirname, '../dist'),
      publicPath: '/dist/', // -//cdn.example.com/dist/
      filename: '[name].js',
      library: distBaseName,
      libraryTarget: 'umd' // - 将你的 library 暴露为所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量, 参考https://github.com/umdjs/umd
    },
    optimization: {
    // 压缩js/css
      minimizer: [
        new TerserJsPlugin({
          sourceMap: true, // Must be set to true if using source-maps in production
          terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          }
          // extractComments: false
        })
      ]
    },
    externals: {
      vue: 'Vue'
    },
    performance: {
      maxEntrypointSize: 5 * 1024 * 1024, // 包超过5m提醒
      maxAssetSize: 5 * 1024 * 1024
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.(less)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
        },
        {
          test: /\.(png|svg|jpg|gif|jpeg|ico|woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                fallback: 'file-loader',
                outputPath: 'css/fonts/',
                name: '[name].[ext]',
                limit: 10 * 1024 // 小于10kb的都进行base64操作
              }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      new webpack.BannerPlugin(` ${pkg.name} v${pkg.version} \n All rights reserved. \n`),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ]
  }

  // Development
  const developmentConfig = smart(config, {
    entry: {
      [distBaseName]: entry
    },
    mode: 'development'
  })

  // Production
  const productionConfig = smart(config, {
    entry: {
      [`${distBaseName}.min`]: entry
    },
    mode: 'production',
    optimization: {
      minimizer: [new OptimizeCssAssetsPlugin()]
    },
    plugins: [
      new WebpackBar({
        name: 'zmjd-mobile',
        color: 'green'
      })
    ]
  })

  return [developmentConfig, productionConfig]
}

module.exports = webpackConfig
