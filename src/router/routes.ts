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
                    hidden: false,
                    icon: 'House'
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
            hidden: false,
            icon: 'Menu'
        },
        children: [
            {
                path: '/management/menu',
                name: 'menu-management',
                component: () => import('../views/management/Menu.vue'),
                meta: {
                    title: 'Menu',
                    icon: 'Document',
                    hidden: false
                }
            },
            {
                path: '/management/role',
                name: 'role-management',
                component: () => import('../views/management/Role.vue'),
                meta: {
                    title: 'Role',
                    hidden: false,
                    icon: 'Document'
                }
            },
        ]
    },
    {
        path:'/demo',
        name: 'demo',
        component: () => import('../layout/Layout.vue'),
        redirect: '/demo/demo1',
        meta: {
            title: 'Demo',
            hidden: false,
            icon: 'Menu'
        },
        children: [
            {
                path: '/demo/demo1',
                name: 'demo-demo1',
                component: () => import('../views/demo/Demo1.vue'),
                meta: {
                    title: 'demo1',
                    hidden: false,
                    icon: 'Cpu'
                }
            },
            {
                path: '/demo/demo2',
                name: 'demo-demo2',
                component: () => import('../views/demo/Demo2.vue'),
                meta: {
                    title: 'demo2',
                    hidden: false,
                    icon: 'Cpu'
                }
            },
            {
                path: '/demo/demo3',
                name: 'demo-demo3',
                component: () => import('../views/demo/Demo3.vue'),
                meta: {
                    title: 'demo3',
                    hidden: false,
                    icon: 'Cpu'
                }
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
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