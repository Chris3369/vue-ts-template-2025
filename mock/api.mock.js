import { defineMock } from 'vite-plugin-mock-dev-server'

export default defineMock({
    headers: {
        'Content-Type': 'application/json'
    },
    // url: '/api/user/:userId',
    url: '/api/test',
    method: ['GET', 'POST'],
    delay: 300,
    status: 200,
    statusText: 'OK',

    body: ['orange', 'apple', 'banana']

    // body({ params, query, body }) {
    //     return {
    //         userId: params.userId,
    //     }
    // },
})