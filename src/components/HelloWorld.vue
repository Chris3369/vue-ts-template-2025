<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from "../store/counter.store.ts"

const store = useCounterStore()

defineProps<{ msg: string }>()

</script>

<template>
  <h1>{{ msg }}</h1>

  <p>count is: {{ store.count }}</p>
  <p>double is: {{ store.double }}</p>

</template>

<style scoped></style>
