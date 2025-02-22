<template>
    <div class="wrapper">
        <label v-if="label" :for="id">{{ label }}</label>
        <input 
            :id="id" 
            class="input" 
            v-model="value" 
            :placeholder="placeholder" 
            :type="type || 'text'" 
        />
        <small :class="errorMessage ? 'error_message' : ''">{{ errorMessage }}</small>
    </div>
</template>

<script setup lang='ts'>
import { useField } from 'vee-validate'
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    type: String,
    placeholder: String,
    label: String
})

const { value, errorMessage } = useField(() => props.id)

</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    gap: 5px;
    box-sizing: border-box;
}

.error_message {
    color: red;
}

.field_error {
    border: 1px solid red;
}

.input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    padding: 3px 10px;
    border: 0.5px solid #ccc;
}

.input:focus {
    outline: none;
    border: 1px solid #000;
}

.valid {
    border: 1px solid green;
}

label {
    font-size: 14px;
    font-weight: 600;
}
</style>