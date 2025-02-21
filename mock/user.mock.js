import { defineMock } from 'vite-plugin-mock-dev-server'

const users = [
    {
        id: 1,
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'admin',
        email: 'admin@gmail.com',
        password: '1234',
        desc: '平台管理员',
        roles: ['平台管理员'],
        buttons: ['cuser.detail'],
        routes: ['home'],
        token: 'Admin Token',
    },
    {
        id: 2,
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'system',
        email: 'system@gmail.com',
        password: '1234',
        desc: '系统管理员',
        roles: ['系统管理员'],
        buttons: ['cuser.detail', 'cuser.user'],
        routes: ['home'],
        token: 'System Token',
    }
]


export default defineMock([
    {
        headers: { 'Content-Type': 'application/json' },
        url: '/api/auth/login',
        method: ['POST'],
        delay: 1000,
        status: 200,
        statusText: 'OK',
        response(req, res, next) {
            const { email, password } = req.body
            const user = users.find(u => u.email === email && u.password === password)
            
            if (!user) {
                return res.end(JSON.stringify({
                    code: 404,
                    message: '帳號或密碼錯誤'
                }))
            } else {
                return res.end(JSON.stringify({
                    code: 200,
                    message: 'success',
                    data: user
                }))
            }
        },
    },
])

