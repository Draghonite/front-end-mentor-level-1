import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/ping-coming-soon-page',
        name: 'PingComingSoonPage',
        component: () => import('./views/Index.vue')
    }
]

export default routes;