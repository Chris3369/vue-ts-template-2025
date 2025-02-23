export const constantRoute = [
    {
        path: '/',
        name: 'layout',
        component: () => import('../layout/Layout.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/demo1',
        name: 'demo1',
        component: () => import('../views/demo1.vue')
    },
    {
        path: '/demo2',
        name: 'demo2',
        component: () => import('../views/demo2.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../views/404.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'any'
    }
]