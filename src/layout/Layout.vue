<template>
    <div class="container">
        <div class="menu">
            <Logo />
            <el-scrollbar class="scrollbar">
                <el-menu 
                    :default-active="$route.path"
                    background-color="$menu-background" 
                    text-color="white"
                >
                    <SideMenu :menus="userStore.menuRoutes"></SideMenu>
                </el-menu>
            </el-scrollbar>
        </div>
        <div class="nav">nav</div>
        <div class="content">
            <Content />
        </div>
    </div>
</template>

<script setup lang='ts'>
import { useRoute } from 'vue-router'
import Logo from './Logo.vue'
import SideMenu from './SideMenu.vue'
import Content from './Content.vue'
import UserStore from '../store/user.store'

const userStore = UserStore()

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

        .scrollbar {
            width: 100%;
            height: calc(100vh - $logo-height);

            .el-menu {
                border-right: none;
            }
        }
    }

    .nav {
        position: fixed;
        top: 0px;
        left: $menu-width;
        width: calc(100% - $menu-width);
        height: $nav-height;
        background-color: red;
    }

    .content {
        position: absolute;
        left: $menu-width;
        top: $nav-height;
        width: calc(100% - $menu-width);
        height: calc(100vh - $nav-height);
        background-color: orange;

        padding: 20px;

        overflow: auto;

    }
}
</style>