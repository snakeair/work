<template>
  <div class="index-page" v-load="loading" >
    <h1 class="page-title"><img class="logo" src="@/assets/images/img-01.png" alt=""></h1>
    <section class="floor size-main">
      <div class="size-box" >
        <span class="size"><em class="icon">￥</em>200,000</span>
        <span class="get-size" @click="getMoneyFn" >查看我的额度<em class="iconfont icon-xiangyoujiantou"></em></span>
      </div>
      <div class="news-list">
        <ul :class="{ anim: newsMove == true }">
          <li class="news" v-for="item in newsList" :key="item" >
            <span class="text" v-for="keys in item" Lkey="keys" >{{keys}}</span>
          </li>
          
        </ul>
      </div>
    </section>
    
    <section class="floor other-goods">
      <h3 class="title">产品推荐</h3>
      <h4 class="title-two">门槛低 放款快 更多机会等你选择</h4>
      <div class="list-main"  >
        <div class="goods-box" v-for="(item, index) in listData" :key="item.ID"  @click="getGoodsFn(item.ID)">
          <div class="title">
            <div class="img-box"><img :src="item.Logurl" class="img" alt=""></div>
            <span class="name">{{ item.Name }}</span>
            <span class="money">{{ item.TypeName }}</span>
          </div>
          <div class="info-box">
            <span class="time">借款周期：{{ item.Jkdays }}</span>
            <span class="lv">利率：{{ item.DayfeeRate }}</span>
          </div>
        </div>



       <!-- <div class="goods-box" @click="getMoneyFn">
          <div class="left">
            <div class="img-box"><img src="@/assets/images/default/img3.png" class="img" alt=""></div>
            <dl class="name-box">
              <dt class="name">幸福贷 </dt>
              <dd class="info">放心大平台</dd>
            </dl>
          </div>
          <dl class="money-box">
            <dt class="money">3.6<em class="icon">%</em> - 18<em class="icon">%</em></dt>
            <dd class="info">放心大平台</dd>
          </dl>
        </div> -->
      
      </div>
    </section>
    <section class="floor info-main ">
      <h3 class="title"><em class="line left"></em><span>用钱就找趣融分期</span><em class="line right"></em></h3>
      <div class="info-box" >
        <div class="img-box"><img class="img" src="@/assets/images/img1.png" alt=""></div>
        <span class="text">额度更优</span>
        <span class="text">精准匹配 最高30万</span>
      </div>
      <div class="info-box">
        <div class="img-box"><img class="img" src="@/assets/images/img2.png" alt=""></div>
        <span class="text">息费透明</span>
        <span class="text">免年费 免管理费</span>
      </div>
      <div class="info-box">
        <div class="img-box"><img class="img" src="@/assets/images/img3.png" alt=""></div>
        <span class="text">还款灵活</span>
        <span class="text">多种方式 自由选择</span>
      </div>
      <div class="info-box">
        <div class="img-box"><img class="img" src="@/assets/images/img4.png" alt=""></div>
        <span class="text">安全保障</span>
        <span class="text">信息加密 放款安全</span>
      </div>
      <div class="info-box">
        <div class="img-box"><img class="img" src="@/assets/images/img5.png" alt=""></div>
        <span class="text">专业快捷</span>
        <span class="text">线上申请 快速放款</span>
      </div>
      <div class="info-box"  >
        <div class="img-box"><img class="img" src="@/assets/images/img6.png" alt=""></div>
        <span class="text">额度更优</span>
        <span class="text">多家权威机构合作</span>
      </div>
    </section>
    <footer class="footer">
      <p class="footer-p">贷款有风险，借款需谨慎</p>
      <p class="footer-p">综合年化利率7.2%-24%（单利），具体以审批为准</p>
      <p class="footer-p">请根据个人能力合理贷款</p>
      <p class="footer-p">贷款额度、实际年化利率以放款机构审批结果为准</p>
      <p class="footer-p">渝公网安备 50019002501472号 渝ICP备18000384号-1</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import cookie from 'js-cookie';
import {$post, $get} from '@/assets/js/axios'
import { isNoneFn } from '@/assets/js/util';
import { isLoginFn } from '@/assets/js/mixins';
import { indexStore } from '@/store';
import $message from '@/cart/message';
const router = useRouter();
const store = indexStore()


const loading = ref<boolean>(true)

isLoginFn();

const getMoneyFn = () => {
  let result = cookie.get('result');
  if (result) {
    router.push({
      path: '/result',
      query: {
        ok: 1
      }
    })
  } else {
    router.push({
      path: '/address'
    })
  }
}

const listData = ref<Array<any>>([])
const getDataFn = () => {
  let url = `api.php/home/items/getitems?client=pc&package=h5&ver=1.1`
  $get(url, {}).then( (res: any) => {
    loading.value = false;
    if(res.result == 1) {
      listData.value = res.data
    } else {
      $message({
        type: 'error',
        msg: res.message
      })
    }
    
  })
}
getDataFn();

const getGoodsFn = (id: string) => {
  let url = `api.php/home/items/product`
  let data = {
    "token": cookie.get('token'),
    "client": "pc",
    "package": "h5",
    "ver": "v1.1",
    "id": id
  }
  $post(url, data).then( (res: any) => {
    if(res.result == 1) {
      if(res.data && res.data.url) {
        window.location = res.data.url
      } else {
        getMoneyFn();
      }
    } else {
      $message({
        type: 'error',
        msg: res.message
      })
    }
  })
}






