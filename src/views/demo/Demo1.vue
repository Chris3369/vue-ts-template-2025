<template>
    <div>
        <Child1 :page="page" @pageFn="pageFn" />
        {{ page }}
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import Child1 from '../../components/demo/Child1.vue'

const page = ref(0)

const pageFn = (a: number, b: number) => {
    page.value = a + b
}

</script>

<style></style>