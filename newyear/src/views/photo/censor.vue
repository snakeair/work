<template>
  <div v-load="loading" >
    <div class="common-pages que-one" v-if="!loading" >
      <div class="common-logo"></div>
      <h3 class="page-title"><img class="img" src="@/assets/images/img-09.png" alt=""></h3>
      <div class="img-box" :class="{wait: type == 0}" >
        <div class="type" v-show="(type != 0)" :class="{ok: type == 1, error: type == 2}"  >
          <span v-show="(type == 1)" >审核成功</span>
          <span v-show="(type == 2)" >审核失败</span>
        </div>
        <img :src="dataInfo.picture" class="img" alt="">
      </div>
      <div class="reply-box">
        <div @click="prizeFn" class="pic common-btn ">查看抽奖</div>
        <router-link to="/"   class="up-btn common-btn" btn>返回首页</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { $get } from '@/assets/js/axios';
import router from '@/router';
import { indexStore } from '@/store';
import isLogin from '@/hooks/isLogin';
const { isLoginFn } = isLogin()
isLoginFn()
let loading = $ref<boolean>(true)
const store = indexStore()


const prizeFn = () => {
  if (store.prize.prize_name == "thanks") {
    router.push({
      path: '/lottery/thanks'
    })
  } else {
    router.push({
      path: '/lottery/end'
    })
  }
}

let type = $ref<number>(0);
let dataInfo = $ref<any>(null)
const getDataFn =async () => {
  let url = `/api.php/puzzle/my-photo`;
  let res:any = await $get(url)
  dataInfo = res.data
  type = res.data.status
  console.log(type);
  
  if(type == 2) {
    router.push({
      path: '/lottery/sorry'
    })
  }
  loading = false;
}
getDataFn()
</script>

<style scoped lang="scss" >
.que-one{
  padding-top: size(100);
}
.page-title{
  text-align: center;
  .img{
    display: block;
    margin:0 auto size(20); width:size(184); height:size(30);
  }
}

.img-box{
  @include flex(center);
  position: relative; overflow: hidden;
  width:size(300); height:size(400); border-radius: 12px;  margin:0 auto size(40);
  background-color: $yellow;
  &.wait{
    background: rgb(203, 206, 212);
    &:before{
      content: '审核中…';
      position: absolute;
      left:50%; top:50%; transform: translate(-50%, -50%); font-size: size(24);
      color:rgb(34, 34, 34);
    }
  }
  .img{
    display: block;
    width:100%;
  }
  .type{
    position: absolute; text-align: center;
    right:0; top:0; width:size(90); height:size(36); line-height: size(36); font-size: size(14); border-bottom-left-radius: 10px;
    color:#fff;
    &.ok{
      background-color: #07C160;
    }
    &.error{
      background-color: #FF941A;
    }
  }
}
.reply-box{
  margin-bottom: size(40);
  .common-btn{
    margin-bottom: size(12);
  }
}
.to-rank{
  display: block; text-align: center;
  font-size: size(14); margin:0 auto; width: size(100);
  color:#006BCE; border-bottom:1px double #006BCE;
}

.layer-up{
  box-sizing: border-box;
  width:size(330); height:size(290); padding-top: size(50);
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
    @include btn-box(size(230), size(44), size(18), size(44));
    margin:0 auto 0;
    background-color: $red; color:$white;
  }
}


</style>

