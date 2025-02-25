<template>
    <div>
        <Child2 v-model:count="count" />
        <div>parent: {{ count }}</div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import Child2 from '../../components/demo/Child2.vue'


const count = ref(0)
</script>

<style></style>