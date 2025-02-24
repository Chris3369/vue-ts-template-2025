import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { reqLogin, reqLogout } from '../api/auth'
import type { LoginForm, LoginResponse, User } from '../api/auth/type'
import { constantRoutes } from '../router/routes'

const userStore = defineStore('user', () => {

    const user = ref<User | null>(JSON.parse(localStorage.getItem('user') || 'null'))

    const menuRoutes = ref<RouteRecordRaw[]>(constantRoutes)

    const login = async (form: LoginForm) => {
        const response = await reqLogin(form)

        if (response.code === 200) {
            user.value = response.data as LoginResponse

            // 將 user 存入 localStorage
            localStorage.setItem('user', JSON.stringify(response.data))
            localStorage.setItem('token', JSON.stringify(response.data?.token))

            return Promise.resolve('ok')
        } else {
            return Promise.reject(response.message)
        }
    }

    const logout = async () => {
        const response = await reqLogout()
        if (response.code === 200) {
            localStorage.removeItem('user') 
            localStorage.removeItem('token') 
            return Promise.resolve('ok')
        } else {
            return Promise.reject(response.message)
        }
    }

    return { user, menuRoutes, login, logout };
})

export default userStore
