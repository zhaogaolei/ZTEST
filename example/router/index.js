import Vue from 'vue'
import VueRouter from 'vue-router'
import navConfig from './nav.config.json'
console.log('navConfig', navConfig)
Vue.use(VueRouter)
const generateRoutes = (config) => {
  const route = []
  config.map(nav =>
    nav.list.map(list =>
      route.push({
        path: list.path,
        name: list.name,
        component: () => import(`../views${list.path}`),
        meta: {
          title: list.title || list.name
        }
      })
    )
  )
  return { route }
}
const routes = generateRoutes(navConfig)
console.log('routes======', routes)

routes.route.push({
  path: '/',
  name: 'index',
  component: () => import('../views/index.vue'),
  meta: {
    title: 'Zmjd-Mobile'
  }
})

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes.route
})
// const navs = navConfig
// export {navs}
export const navs = navConfig
