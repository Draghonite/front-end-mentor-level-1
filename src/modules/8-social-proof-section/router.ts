import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/social-proof-section',
        name: 'SocialProofSection',
        component: () => import('./views/Index.vue')
    }
]

export default routes