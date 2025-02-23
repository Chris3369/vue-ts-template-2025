<template>
    <div class="container">
        <div class="menu">
            menu
        </div>
        <div class="nav">nav</div>
        <div class="main">
            <p class="test">main</p>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100vh;

    .menu {
        width: $menu-width;
        height: 100vh;
        background-color: $menu-background;
    }

    .nav {
        position: fixed;
        top: 0px;
        left: $menu-width;
        width: calc(100% - $menu-width);
        height: $nav-height;
        background-color: red;
    }

    .main {
        position: absolute;
        left: $menu-width;
        top: $nav-height;
        width: calc(100% - $menu-width);
        height: calc(100vh - $nav-height);
        background-color: orange;

        padding: 20px;

        overflow: auto;

        .test {
            height: 10000px;
            background-color: green;
        }
    }
}
</style>