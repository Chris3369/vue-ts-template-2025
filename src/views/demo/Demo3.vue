<template>
    <div>
        <el-button type="primary" @click="visible = true">新增</el-button>

        <el-dialog v-model="visible" title="Title">
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
                <el-form-item label="Name" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">Confirm</el-button>
                    <el-button @click="visible = false">Cancel</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
    name: string
}

const ruleFormRef = ref < FormInstance > ()
const ruleForm = reactive < RuleForm > ({
    name: ''
})

const rules = reactive < FormRules < RuleForm >> ({
    name: [
        { required: true, message: 'Please input name', trigger: 'blur' },
    ]
})

const visible = ref(false)

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return

    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit', ruleForm)
        } else {
            console.log('error submit! field', fields)
        }
    })

}
</script>