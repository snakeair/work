<template>
  <div  class="common-pages que-index" >
    <div class="common-logo"></div>
    <section class="show-main" >
      <h3 class="show-title">泛捷最强大脑</h3>
      <div class="info">
        <p>谁才是泛捷最聪明的人？</p>
        <p class="mb10">快和小伙伴一起破解谜题赢取终极大奖</p>
        <p>*总共三题，每回答正确一题将解锁下一题
        前5位解出所有谜题的小伙伴将获得终极</p>
        <p>大奖：电动牙刷套装</p>
      </div>
      <ul class="question-list" v-if="(listData.length > 0)"  >
        <li class="li " :class="[size == 0 ? 'show' : 'end']" @click="questionFn(0)"  >
          <p class="title" ><span v-html="listData[0].title"></span><em class="iconfont icon-dui3"></em></p>
        </li>
        <li class="li " @click="questionFn(1)" :class="{ show: size == 1, end: listData[1].is_answer == true, }" >
          <p  class="title"><span v-html="listData[1].title"></span><em class="iconfont icon-dui3"></em></p>
          <p class="other">回答完成第一题后开启</p>
        </li>
        <li class="li " @click="questionFn(2)" :class="{ show: size == 2, end: listData[2].is_answer  == true}">
          <p  class="title"><span v-html="listData[2].title"></span><em class="iconfont icon-dui3"></em></p>
          <p class="other">回答完成第二题后开启</p>
        </li>
      </ul>
      <router-link class="to-rank" to="/question/rank">查看答题排行榜</router-link>
    </section>
  </div>
</template>

<script setup lang="ts">
import isLogin from '@/hooks/isLogin'
import { $get } from '@/assets/js/axios';
import $message from '@/cart/message';

const {isLoginFn} = isLogin()
isLoginFn();


const router = useRouter()
let size = $ref<number>(0)

const questionFn =  (index:number) => {
  switch (index) {
    case 0: 
      let url = `/api.php/member/info`;
      if (size == 0) {
        $get(url).then( (res:any) => {
          if (res.data.puzzleAnswerStatus) {
            $message({
              msg: '正在审核第一题，请稍等'
            })
            return;
          } else {
            router.push({
              path: '/question/one'
            })
          }
        })
      }
      break;
    case 1:
      if(size == 1) {
        router.push({
          path: '/question/two'
        })
      }
      break;
    case 2:
      if(size == 2){
        router.push({
          path: '/question/three'
        })
      }
      break;
  }
}

let listData = $ref<Array<any>>([])

const getDataFn = async () =>  {
  const url = `/api.php/puzzle/all-subject`;
  let res:any = await $get(url);
  listData = res.data;
  size = listData.findIndex( el => {
    return el.is_answer == false
  })
  console.log(size);
  
}

getDataFn()

</script>

<style scoped lang="scss" >
.que-index{
  padding-top: size(100);
  .show-main{
    position: relative; box-sizing: border-box;
    width:size(330); height:size(550); border-radius: 12px; margin:0 auto 0; padding-top: size(65);
    background-color: $yellow;
    .show-title{
      text-align: center;  position: absolute;
      width:size(270); height:size(60); font-size: size(24); line-height: size(60);  border-radius: size(30);  left:size(30); top:calc(size(30) * -1);
      background-color: #F5CF7D;  color:#A2090C;
    }
  }
  .info{
    width:size(290); margin:0 auto size(50);
    &>p{
      font-size: size(14); line-height: size(20);
      color:#000;
      &.mb10{
        margin-bottom: size(10);
      }
    }
  }
  .question-list{
    .li{
      @include flex(center);
      box-sizing: border-box;
      width:size(290); height:size(59); margin:0 auto size(16); padding:size(6) 0 size(10);
      background: url('@/assets/images/bg-11.png') no-repeat center; background-size: 100%;
      &>p{
        text-align: center;
        width:100%;
        &.title{
          font-size: size(18); line-height: size(20);
          color:#fff;
          .iconfont{
            display: none; text-align: center;
            margin-left: 4px; width:size(14); height:size(14); line-height: size(14);
            color:#07C160; background-color: #fff; border-radius: 50%;
          }
        }
        &.other{
          font-size: size(10); opacity: 0.5;
          color:#fff;
        }
      }
      &.end{
        background-image: url('@/assets/images/bg-09.png');
        .title{
          .iconfont {
              display: inline-block;
            }
        }
        .other{
          display: none;
        }
      }
      &.show{
        background-image: url('@/assets/images/bg-09.png');
        .other{
          display: none;
        }
      }
    }
  }
}
.to-rank{
  display: block; text-align: center;
  font-size: size(14); margin:size(47) auto 0; width: size(100); 
  color:#006BCE; border-bottom:1px double #006BCE;
}

</style>

<style lang="scss">
.question-list{
  .title{
    p{
      display: inline;
    }
  }
}
</style>