// 滚动
const newsTimer = ref<any>(null);
const newsMove = ref<Boolean>(false);
const newsList = ref<Array<any>>([['年化利率3.6 % -18 %', '循环额度', '次日可还'], ['息费透明', '灵活借款', '极速审核'], ['门槛低', '放款快', '放心大平台']])
const newsMoveFn = () => {
  newsMove.value = true; // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
  setTimeout(() => {
    //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
    newsList.value.push(newsList.value[0]); // 将数组的第一个元素添加到数组的
    newsList.value.shift(); //删除数组的第一个元素
    newsMove.value = false; // margin-top 为0 的时候取消过渡动画，实现无缝滚动
  }, 1000);
}
newsTimer.value = setInterval(newsMoveFn, 2000);
</script>

<style scoped lang="scss">
@media only screen and (min-width: 800px) {
  .index-page {
    width: 600px;  margin: 0 auto 0;
    
  }
}
.index-page{
  min-height:100vh; padding-bottom: 5vh;
  background-color: $bg;
  .page-title{
    box-sizing: border-box;
    height: size(104); padding:size(26) size(30) ;  
    .logo{
      vertical-align: middle;
      width:size(526); height:size(42);
    }
  }


.size-main{
  box-sizing: border-box;
  width:size(690); height:size(290); margin:0 auto size(30); padding-left: size(83);
  background: url('@/assets/images/img-02.png') no-repeat center; background-size: 100%;
  .size-box{
    position: relative;
    padding-top: size(60); width:size(575); padding-bottom: size(20);
    border-bottom:1px solid rgba($color: $white, $alpha: 0.1);
    .size{
      font-size: size(73);  line-height: 1; 
      color:$white;
      .icon{
        font-size: size(56);
      }
    }
    .get-size{
      position: absolute;  vertical-align: middle; box-sizing: border-box;
      right:0; bottom:size(26); width:size(210); height:size(62); line-height: size(62); border-radius: size(31); padding-left: size(26); font-size: size(24);
      background: #f8d19f; color:#000;
      .iconfont{
        vertical-align: middle;  font-weight: bold; position: relative;
        margin-top: -4px; font-size: size(30); line-height: size(28);
        color: #000;
      }
    }
    &:after{
      content: '最高可借额度（元）';
      display: block;
      font-size: size(24);  line-height: 1; margin-top: size(20);
      color:$white;
    }
  }
}
  .news-list{
    overflow: hidden;
    width:100%;  height:size(36); margin-top: size(10);
    .news{
      overflow: hidden;
      font-size: size(24); line-height: size(36); height:size(36); width:100%;
      color:rgba($color: $white, $alpha: 0.4);
      .text{
        float: left;
        &:after{
          content: '/';
          color: rgba($color: $white, $alpha: 0.4); font-size: size(24); line-height: size(36); height:size(36);  margin: 0 size(15);
        }
        &:last-of-type{
          &:after{
            display: none;
          }
        }
      }
    }
    .anim {
      transition: all 1s;
      margin-top: calc(size(36) * -1) ;
    }
  }
}

.other-goods{
  box-sizing: border-box;
  width:size(690); margin:0 auto size(30); padding: 0 size(30); padding-top:size(30); border-radius: 10px; padding-bottom: size(30);
  background-color: #fff;
  .title{
    font-weight: bold;
    font-size: size(30); line-height: 1; margin-bottom: size(10);
    color:#161616;
  }
  .title-two{
    font-size: size(22); padding-bottom: size(40);
    color:#bbb; 
  }
  .goods-box{
    box-sizing: border-box;
    width:100%; padding-right: size(50); padding-bottom: size(20); margin-bottom: size(20);
    background:url('@/assets/images/img-03.png') no-repeat right center; background-size: size(35) ; border-bottom:1px solid #f0f0f0;
    &:last-of-type{
      border:none; margin-bottom: 0;
    }
    .title{
      overflow: hidden;
      width:100%;
      .img-box{
        float: left;
        width:size(50); height:size(50);  margin-right: size(10);
        .img{
          display: block;
          width: 100%;
        }
      }
      .name{
        float: left;
        font-size: size(32); line-height: size(50); 
        color:#333; 
      }
      .money{
        float: right;
        font-size: size(26); line-height: size(50);
        color:#666;
      }
    }
    .info-box{
      overflow: hidden;
      font-size: size(24); line-height: size(30);
      color:$orange;
      .lv{
        float: right;
        font-size: size(24); line-height: size(30);
      }
    }
  }
}
.info-main{
  @include flex(both, top); 
  box-sizing: border-box;
  width:size(690); padding-left:size(30); padding-right: size(30); margin:0 auto size(60); padding-top: size(30); padding-bottom: size(30); border-radius: 10px;
  background-color: #fff;
  .title{
    @include flex(both, center);
    font-weight: bold; 
    font-size: size(30); line-height: 1; ; margin:0 auto size(35); width:100%; 
    color:#161616;
    .line{
      display: inline-block;
      width:size(180);  height:1px;
      background: url('@/assets/images/img-04.png') no-repeat center; background-size: 100%;
      &.left{
        transform: rotate(180deg);
      }
    }
  }
  .info-box{
    text-align: center; 
    width:33%;  
    &:nth-child(-n+3){
      margin-bottom: size(25);
    }
    .img-box{
      display: block;
      width:size(50); height:size(50); margin:0 auto size(10);
      .img{
        display: block;
        width:100%;
      }
    }
    .text{
      display: inline-block;
      font-size: size(26); line-height: 1; 
      color:#161616;
      &:nth-of-type(2){
        font-size: size(20); margin-top: size(13);
        color:#aaa;
      }
    }
  }
}
.footer{
  text-align: center;
  .footer-p{
    font-size: size(20); line-height: size(26); margin-bottom: size(15); line-height: 1;
    color:#aaa;
    &:first-of-type{
      font-size: size(26); margin-bottom: size(25);
    }
  }
}
</style>