import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/article-preview',
        name: 'ArticlePreview',
        component: () => import('./views/Index.vue')
    }
]

export default routes