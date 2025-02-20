import { defineStore } from "pinia"
import { ref } from 'vue'

export const useMockStore = defineStore("mock", () => {

    let mocks = ref<string[]>([])

    const getData = async () => {
        const response = await fetch('/api/test')
        const data = await response.json()
        mocks.value = [...mocks.value, ...data]
    }

    return { getData, mocks }
})