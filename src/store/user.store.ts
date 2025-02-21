import { defineStore } from 'pinia'
import { ref } from 'vue'
import { reqLogin } from '../api/auth'
import type { LoginForm, LoginResponse, User } from '../api/auth/type'

const userStore = defineStore('user', () => {

    const user = ref<User | null>(JSON.parse(localStorage.getItem('user') || 'null'))

    const login = async (form: LoginForm) => {
        const response = await reqLogin(form) 
        
        if (response.code === 200) {
            user.value = response.data as LoginResponse
            localStorage.setItem('user', JSON.stringify(response.data))

            return Promise.resolve('ok')
        } else {
            return Promise.reject(response.message)
        }
    }

    return { user, login };
})

export default userStore
