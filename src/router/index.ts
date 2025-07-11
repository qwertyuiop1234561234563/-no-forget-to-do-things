import { createRouter, createWebHistory } from "vue-router";
import shouSuo from "@/pages/shouSuo.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/shousuo',
            component: shouSuo
        }
    ]
})
export default router