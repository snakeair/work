<template>
  <div class="address-pages" v-load="loading" >
    <div class="black-bg">
      <img src="@/assets/images/img-07.png" class="bg" alt="">
    </div>
    <div class="z10">
      <h1 class="pages-title"><img class="logo" src="@/assets/images/img-06.png" alt=""></h1>
      <div class="banner">
        <h3 class="money"><em class="icon">￥</em>200,000</h3>
        <p class="info">年化利率7.2%-24% <em>/</em> 循环额度 <em>/</em> 次日可还</p>
      </div>
      <h1 class="addr-title">请选择您所在的城市</h1>
      <section class="address-main" >
        <div class="sheng-list" v-for="(item) in list" :key="item.code">
          <h3 class="sheng-name">{{ item.letter }}</h3>
          <div class="city-list">
            <div @click="submitFn(item.name, keys.name)" class="city-name" :class="{ cur: curs == keys.name}"
              v-for="(keys) in item.data" :key="keys.code">{{keys.name}}</div>
          </div>
        </div>
        <!-- <div class="sheng-list" v-for="(item) in list" :key="item.code" >
          <h3 class="sheng-name" >{{ item.name }}</h3>
          <div class="city-list">
            <div @click="submitFn(item.name, keys.name)"  class="city-name" :class="{ cur: curs == keys.name}" v-for="(keys) in item.cityList" :key="keys.code" >{{keys.name}}</div>
          </div>
        </div> -->
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import cookie from 'js-cookie'
import {map} from '@/assets/js/map'
import $message  from '@/cart/message';
import { indexStore } from '@/store';

import {isLoginFn} from '@/assets/js/mixins'
import { $post } from '@/assets/js/axios';
isLoginFn();
const store = indexStore()
const loading = ref<boolean>(false)


const router = useRouter()
const list = ref<any>(map)
const curs = ref<string>('');



const submitFn = (sheng: string, city:string) => {
  curs.value = city;
  loading.value = true;
  let url = `/api.php/center/member/save_userInfo`
  let data = {
    "token": cookie.get('token'),
    "client": "pc",
    "package": "h5",
    "ver": "v1.1", 
    dynamic: {
      regProvince: sheng,
      regCity: city
    }
  }
  $post(url, data).then( (res: any) => {
    loading.value = false;
    if(res.result == 1) {
      store.holder.addr = {
        regProvince: sheng,
        regCity: city
      }
      router.push({
        path: '/question'
      })
    } else {
      $message({
        type: 'error',
        msg: res.message
      })
    }
  })
}



</script>

<style scoped lang="scss" >
.black-bg{
  position: absolute;
  z-index: 1; width: 100vw; height:size(230);
  .bg{
    display: block;
    width:100%; height:100%;
  }
}
.address-pages{
  .z10{
    position: relative;
    z-index: 10;
  }
  .pages-title{
    box-sizing: border-box;
    height:size(110); padding-left: size(30); padding-top: size(25); width:size(690); margin:0 auto 0;
    .logo{
      width:size(433); height:size(42);
    }
  }
  .banner{
    box-sizing: border-box;
    width:size(690); height:size(162); margin:0 auto 0; padding-left: size(60); padding-top: size(40);
    background: url('@/assets/images/img-05.png') no-repeat; background-size: 100%; 
    .money{
      font-size: size(55); line-height: 1; 
      color:$white;
      .icon{
        font-size: size(43);
      }
    }
    .info{
      font-size: size(24); opacity: 0.5; padding-left: size(10); margin-top: size(10); line-height: 1;
      color:$white;
      em{
        margin: 0 size(12);
      }
    }
  }
}
.addr-title{
  padding-left: size(32); font-size: size(30); margin-top: size(20);
  color:$orange;
}
.address-main{
  margin-top: size(30); 
  .sheng-list{
    width:size(690);  margin:0 auto size(30);
    border-bottom:1px solid $border;
    &:last-of-type{
      border:none;
    }
  }
  .sheng-name{
    font-weight: bold;
    font-size: size(30);
  }
  .city-list{
    overflow: hidden;
    padding:size(20) size(20) 0; width:100%; 
  }
  .city-name{
    display: inline-block; float: left; text-align: center; 
    height:size(60); line-height: size(60); padding:0 size(20); border-radius: 4px; margin-right: size(20); margin-bottom: size(20); min-width:size(100);
    border:1px solid #999; color:#666;
    &.cur{
      border-color:$orange; color:$orange;
    }
  }
}
</style>