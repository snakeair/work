<template>
  <div class="common-pages que-rank" v-load="loading"  >
    <h3 class="page-title">泛捷最强大脑</h3>
    <ul class="rank-list">
      <li class="li" v-for="item in listData" :key="item.rank" >
        <div class="term">
          <img v-if="(item.rank  == 1)"  class="img" src="@/assets/images/img-15.png" alt="">
          <img v-if="(item.rank  == 2)"  class="img" src="@/assets/images/img-16.png" alt="">
          <img v-if="(item.rank  == 3)"  class="img" src="@/assets/images/img-17.png" alt="">
          <span v-if="(item.rank > 3)">{{item.rank}}</span>
        </div>
        <div class="header"><img class="img" :src="item.avatar" alt=""></div>
        <dl>
          <dd class="name">姓名：{{ item.nickname }}</dd>
          <dd class="class">部门：{{ item.department }}</dd>
        </dl>
        <dl>
          <dd class="start">完成时间：{{ item.end_time.split(' ')[1] }}</dd>
          <dd class="end">总耗时：{{ item.use_seconds > 60 ? `${Math.floor(item.use_seconds / 60)}分${item.use_seconds % 60}秒` : `${item.use_seconds}秒` }}</dd>
        </dl>
      </li>
      <!-- <li class="li">
        <div class="term">4</div>
        <div class="header"><img class="img" src="@/assets/images/img-15.png" alt=""></div>
        <dl>
          <dd class="name">姓名：张明明</dd>
          <dd class="class">部门：财务部</dd>
        </dl>
        <dl>
          <dd class="start">完成时间：5分23秒</dd>
          <dd class="end">总耗时：5分23秒</dd>
        </dl>
      </li> -->
      
    </ul>

    <div class="my-rank">
      <header class="my-rank-header">
        <div class="left">我的名次： <em class="size">{{ myRank }}</em></div>
        <div class="right" @click="prizeFn" >查看我的奖品</div>
      </header>
      <router-link class="link common-btn" to="/">回到首页</router-link>
    </div>

    <div class="cloud" v-show="layerShow" ></div>
    <div class="layer layer-rank " :class="{none: none}"  v-show="layerShow" >
      <header class="header-img"><img src="" alt=""></header>
      <h3 class="layer-title">第{{myRank}}名</h3>
      <div class="img-box">
        <img :src="myPrize.pic" alt="">
      </div>
      <p class="info">{{ myPrize.title }}</p>
      <p class="nothing">未获得奖品</p>
      <div btn class=" common-btn" @click="closeFn">返回排行榜</div>
      <div class="close-btn iconfont icon-close22" @click="closeFn"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { $get } from '@/assets/js/axios';
import isLogin from '@/hooks/isLogin';
const {isLoginFn} = isLogin()
isLoginFn()

let loading = $ref<boolean>(true);

let layerShow = $ref<boolean>(false);
let none = $ref<boolean>(false)
const closeFn = () => {
  layerShow = false;
}
const prizeFn = () => {
  layerShow = true
}


let listData = $ref<Array<any>>([]);
let myRank = $ref<number>(0)
let myPrize = $ref<any>({})

const getDataFn = async () => {
  let url = `/api.php/puzzle/rank`
  let res:any = await $get(url)
  listData = res.data.rank
  myRank = res.data.myRank
  myPrize = res.data.prize
  if(res.data.myRank > 10) {
    none = true;
  }
  loading = false;
  
}
getDataFn()



</script>

<style scoped lang="scss" >
.que-rank{
  padding-top: size(30);
}
.page-title{
  text-align: center;
   margin-bottom: size(16); font-size: size(30);
    color: #FFED9E;
}
.rank-list{
  width:size(358); margin:0 auto; padding-bottom: size(180);
  .li{
    @include flex(left, center);
    box-sizing: border-box;
    width:size(358); height:size(86); border-radius: 12px; padding-left: size(8); margin-bottom: size(8);
    background-color: $yellow;
  }
  .term{
    text-align: center;
    width:size(40); height:size(40); margin-right: size(8); font-size: size(18);
    color:#9D6A00; line-height: size(40);
    .img{
      display: block;
      width:100%
    }
  }
  .header{
    @include flex(center);
    overflow: hidden;
    width:size(50); height:size(50); margin-right: size(8); border-radius: 50%;;
    .img{
      display: block;
      max-width:100%; max-height:100%;
    }
  }
  .name{
    text-align: left;
    font-size: size(14); width:size(110); line-height: size(24);
    color:#000
  }
  .class{
    text-align: left;
    font-size: size(14); width: size(110); line-height: size(24);
    color:#000
  }
  .start{
    text-align: left;
    font-size: size(12); line-height: size(24);
    color:#7C8087;
  }
  .end{
    text-align: left;
    font-size: size(12); line-height: size(24);
    color:#7C8087;
  }
}

.my-rank{
  position: fixed; box-sizing: border-box;
  left:0; bottom:0; width:100vw; height:size(162); padding-top: size(24); padding-left: size(16); padding-right: size(16); 
  background-color: #fff; border-top:1px solid $border;
  .my-rank-header{
    @include flex(both, center);
    .left{
      font-size: size(14);
      color:#000;
      .size{
        font-size: size(24);
        color:rgb(218, 165, 28);
      }
    }
    .right{
      font-size: size(14);
      color:#000
    }
  }
  .link{
    margin:size(28) auto 0;
  }
}

.layer-rank{
  width:size(390); height:size(474);
  background: url('@/assets/images/img-18.png') no-repeat top center; background-size: 100%;
  .layer-title{
    text-align: center; 
    font-size: size(20); padding-top: size(95);  margin-bottom: size(17);
    color:rgb(163, 117, 0);
  }
  .img-box{
    @include flex(center);
    width:size(220); height:size(165); margin:0 auto size(10);
    .img{
      display: block;
      max-width:size(270); max-height:size(190);
    }
  }
  .info{
    text-align: center;
    font-size: size(16); line-height: size(24); margin-top: 2px;  margin-bottom: size(12); line-height: 1;
    color:rgb(255, 247, 224);
  }
  .nothing{
    text-align: center; display: none;
    font-size: size(16); margin-bottom: size(100); line-height: 1;
    color:rgb(255, 247, 224);
  }
  .close-btn{
    position: absolute;
    width:size(30); height:size(30); border-radius: 50%; font-size: size(30);
    bottom:0; left:50%; transform: translateX(-50%); color:#fae4a3; opacity: 0.7;
  }
  &.none{
    .img-box{
      display: none;
    }
    .info{
      display: none;
    }
    .layer-title{
      margin-bottom: size(105);
    }
    .nothing{
      display: block;
    }
  }
}
</style>