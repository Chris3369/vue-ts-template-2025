<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import Mock from '@/components/Mock.vue'
import { useCounterStore } from '@/store/counter.store.ts'

const store = useCounterStore()
</script>

<template>
  <div>
    <button @click="store.increment">count++</button>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <Mock />
</template>

<style scoped></style>
