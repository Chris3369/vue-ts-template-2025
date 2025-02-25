<template>
    <div>
        <h1>Child2</h1>
        {{ count }}
        <el-button @click="update">button</el-button>
    </div>

</template>
    
<script setup lang='ts'>
    const count = defineModel<number>('count', { required: true })

    const update = () => {
        count.value += 1
    }
</script>
    
<style>
    
</style>