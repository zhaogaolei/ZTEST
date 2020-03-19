/**
 * 组件库统一导出口
 */
import Button from './button'
import Icon from './icon'
import { Swipe, SwipeItem } from './swipe'
import Cell from './cell'
import Toast from './toast'
// 组件库字体文件
import './style/font/iconfont.css'

const components = [
  Button, Icon, Swipe, SwipeItem, Cell
]

/**
 * 安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为
 * install 方法。install 方法调用时，会将 Vue 作为参数传入
 * 该方法需要在调用 new Vue() 之前被调用
 */
components.forEach(Component => {
  Component.install = (Vue) => Vue.component(Component.name, Component)
})

const version = '1.0.0'
const install = function (Vue) {
  if (install.installed) { return }
  install.installed = true
  components.forEach(item => {
    Vue.component(item.name, item)
  })
  Vue.$toast = Vue.prototype.$toast = Toast
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  Button,
  Icon,
  Swipe,
  SwipeItem,
  Cell,
  Toast
}
export default {
  install,
  version
}
