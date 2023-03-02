<template>
  <div class="common-pages eggs-page" >
    <div class="common-logo"></div>
    <h3 class="page-title"><img src="@/assets/images/img-11.png" class="img"  alt=""></h3>

    <div class="img-box">
      <img src="@/assets/images/img-10.png" class="img" alt="">
    </div>
    <p class="info">88元现金红包</p>
    <div class="reply-box">
      <router-link to="/lottery/index" class="up-btn common-btn" btn>继续抽奖</router-link>
      <router-link to="/" class="pic common-btn">返回首页</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import isLogin from '@/hooks/isLogin';
const { isLoginFn } = isLogin()
isLoginFn()
</script>

<style scoped lang="scss" >
.eggs-page{
  padding-top: size(120);
}
.page-title{
  text-align: center;
  .img{
    display: block; 
    margin:0 auto size(43) ; width:size(147); height:size(30);
  }
}
.img-box{
  @include flex(center);
  width:size(307); height:size(187); border-radius: 12px; margin:0 auto size(16);
  background-color: $yellow;
  .img{
    width:size(280); height: size(155);
  }
}
.info{
  text-align: center; 
  font-size: size(20); margin-bottom: size(86);
  color:$yellow;
}
.reply-box{
  margin-bottom: size(40);
  .up-btn{
    margin-bottom: size(12);
  }
}
</style>