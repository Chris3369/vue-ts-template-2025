<script setup lang='ts'>
import { onMounted } from 'vue'
import { useMockStore } from '@/store/mock.store.ts'

const store = useMockStore()

store.getData()

</script>
<template>
    <h1>Mock</h1>
    <button @click="store.getData()">Mock</button>
    <ul>
        <li v-for="item in store.mocks">
            {{ item }}
        </li>
    </ul>

</template>

<style></style>