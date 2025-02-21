<template>
	<el-row>
		<el-col :span="12" :xs="0"></el-col>
		<el-col :span="12" :xs="24">
			<el-form>
				<el-form-item>
					<el-input v-model="loginForm.email"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input type="password" v-model="loginForm.password"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button :loading="loading" class="login_btn" @click="login">login</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue'
import userStore from '../store/user.store'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

let $router = useRouter()

let store = userStore()

let loading = ref(false)

let loginForm = reactive({
	email: 'admin@gmail.com',
	password: '1234'
})

const login = async () => {
	loading.value = true
	try {
		await store.login(loginForm)
		$router.push({ name: 'home' })
		ElNotification({
			title: 'Success',
			message: 'Login Success',
			type: 'success'
		})
	} catch (error) {
		ElNotification({
			title: 'Error',
			message: error as string,
			type: 'error'
		})
	} finally {
		loading.value = false
	}
}

</script>

<style>
.login_btn {
	width: 100%;
}
</style>