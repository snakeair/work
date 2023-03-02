<template>
  <div class="common-pages eggs-page" >
    <div class="common-logo"></div>
    <h3 class="page-title"><img src="@/assets/images/img-06.png" class="img"  alt=""></h3>

    <div class="img-box">
      <img src="@/assets/images/img-12.png" class="img" alt="">
    </div>
    <div class="reply-box">
      <a class="common-btn down-btn" href="src/assets/images/img-12.png?response-content-type=application/octet-stream"  download="大展宏图.png"  btn>下载壁纸</a>
      <router-link to="/" class="common-btn">返回首页</router-link>
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
  padding-top: size(100);
}
.page-title{
  text-align: center;
  .img{
    display: block; 
    margin:0 auto size(16) ; width:size(306); height:size(30);
  }
}
.img-box{
  @include flex(center);
  width:size(245); height:size(430);  margin:0 auto size(34);
  .img{
    width:100%; height: 100%;
  }
}
.info{
  text-align: center; font-weight: bold;
  font-size: size(20); margin-bottom: size(86);
  color:$yellow;
}
.reply-box{
  margin-bottom: size(40);
  .down-btn{
    margin-bottom: size(12);
  }
}
</style>