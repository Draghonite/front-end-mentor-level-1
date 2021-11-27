import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/profile-card',
        name: "ProfileCard",
        component: () => import('./views/Index.vue')
    }
]

export default routes;