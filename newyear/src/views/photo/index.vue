<template>
  <div class="common-pages photo-page " >
    <div class="common-logo"></div>
    <div class="show-box">
      <h3 class="show-title">心有千千“捷”</h3>
      <p>泛捷41年的风风雨雨离不开你的陪伴 </p>
      <p>晒出你与泛捷的靓照，获得抽取丰厚奖品机会</p>
      <br>
      <p>寻找你身边泛捷的LOGO</p>
      <p>摆出【比心】或【拜年】手势进行合影上传</p>
      <br>
      <p>*照片中必须出现【泛捷LOGO】,【清晰人脸（脱下口罩）】，【比心或拜年动作】</p>
      <router-link to="/photo/take" class="common-btn">立即拍照</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import isLogin from '@/hooks/isLogin';
const { isLoginFn } = isLogin()
isLoginFn()
</script>

<style scoped lang="scss" >
.photo-page{
  padding-top: size(150);
}
.show-box{
  position: relative;
  width:size(330); height:size(400); border-radius: 12px; margin:0 auto ;
  background-color: $yellow;
  .show-title{
    text-align: center; position: absolute; box-sizing: border-box;
    width:size(260); height:size(60); line-height: size(60); font-size: size(26); border-radius: size(30); margin-left: size(35); margin-top: size(-30); 
    background-color: #F5CF7D; color:#A2090C;
  }
  p{
    font-size: size(14); line-height: size(21); padding:0 size(16);
    color:#000;
    &:first-of-type{
      padding-top: size(70);
    }
  }
  .common-btn{
    display: block;
    margin-top: size(88);
  }
}
</style>