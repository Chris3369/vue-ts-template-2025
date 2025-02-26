<template>
    <el-dialog v-model="visible" title="Title">
        <slot></slot>
    </el-dialog>
</template>
    
<script setup lang='ts'>
    const visible = defineModel('visible') 
</script>
    
<style>
    
</style>