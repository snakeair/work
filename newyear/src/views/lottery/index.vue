<template>
  <div class="common-pages lottery " >
    <div class="common-logo"></div>
    <h3 class="page-title"><img class="img" src="@/assets/images/img-06.png" alt=""></h3>
    <section class="show-main">
      <h3 class="show-title">剩余奖池</h3>
      <h3 class="show-title-two">所有奖池奖品均可⻅</h3>
      <div class="prize-list">
        <div class="one" :class="[item.rank == 1 ? 'one' : 'other']" v-for="item in listData" >
          <div class="img-box"><img class="img" :src="item.pic" alt=""></div>
          <dl>
            <dt class="size">
              {{item.title}}
              ({{ item.remaining_num }}个)</dt>
            <dd class="info">{{ item.rankLevel }}</dd>
          </dl>
        </div>
        <!-- 
        <div class=" other two">
          <div class="img-box"><img class="img" src="@/assets/images/default/img-05.png" alt=""></div>
          <dl>
            <dt class="size">五等奖(240个)</dt>
            <dd class="info">定制口罩,独立包装</dd>
            <dd class="info">（3色/6个1盒）</dd>
          </dl>
        </div> -->
      </div>
    </section>
    <div class="prize-btn common-btn" @click="getPrizeFn" >立即抽奖</div>
  </div>
</template>

<script setup lang="ts">
import isLogin from '@/hooks/isLogin';
import { $get, $post } from '@/assets/js/axios';
import { indexStore } from '@/store';
import $message from '@/cart/message';
const store = indexStore()

const {isLoginFn} = isLogin()
isLoginFn()

const router = useRouter()



const getPrizeFn =async () => {
  let url = `/api.php/puzzle/lottery`
  let res:any = await $get(url)
  if(res.code == 0) {
    if (res.data.desc == '未中奖') {
      router.push({
        path: '/lottery/thanks'
      })
    } else {
      store.prize = {
        prize_name: res.data.prize.title,
        rankLevel: res.data.prize.rankLevel,
        prize_pic: res.data.prize.pic
      }
      router.push({
        path: '/lottery/end'
      })
    }
  } else {
    $message({
      type: 'error',
      msg: res.message
    })
  }
}

let listData = $ref<Array<any>>([])
const getDataFn = async () => {
  let url = `/api.php/puzzle/lottery-goods`
  let res:any = await $get(url)
  if(res.code == 0) {
    listData = res.data
  }
}
getDataFn()

</script>

<style scoped lang="scss" >
.lottery{
  padding-top: size(100);
}
.page-title{
  text-align: center;
  .img{
    display: block;
    width:size(306); height:size(30); margin:0 auto size(26); 
  }
}
.show-main{
  width:size(370); margin:0 auto; border-radius: 5px;  padding-top: size(20); padding-bottom: size(45); margin-bottom: size(58);
  background-color: rgba($color: $yellow, $alpha: 0.7);
  .show-title{
    text-align: center; font-weight: bold;
    font-size: size(16); margin-bottom: size(4);
    color:#000;
  }
  .show-title-two{
    text-align: center;
    font-size: size(12); margin-bottom: size(16); opacity: 0.6;
    color:#000;
  }
  .prize-list{
    @include flex(both, top);
    width:size(344); margin:0 auto;
    &>div{
      border-radius: 5px;
      background-color: #fff;
    }
    .one{
      @include flex(left, center);
      box-sizing: border-box;
      width:100%; height:size(92); padding-left: size(44); margin-bottom: size(8);
      .img-box{
        @include flex(center);
        width:size(72); height:size(72);  margin-right: size(50);
        .img{
          display: block;
          max-width: 100%; max-height:100%;
        }
      }
      dl{
        text-align: center;
        width:size(115);
      }
      .size{
        font-weight: 600;
        font-size: size(14); margin-bottom: size(6);
        color:#000;
      }
      .info{
        text-align: center;
        font-size: size(10);
        color:#000;
      }
    }
    .other{
      @include flex(left, center);
      box-sizing: border-box;
      width:size(168); height:size(92); margin-bottom:size(8); padding: size(10) size(6) 0 size(6);
      .img-box{
        @include flex(center);
        width:size(58); height:size(72);  margin-right: size(5);
        .img{
          display: block;
          max-width: 100%; max-height:100%;
        }
      }
      dl{
        text-align: center; 
        width:size(90)
      }
      .size{
        font-weight: 600;
        font-size: size(13); margin-bottom: size(6);
        color:#000;
      }
      .info{
        font-size: size(10);
        color:#000;
      }
    }
  }
}
.prize-btn{
    margin:0 auto 0;
}
</style>