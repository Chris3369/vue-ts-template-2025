import axios from "axios"
import { ElMessage } from "element-plus"

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

instance.interceptors.request.use((config) => {

    // config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

    return config
})

instance.interceptors.response.use((response) => {
    return response.data
}, (error) => {

    let message = ''
    let status = error.response.status

    switch (status) {
        case 400:
            message = '請求錯誤'
            break
        case 401:
            message = '未授權'
            break
        case 403:
            message = '禁止訪問'
            break
        case 404:
            message = '找不到資源'
            break
        case 500:
            message = '伺服器錯誤'
            break
        default:
            message = '未知錯誤'
            break
    }

    ElMessage({
        showClose: true,
        type: 'error',
        message: message,
    })

    return Promise.reject(error)
})

// export function request(config: AxiosRequestConfig<any>) {
//     return instance(config)
// }

export default instance