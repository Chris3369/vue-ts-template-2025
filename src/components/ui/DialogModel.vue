<template>
    <el-dialog :width="props.width" :title="props.title" v-model="dialogVisible" :show-close="false"
        :close-on-click-modal="false" :close-on-press-escape="false" destroy-on-close draggable>
        <slot></slot>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleCancel" style="margin-right: 10px;">取消</el-button>
                <el-button type="primary" @click="handleConfirm">确认</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue';
/*
* @定义Dialog参数:
* width: 宽度； title：标题； v-model: 是否显示；
* show-close：是否显示关闭按钮； close-on-click-modal：通过点击遮罩关闭;  
* close-on-press-escape：通过按下 ESC 关闭 Dialog；
* destroy-on-close：关闭时销毁元素； align-center：文字是否居中； draggable：是否可拖拽
*/

const emits = defineEmits(['cancel', 'confirm'])
let dialogVisible = ref();

const props = defineProps({
    dialogVisible: {
        type: Boolean,
        default: false,
    },
    width: {
        type: String,
        default: '80%',
    },
    title: {
        type: String,
        default: '提示',
    },
});

// 取消按钮
const handleCancel = () => {
    emits('cancel', false);
};

// 确认按钮
const handleConfirm = () => {
    emits('confirm', false);
};
</script>
