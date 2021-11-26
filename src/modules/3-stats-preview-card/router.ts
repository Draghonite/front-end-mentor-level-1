import { RouteRecordRaw  } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/stats-preview',
        name: 'StatsPreview',
        component: () => import('./views/Index.vue')
    }
]

export default routes