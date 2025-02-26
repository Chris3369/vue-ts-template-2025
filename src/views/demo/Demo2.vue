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

<!-- <script setup>
import Child from './Child.vue'
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <Child v-model="msg" />
</template> -->
