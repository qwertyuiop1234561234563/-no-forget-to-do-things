import { createRouter, createWebHashHistory } from "vue-router";
import shouSuo from "@/pages/shouSuo.vue";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/shousuo',
            component: shouSuo
        }
    ]
})
export default router