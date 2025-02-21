export interface User {
    id: string
    email: string
    name: string
    roles: string[]
    token: string
}

export interface LoginForm {
    email: string
    password: string
}

export interface LoginResponse extends User { }