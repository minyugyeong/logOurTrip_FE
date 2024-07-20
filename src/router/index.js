import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        return { left: 0, top: 0 };
    },
    routes,
});

export default router;
