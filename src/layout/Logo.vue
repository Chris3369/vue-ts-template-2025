<template>
    <div class="logo">
        <img src="/logo.svg" alt="logo">
        <p>Newegg</p>
    </div>
</template>

<script setup lang='ts'>
</script>

<style lang="scss" scoped>
.logo {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    margin-left: 20px;

    img {
        width: 30px;
        height: 30px;
    }

    p {
        color: white;
        font-size: 20px;
        margin-left: 10px;
    }
}
</style>