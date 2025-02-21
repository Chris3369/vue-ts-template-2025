import { defineMock } from 'vite-plugin-mock-dev-server'

export default defineMock([
    {
        headers: {
            'Content-Type': 'application/json'
        },
        url: '/api/auth/signup',
        method: ['POST'],
        delay: 300,
        status: 200,
        statusText: 'OK',
        validator: {
            body: {
                email:'orange@gmail.com',
                password:'1234',
                name:'orange'
            },
        },
        
    },
    {
        headers: {
            'Content-Type': 'application/json'
        },
        url: '/api/auth/login',
        method: ['POST'],
        delay: 300,
        status: 200,
        statusText: 'OK',
        validator: {
            body: {
                email:'orange@gmail.com',
                password:'1234',
            },
        },
        body({ params, query, body }) {
            return {
                id: '001',
                email: body.email,
                name: 'orange',
                role: 'admin'
            }
        },
    }
])

