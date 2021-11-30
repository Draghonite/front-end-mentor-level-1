import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/four-card-feature-section',
        name: 'FourCardFeatureSection',
        component: () => import('./views/Index.vue')
    }
]

export default routes