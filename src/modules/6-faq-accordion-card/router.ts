import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/faq-accordion-card',
        name: 'FAQAccordion',
        component: () => import('./views/Index.vue')
    }
]

export default routes