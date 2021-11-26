import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import { routes as NFTRoutes } from '../modules/1-nft-preview-card'
import { routes as OrderSummaryRoutes } from '@/modules/2-order-summary'
import { StatsPreviewRoutes } from '@/modules/3-stats-preview-card'
import { ThreeColumnPreviewRoutes } from '@/modules/4-three-column-preview-card'

const modules = [
  ...NFTRoutes, 
  ...OrderSummaryRoutes, 
  ...StatsPreviewRoutes,
  ...ThreeColumnPreviewRoutes
];

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...modules
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
