<template>
    <div>
        <el-button type="primary" @click="handleAdd">Add</el-button>
        <el-table :data="tableData" style="width: 100%" max-height="250" v-if="tableData.length > 0">
            <el-table-column type="index" label="Index" width="80" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="email" label="Email" width="180" />
            <el-table-column prop="role" label="Role" width="80" />

            <el-table-column prop="operation" label="operation" width="auto">
                <template #default="scope">
                    <el-button size="small" type="primary" @click="handleEdit(scope.row)">Edit</el-button>
                    <el-button size="small" type="danger"
                        @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                </template>
            </el-table-column>
            <!-- <DialogModel v-model:visible="show"></DialogModel> -->



        </el-table>

        <DialogModel v-model="dialogVisible" @cancel="handleCancel" @confirm="handleConfirm">
            <div>
                内容内容内容
            </div>
        </DialogModel>
    </div>
</template>

<script setup lang='ts'>
import { ref, watchEffect } from 'vue'
import axios from '../../utils/axios'
import DialogModel from '../../components/ui/DialogModel.vue'

const tableData = ref([])

const getProfiles = async () => {
    const res = await axios.get('/auth/profiles')
    tableData.value = res.data
}

const handleAdd = () => {
    dialogVisible.value = true
}

const handleEdit = (row: any) => {
    console.log(row)
}

const handleDelete = (index: number, row: any) => {
    console.log(index, row)
}

// === Dialog ===

const dialogVisible = ref(false);

function handleCancel() {
    dialogVisible.value = false; 
};

function handleConfirm() {
    console.log('确认按钮被点击');
};

watchEffect(() => getProfiles())
</script>

<style lang="scss" scoped></style>