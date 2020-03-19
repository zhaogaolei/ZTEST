const path = require('path')
const config = require('./build/config')

const isProd = () => {
  return process.env.NODE_ENV === 'production'
}
const vueConfig = {
  pages: config.pages,
  outputDir: config.outputDir,
  configureWebpack: {
    devtool: 'source-map', // 配置后，开发环境方便调试
    plugins: []
  },
  // disable source map in production
  productionSourceMap: false,
  lintOnSave: !isProd()
}

module.exports = vueConfig
