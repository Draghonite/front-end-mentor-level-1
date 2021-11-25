import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/order-summary',
        name: 'OrderSummary',
        component: () => import('./views/Index.vue')
    }
]

export default routes