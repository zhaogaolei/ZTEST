/**
 * 构建组件
 */
const chalk = require('chalk')
const WebpackBar = require('webpackbar')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJsPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: 'production', // 'production', development
  stats: {
    modules: false, // 隐藏构建模块信息
    children: false // 隐藏children 信息
  },
  entry: {
    zmjd: path.join(__dirname, '../src/index.js')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist/', // -//cdn.example.com/dist/
    filename: '[name].min.js',
    library: 'zmjd',
    libraryTarget: 'umd' // - 将你的 library 暴露为所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量, 参考https://github.com/umdjs/umd
  },
  optimization: {
    // 压缩js/css
    minimizer: [
      new TerserJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        }
      }),
      new OptimizeCssAssetsPlugin()
    ]
    // 分割代码块
    /* splitChunks: {
      // 缓存分组
      cacheGroups: {
        // 第三方模块
        vender: {
          priority: 1, // 权限更高，优先抽离，重要！！！
          test: /node_modules/,
          chunks: 'initial',
          name: 'venders',
          minSize: 0,
          minChunks: 1
        }
      }
    } */
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
        use: [MniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(less)$/,
        use: [MniCssExtractPlugin.loader, 'css-loader', 'less-loader']
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
    new WebpackBar({
      name: 'zmjd-mobile',
      color: 'green',
      reporter: {
        allDone (context) {}
      }
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MniCssExtractPlugin({
      filename: '[name].min.css'
    })
  ]
}
