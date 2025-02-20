import { defineStore } from "pinia"
import { ref } from 'vue'
import axios from '../utils/axios'

export const useMockStore = defineStore("mock", () => {

    let mocks = ref<string[]>([])

    const getData = async () => {
        const data: string[] = await axios.get('/api/test')
        mocks.value = [...mocks.value, ...data]
    }

    return { getData, mocks }
})