import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/nft-preview-card',
        name: 'NFTPreviewCard',
        component: () => import('../views/Index.vue')
    }
]

export default routes
