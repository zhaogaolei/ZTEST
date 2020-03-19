import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/common.less'
// 全部注册组件
import zmjd from '../src'
Vue.use(zmjd)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || document.title
  next()
})
router.afterEach((to, next) => {
  document.title = to.meta.title || document.title
})
