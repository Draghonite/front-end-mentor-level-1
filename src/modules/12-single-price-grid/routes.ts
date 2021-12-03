import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/single-price-grid',
        name: 'SinglePriceGrid',
        component: () => import('./views/Index.vue')
    }
]

export default routes;