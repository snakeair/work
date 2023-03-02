<template>
  <div class="common-pages que-one" >
    <h3 class="page-title">第一题</h3>
    <p class="page-take" v-html="dataInfo" ></p>
    <div class="img-box">
      <img :src="imgSrc" class="img" alt="">
    </div>
    <div class="reply-box">
      <label class="pic common-btn">
        <input type="file" @change="upFn" accept="image/*" capture="camera">立即拍照
      </label>
      <label class="pic common-btn">
        <input type="file" @change="upFn" accept="image/*;">从照片库中选择
      </label>
      <div class="up-btn common-btn" @click="submitFn" btn>立即提交</div>
    </div>
    <router-link class="to-rank" to="/question/rank">查看答题排行榜</router-link>

    <div class="cloud" v-show="layerShow !== ''"></div>
    <div class="layer layer-up" v-show="layerShow == 'up'" >
      <div class="iconfont icon-dui3"></div>
      <p class="info">上传成功</p>
      <router-link to="/question/two" class="close-btn common-btn" btn>下一题</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { $get, $post } from '@/assets/js/axios';
import { $upload } from '@/assets/js/upload';
import $message from '@/cart/message';
import isLogin from '@/hooks/isLogin';
const { isLoginFn } = isLogin()
isLoginFn()
let layerShow = $ref<string>('')

let dataInfo = $ref<string>('')
let timer = 0
let t:any = null

const getDataFn =async () => {
  let url = `/api.php/puzzle/subject`
  let res: any = await $get(url, {})
  dataInfo = res.data.title
  t = setInterval(function () {
    timer++
  }, 1000)
}
getDataFn()


let formData = new FormData();

const submitFn = async () => {
  if(!formData.get('file')) {
    return false;
  }
  let url = `/api.php/puzzle/first`
  clearInterval(t)
  t = null
  formData.set('use_seconds', `${timer}`)
  formData.set('puzzle_id', '1')
  let res: any = await $upload(url, formData)
  console.log(res);
  if(res.code == 0) {
    layerShow = 'up';
  } else {
    $message({
      type: 'error',
      msg: res.message
    })
  }
  
}

let imgSrc = $ref<string>('')
const upFn = (e: any) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (temp: any) {
    imgSrc = temp.target.result
  }
  reader.readAsDataURL(file)
  formData.set('file', file)
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
  font-size: size(16); margin-bottom: size(20);
  color:#fff;
}
.img-box{
  @include flex(center);
  width:size(330); height:size(330); border-radius: 12px;  margin:0 auto size(27);
  background-color: $yellow;
  .img{
    display: block;
    width:100%;
  }
}
.reply-box{
  margin-bottom: size(40);
  .pic{
    margin-bottom: size(12);
    input{
      display: none;
    }
  }

}
.to-rank{
  display: block; text-align: center;
  font-size: size(14); margin:0 auto; width: size(100); margin-bottom: size(50);
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
  width:size(330); height:size(290); padding-top: size(50);
  .iconfont{
    text-align: center; 
    margin:0 auto; line-height: 1; font-size: size(50); margin-bottom: size(20);
    color:#07C160;
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
</style>

