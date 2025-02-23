import { createRouter, createWebHistory } from "vue-router"
import { constantRoutes } from './routes'
let router = createRouter({

    history: createWebHistory(),
    routes: constantRoutes,
    scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router


// https://vueschool.io/lessons/scroll-behavior?friend=vuerouter
// https://router.vuejs.org/zh/guide/advanced/scroll-behavior