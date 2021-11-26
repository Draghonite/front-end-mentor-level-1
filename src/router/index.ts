import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import { routes as NFTRoutes } from '../modules/1-nft-preview-card'
import { routes as OrderSummaryRoutes } from '@/modules/2-order-summary'
import { StatsPreviewRoutes } from '@/modules/3-stats-preview-card'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...NFTRoutes,
  ...OrderSummaryRoutes,
  ...StatsPreviewRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
