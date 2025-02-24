<template>
    <div class="wrapper">
        <div class="left">
            <el-icon style="margin-right: 10px;" @click="settingStore.toggleCollapse">
                <component class="collapse" :is="settingStore.collapse ? Expand : Fold"></component>
            </el-icon>
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item v-for="item in $route.matched.filter(item => item.meta.title)" :key="item.path">
                    {{ item.meta.title }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="right">
            <el-button type="primary" size="small" circle :icon="Refresh"></el-button>
            <el-button type="primary" size="small" circle :icon="Setting"></el-button>
            <img src="/logo.svg" alt="">

            <el-dropdown>
                <span>{{ userStore.user?.name }}</span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="logout">Logout</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { useRoute, useRouter } from 'vue-router'
import { ArrowRight, Expand, Fold, Refresh, Setting } from '@element-plus/icons-vue'
import UserStore from '../store/user.store'
import SettingStore from '../store/setting.store'

const $route = useRoute()
const $router = useRouter()

console.log($route.matched)

const userStore = UserStore()
const settingStore = SettingStore()

const logout = async () => {
    // await userStore.logout()
    // $router.replace({ name: 'login' })
}

</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;

    .left {
        display: flex;
        align-items: center;
        margin-left: 20px;

        .collapse {
            cursor: pointer;
        }
    }

    .right {
        display: flex;
        align-items: center;
        margin-right: 1rem;

        img {
            width: 24px;
            height: 24px;
            margin: 0 12px;
        }

        span {
            line-height: $topbar-height;
            cursor: pointer;
        }
    }
}
</style>