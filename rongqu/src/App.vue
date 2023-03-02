<template>

  <!-- <el-config-provider  :zIndex="zIndex" :locale="zhCn"> -->
    <router-view v-slot="{ Component }">
      <transition name="router_animate">
        <component :is="Component" />
      </transition>
    </router-view>
  <!-- </el-config-provider> -->

</template>

<script lang="ts" setup >


console.log(import.meta.env.VITE_BASE_URL);




</script>

<style scoped lang="scss">
.router_animate-enter-active {
  animation: slideInRight 0.5s;
}

// .router_animate-leave-active {
//   animation: slideOutRight 0.3s;
// }
</style>
