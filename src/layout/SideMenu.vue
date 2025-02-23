<template>
    <template v-for="menu in menus" :key="menu.path">
        <template v-if="!menu.children">
            <el-menu-item :index="menu.path" v-if="menu?.meta && !menu.meta.hidden" @click="goTo(menu.path)">
                <el-icon>
                    <component :is="menu.meta.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ menu.meta && menu.meta.title }}</span>
                </template>
            </el-menu-item>
        </template>

        <template v-if="menu.children && menu.children.length == 1">
            <el-menu-item :index="menu.children[0].path" @click="goTo(menu.children[0].path)">
                <el-icon>
                    <component :is="menu.children[0].meta?.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ menu.children[0].meta && menu.children[0].meta.title }}</span>
                </template>
            </el-menu-item>
        </template>

        <template v-if="menu.children && menu.children.length > 1">
            <el-sub-menu v-if="menu?.meta && !menu.meta.hidden" :index="menu.path">
                <template #title>
                    <el-icon>
                        <component :is="menu.meta.icon"></component>
                    </el-icon>
                    <span>{{ menu.meta.title }}</span>
                </template>
                <SideMenu :menus="menu.children"></SideMenu>
            </el-sub-menu>
        </template>

    </template>
</template>

<script setup lang='ts' name="SideMenu">
import type { RouteRecordRaw } from 'vue-router'
import { useRouter } from 'vue-router'

defineProps({
    menus: Array<RouteRecordRaw>
})

let $router = useRouter()

const goTo = (path: string) => {
    $router.push(path)
}

</script>

<style></style>