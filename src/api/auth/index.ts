import axios from '../../utils/axios'
import type { LoginForm, LoginResponse } from './type'
import type { ApiResponse } from '../type'

enum API {
    Signup = '/auth/signup',
    Login = '/auth/login'
}

export const reqSignup = (data: any) => axios.post(API.Signup, data)
export const reqLogin = (data: LoginForm) => axios.post<any, ApiResponse<LoginResponse>>(API.Login, data)