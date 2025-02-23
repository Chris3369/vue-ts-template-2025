export const constantRoutes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('../layout/Layout.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/Home.vue'),
                meta: {
                    title: 'Home',
                    hidden: false
                }
            },
        ]
    },
    {
        path:'/management',
        name: 'management',
        component: () => import('../layout/Layout.vue'),
        redirect: '/management/menu',
        meta: {
            title: 'Management',
            hidden: false
        },
        children: [
            {
                path: '/management/menu',
                name: 'menu-management',
                component: () => import('../views/management/Menu.vue'),
                meta: {
                    title: 'Menu',
                    hidden: false
                }
            },
            {
                path: '/management/role',
                name: 'role-management',
                component: () => import('../views/management/Role.vue'),
                meta: {
                    title: 'Role',
                    hidden: false
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/demo1',
        name: 'demo1',
        component: () => import('../views/Demo1.vue'),
        meta: {
            title: 'demo1',
            hidden: false
        }
    },
    {
        path: '/demo2',
        name: 'demo2',
        component: () => import('../views/Demo2.vue'),
        meta: {
            title: 'demo2',
            hidden: false
        }
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