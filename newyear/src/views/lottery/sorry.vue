<template>
  <div class="sorry-page" >
    <div class="iconfont icon-jinggao01"></div>
    <p>很遗憾，您的照片未通过审核，</p>
    <p>已取消兑奖资格</p>
  </div>
</template>

<script setup lang="ts">
import isLogin from '@/hooks/isLogin';
const { isLoginFn } = isLogin()
isLoginFn()
</script>

<style scoped lang="scss" >
.sorry-page{
  box-sizing: border-box;
  min-height:100vh; width:100vw; padding-top: size(200);
  background: linear-gradient(rgba(254,249,225,1) 0%,rgba(255,255,255,1) 100%);
  .iconfont{
    text-align: center;
    font-size: size(50); margin-bottom: size(16);
    color:rgb(255, 148, 26);
  }
  p{
    text-align: center;
    font-size: size(20); line-height: size(30); 
    color:#000;
  }
}
</style>