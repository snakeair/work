<template>
  <div class="common-pages lottery-end" v-load="loading"  >
    <div class="common-logo"></div>
    <h3 class="page-title" v-if="goodsData.prize_name == '一等奖'" ><img src="@/assets/images/img-001.png" class="img" alt=""></h3>
    <h3 class="page-title" v-if="goodsData.prize_name == '二等奖'"><img src="@/assets/images/img-002.png" class="img" alt=""></h3>
    <h3 class="page-title" v-if="goodsData.prize_name == '三等奖'"><img src="@/assets/images/img-003.png" class="img" alt=""></h3>
    <h3 class="page-title" v-if="goodsData.prize_name == '四等奖'"><img src="@/assets/images/img-004.png" class="img" alt=""></h3>
    <h3 class="page-title" v-if="goodsData.prize_name == '五等奖'"><img src="@/assets/images/img-005.png" class="img" alt=""></h3>
    <div class="img-box">
      <img :src="goodsData.prize_pic" class="img" alt="">
    </div>
    <p class="info">{{ goodsData.rankLevel }}</p>
    <p class="info">{{getTimer}}</p>
    <router-link to="/" class="link common-btn">返回首页</router-link>
    <!-- <div  class="link common-btn" @click="clickFn" >返回首页</div> -->
  </div>
</template>

<script setup lang="ts">
import { $get } from '@/assets/js/axios'
import img1 from '@/assets/images/img-001.png'
import img2 from '@/assets/images/img-002.png'
import img3 from '@/assets/images/img-003.png'
import img4 from '@/assets/images/img-004.png'
import img5 from '@/assets/images/img-005.png'

import isLogin from '@/hooks/isLogin'
import router from '@/router'
const {isLoginFn} = isLogin()
isLoginFn()

let imgArr = $ref<Array<any>>([img1, img2, img3, img4, img5])

let loading = $ref<boolean>(true)

let goodsData = $ref<tsAny>({})
let getTimer = $ref<string>('')

const getDataFn =async () => {
  let url = `/api.php/member/lottery`
  let res:any = await $get(url)
  loading = false;
  if(res.code == 0) {
    if (res.data.notLottery) {
      router.push({
        path: '/lottery/thanks'
      })
      return;
    }
    goodsData = res.data.prizeLog[0]
    getTimer = res.data.address;
    
  }
}
getDataFn()



</script>

<style scoped lang="scss" >

.lottery-end{
  padding-top: size(130);
}
.page-title{
  text-align: center;
  .img{
    width:size(258); height:size(52); margin:0 auto size(35);
  }
}
.img-box{
  @include flex(center);
  width:size(180); height:size(180); margin:0 auto size(14); border-radius: 8px; 
  background-color: #fff;
  .img{
    display: block;
    max-width: size(148); max-height:size(148);
  }
}
.info{
  text-align: center;
  width:size(180); margin:0 auto; font-size: size(14); line-height: size(21);
  color:$yellow;
  &:first-of-type{
    margin-bottom: 4px;
  }
}
.link{
  margin-top: size(47);
}
</style>