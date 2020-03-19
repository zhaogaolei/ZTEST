const path = require('path')
const config = require('./build/config')

const isProd = () => {
  return process.env.NODE_ENV === 'production'
}
function resolve (dir) {
  return path.join(__dirname, dir)
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
  // runtimeCompiler: true,
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('zmjd-mobile', resolve('src'))
  // }

}

module.exports = vueConfig
