<template>
  <div class="cue-pages ">
    <div class="common-logo"></div>
    <div class="cue-box">
      <img class="img" src="@/assets/images/img-04.png" alt="">
    </div>
    <router-link class="common-btn" to="/fu/index">立即撰写</router-link>
  </div>
</template>

<script setup lang="ts">
import isLogin from '@/hooks/isLogin';
const {isLoginFn} = isLogin()
isLoginFn()

</script>

<style scoped lang="scss" >
.cue-pages{
  width:100vw; height:100vh; 
  background: url('@/assets/images/bg-07.png') no-repeat center; background-size: 100% 100%;
}
.cue-box{
  width:calc(325 / 390 * 100vw) ; height:calc(250 / 390 * 100vw); margin:0 auto 0; padding-top: 35vh;
  .img{
    display: block;
    width:100%;
  }
}
.common-btn{
  margin: size(100) auto 0;
}
</style>