export interface User {
    id: string
    email: string
    name: string
    role: string
}

export interface LoginForm {
    email: string
    password: string
}

export interface LoginResponse extends User { }