<template>
  <div class="common-pages que-one" >
    <h3 class="page-title">第三题</h3>
    <p class="page-take" v-html="dataInfo" ></p>
    <div class="img-box">
      <img src="" class="img" alt="">
    </div>
    <div class="reply-box">
      <input type="text" v-model="msg" class="input" placeholder="请输入你的答案" >
      <div class="up-btn common-btn" @click="submitFn" btn>立即提交</div>
    </div>
    <router-link class="to-rank" to="/question/rank">查看答题排行榜</router-link>

    <div class="cloud" v-show="layerShow !== ''"></div>
    <div class="layer layer-ok" v-show="layerShow == 'error'">
      <div class="iconfont icon-close2"></div>
      <p class="info">回答错误</p>
      <div class="close-btn common-btn" @click="closeFn" btn>重新答题</div>
    </div>
    <div class="layer layer-up" v-show="layerShow == 'ok'">
      <div class="iconfont icon-dui3"></div>
      <p class="info">恭喜！回答正确</p>
      <p class="info">你是第<em class="size">{{ myRank }}</em>个回答正确的人</p>
      <router-link to="/question/rank" class="close-btn common-btn" btn  >查看名次</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { $get, $post } from '@/assets/js/axios';
import isLogin from '@/hooks/isLogin';
const { isLoginFn } = isLogin()
isLoginFn()
let layerShow = $ref<string>('')
let dataInfo = $ref<string>('')
let timer = 0
let t: any = null
let msg = $ref<string>('')

const getDataFn = async () => {
  let url = `/api.php/puzzle/subject`
  let res: any = await $get(url, {})
  dataInfo = res.data.title
  t = setInterval(function () {
    timer++
  }, 1000)
}
getDataFn()

let myRank = $ref<number>(0)
const submitFn = async () => {
  let url = `/api.php/puzzle/answer-subject`
  let data = {
    puzzle_id: 3,
    answer: msg,
    use_seconds: timer
  }
  let res: any = await $post(url, data);
  if (res.code == 0) {
    layerShow = 'ok'
    myRank = res.data.rank
  } else {
    layerShow = 'error'
  }

}

const closeFn = () => {
  layerShow = ''
}

</script>

<style scoped lang="scss" >
.que-one{
  padding-top: size(40);
}
.page-title{
  text-align: center;
  font-size: size(30);  margin-bottom: size(10);
  color:#FFED9E;
}
.page-take{
  text-align: center;
  font-size: size(16); margin-bottom: size(60);
  color:#fff;
}
.img-box{
  width:size(340); height:size(190); border-radius: 5px;  margin:0 auto size(40);
  background-color: $yellow;
  .img{
    display: block;
    width:100%;
  }
}
.reply-box{
  margin-bottom: size(110);
  .input{
    @include inp-box(size(340), size(44), 0, size(16));
    text-align: center;
    border-radius: 4px; margin:0 auto size(80);
    border:1px solid $red;
  }
  .up-btn{
  }
}
.to-rank{
  display: block; text-align: center;
  font-size: size(14); margin:0 auto; width: size(100);
  color:#006BCE; border-bottom:1px double #006BCE;
}

.layer-ok{
  box-sizing: border-box;
  width:size(330); height:size(290); padding-top: size(50);
  .iconfont{
    text-align: center; 
    margin:0 auto; line-height: 1; font-size: size(50); margin-bottom: size(20);
    color:#FA5151;
  }
  .info{
    text-align: center;
    font-size: size(20); margin-bottom: size(50);
    color:#000;
  }
  .close-btn{
    margin:0 auto 0;
  }
}
.layer-up{
  box-sizing: border-box;
  width:size(330); height:size(290); padding-top: size(40);
  .iconfont{
    text-align: center; 
    margin:0 auto; line-height: 1; font-size: size(50); margin-bottom: size(16);
    color:#07C160;
  }
  .info{
    text-align: center;
    font-size: size(20); line-height: size(30);
    color:#000;
    .size{
      color:rgb(255, 71, 71);
    }
  }
  .close-btn{
    margin:size(18) auto 0;
  }
}
</style>