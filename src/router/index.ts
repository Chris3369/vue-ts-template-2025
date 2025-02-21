import { createRouter, createWebHistory } from "vue-router"
import { constantRoute } from './routes'
let router = createRouter({

    history: createWebHistory(),
    routes: constantRoute,
    scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router


// https://vueschool.io/lessons/scroll-behavior?friend=vuerouter
// https://router.vuejs.org/zh/guide/advanced/scroll-behavior