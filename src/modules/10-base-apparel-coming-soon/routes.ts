import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/base-apparel-coming-soon',
        name: 'BaseApparelComingSoon',
        component: () => import('./views/Index.vue')
    }
]

export default routes;