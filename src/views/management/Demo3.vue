<template>
    <el-table 
        :data="tableData" 
        style="width: 100%"
        max-height="250"
        v-if="tableData.length > 0"
    >
        <el-table-column type="index" label="Index" width="80" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="email" label="Email" width="180" />
        <el-table-column prop="role" label="Role" width="80"/>

        <el-table-column prop="operation" label="operation" width="auto">
            <template #default="scope">
                <el-button size="small" type="primary" @click="handleEdit(scope.row)">Edit</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
        </el-table-column>

    </el-table>
</template>

<script setup lang='ts'>
import { ref, watchEffect } from 'vue'
import axios from '../../utils/axios'

const tableData = ref([])

const getProfiles = async () => {
    const res = await axios.get('/auth/profiles')
    tableData.value = res.data
}

const handleEdit = (row: any) => {
    console.log(row)
}

const handleDelete = (index: number, row: any) => {
    console.log(index, row)
}

watchEffect(() => getProfiles())
</script>

<style lang="scss" scoped></style>