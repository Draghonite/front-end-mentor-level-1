import { RouteRecordRaw  } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/three-column-preview',
        name: 'ThreeColumnPreview',
        component: () => import('./views/Index.vue')
    }
]

export default routes