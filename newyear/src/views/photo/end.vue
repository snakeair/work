<template>
  <div class="photo-end" >
    <div class="layer-up" >
      <div class="iconfont icon-dui3"></div>
      <p class="info">提交成功</p>
      <router-link to="/lottery/index" class="close-btn common-btn" btn>立即抽奖</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { indexStore } from '@/store';
import isLogin from '@/hooks/isLogin';
const { isLoginFn } = isLogin()
isLoginFn()

const store = indexStore()
store.holder.hasLottery = 1
</script>

<style scoped lang="scss" >
.photo-end{
  min-height:100vh; width:100vw;
  background: linear-gradient(rgba(254, 249, 225, 1) 0%, rgba(255, 255, 255, 1) 100%);
}
.layer-up{
  box-sizing: border-box;
  width:size(330); height:size(290); padding-top: size(248); margin:0 auto 0;
  .iconfont{
    text-align: center; 
    margin:0 auto; line-height: 1; font-size: size(60); margin-bottom: size(20);
    color:#07C160;
  }
  .info{
    text-align: center;
    font-size: size(20); margin-bottom: size(50);
    color:#000;
  }
  .close-btn{
    margin:0 auto 0;
  }
}
</style>