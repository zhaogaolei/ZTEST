/**
 * 通过拿到环境运行参数，向project.js文件写入一个运行的名称
 * 可选值：zmjd(周末酒店框架) | example(组件demo)
 */
const projectName = process.argv[2]
const fs = require('fs')
// 写入
fs.writeFileSync('./build/project.js', `exports.name = '${projectName}' // 默认zmjd`)

const exec = require('child_process').execSync
exec('vue-cli-service serve', { stdio: 'inherit' })
