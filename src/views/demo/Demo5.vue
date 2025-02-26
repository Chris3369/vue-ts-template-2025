<template>
    <div>
        <el-button type="primary" @click="visible = true">Open Dialog</el-button>
        <Dialog v-model:visible="visible">
            <div>
                内容内容内容
            </div>
        </Dialog>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import Dialog from '../../components/ui/Dialog.vue'

    const visible = ref(false)
</script>
    
<style>
    
</style>