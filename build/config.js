
const project = require('./project')
console.log('CurrentPrject========>', project)
const config = {
  example: {
    pages: {
      index: {
        entry: 'example/main.js',
        template: 'example/index.html',
        filename: 'index.html'
      }
    },
    outputDir: 'example/dist'
  }
}

// 控制导出哪个项目下的配置
const configObj = config[project.name]
module.exports = configObj
