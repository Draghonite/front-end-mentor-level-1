import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/huddle-landing-page-with-single-introductory-section',
        name: 'HuddleLandingPage',
        component: () => import('./views/Index.vue')
    }
]

export default routes;