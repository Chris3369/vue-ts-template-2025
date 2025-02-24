import { defineStore } from 'pinia'
import { ref } from 'vue'

const settingStore = defineStore('setting', () => {
    const collapse = ref(false)

    const toggleCollapse = () => {
        collapse.value = !collapse.value
    }

    return { collapse, toggleCollapse }
})

export default settingStore