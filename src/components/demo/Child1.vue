<template>
    <button @click="handleClick">改变page值:{{ page }}</button>
</template>

<script setup lang='ts'>
const props = defineProps<{
    page: number
}>()

const emit = defineEmits<{
    pageFn: [a: number, b: number]
}>()

const handleClick = () => {
    emit('pageFn', props.page, props.page + 1)
}
</script>

<style></style>