<template>
    <div class="container">
        <div class="menu" :class="settingStore.collapse ? 'collapse' : ''">
            <Logo />
            <el-scrollbar class="scrollbar">
                <el-menu 
                    :collapse="settingStore.collapse"
                    :default-active="$route.path" 
                    background-color="black" 
                    text-color="white"
                >
                    <SideMenu :menus="userStore.menuRoutes" />
                </el-menu>
            </el-scrollbar>
        </div>
        <div class="topbar" :class="settingStore.collapse ? 'collapse' : ''">
            <TopBar />
        </div>
        <div class="content" :class="settingStore.collapse ? 'collapse' : ''">
            <Content />
        </div>
    </div>
</template>

<script setup lang='ts'>
import { useRoute } from 'vue-router'
import Logo from './Logo.vue'
import SideMenu from './SideMenu.vue'
import TopBar from './TopBar.vue'
import Content from './Content.vue'
import UserStore from '../store/user.store'
import SettingStore from '../store/setting.store'

const userStore = UserStore()
const settingStore = SettingStore()

const $route = useRoute()
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100vh;

    .menu {
        width: $menu-width;
        height: 100vh;
        background-color: $menu-background;

        transition: all 0.3s ease;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $logo-height);

            .el-menu {
                border-right: none;
            }
        }
    }

    .menu.collapse {
        width: 60px;
    }

    .topbar {
        position: fixed;
        top: 0px;
        left: $menu-width;
        width: calc(100% - $menu-width);
        height: $topbar-height;

        transition: all 0.3s ease;
    }

    .topbar.collapse {
        width: calc(100vw - 60px);
        left: 60px;
    }

    .content {
        position: absolute;
        left: $menu-width;
        top: $topbar-height;
        width: calc(100% - $menu-width);
        height: calc(100vh - $topbar-height);
        background-color: orange;

        padding: 20px;

        overflow: auto;

        transition: all 0.3s ease;
    }

    .content.collapse {
        width: calc(100vw - 60px);
        left: 60px;
    }
}
</style>