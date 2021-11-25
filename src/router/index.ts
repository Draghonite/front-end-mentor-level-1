import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import { routes as NFTRoutes } from '../modules/1-nft-preview-card'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...NFTRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
