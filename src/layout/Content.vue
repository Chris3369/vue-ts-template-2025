<script setup lang='ts'>

</script>
<template>
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" />
        </transition>
    </router-view>
</template>
<style lang="scss" scoped>
.fade-enter-from {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}

.fade-enter-active {
    transition: opacity 0.5s ease;
}
</style>


<!-- https://router.vuejs.org/zh/guide/advanced/transitions.html -->