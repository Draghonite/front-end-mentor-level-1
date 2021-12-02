import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/intro-component-with-signup-form',
        name: 'IntroComponentWithSignupForm',
        component: () => import('./views/Index.vue')
    }
]

export default routes;