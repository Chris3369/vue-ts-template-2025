import axios from '../../utils/axios'
import type { LoginForm, LoginResponse } from './type'

enum API {
    Signup = '/auth/signup',
    Login = '/auth/login'
}

export const signup = (data: any) => axios.post(API.Signup, data)
export const login = (data: LoginForm) => axios.post<LoginResponse>(API.Login, data)