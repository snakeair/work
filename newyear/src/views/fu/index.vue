<template>
  <div class="common-pages fu-page ">
    <div class="common-logo"></div>
    <h3 class="page-title"><img class="title" src="@/assets/images/img-13.png" alt=""></h3>
    <div class="xie-box  " >
      <div class="rotate-box" @touchstart="btnShowFn" >
      <div class="esign-box">
        <vue-esign ref="esign" :width="1000" :height="1000" :isCrop="isCrop" :lineWidth="lineWidth" :lineColor="lineColor"  v-model:bgColor="bgColor" />
      </div>
      </div>
    </div>
    <div class="btn-box" v-show="btnShow" >
      <div class="reset-btn" btn @click="handleReset" >重写</div>
      <div class="up-btn" btn @click="handleGenerate" >上传</div>
    </div>


    <div class="cloud" v-show="layerShow"  ></div>
    <div class="layer layer-ok" v-show="layerShow">
      <div class="iconfont icon-dui3"></div>
      <div class="title">上传成功</div>
      <router-link to="/speech" class="btn layer-btn common-btn">开始活动</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import vueEsign from 'vue-esign';
import { $upload } from '@/assets/js/upload';
import { toFileFn } from '@/assets/js/util'
import isLogin from '@/hooks/isLogin';
const { isLoginFn } = isLogin()
isLoginFn()

const lineColor = ref<any>('#333')
const lineWidth = ref<any>(10)
const isCrop = ref<any>(false)
const bgColor = ref<any>('')
const esign = ref<any>(null)

const handleReset = () => {
  esign.value.reset();
}


// 画板完成，提交审核 handleGenerate自己写的函数
const handleGenerate = () => {
  esign.value
    .generate()
    .then((res: any) => {
      let file = toFileFn(res)
      let formData = new FormData;
      formData.append('file', file)
      let url = `/api.php/puzzle/lucky-create`
      $upload(url, formData).then( res => {
        console.log(res);
        layerShow.value = true;
      })
    })
    .catch((err: any) => {
      // 画布没有签字时会执行这里
      console.log(err);
    });
}

let btnShow = $ref<boolean>(false);
const btnShowFn = () => {
  btnShow = true;
  
}

const layerShow = ref<boolean>(false);
const handleClose = () => {}

const startFn = () => {
  router.push({
    path: '/'
  })
}






</script>

<style scoped lang="scss" >
.fu-page{
  overflow-x: hidden;
  .common-logo{
    opacity: 0.42;
  }
}
.page-title{
  text-align: center;
  .title{
    width:size(410); height:size(171); margin-left: size(-10); margin-top: size(52);
  }
}
.btn-box{
  @include flex(center);
  width:90vw; margin:size(70) auto  0;
  div{
    @include btn-box(size(132), size(54), size(20), size(50));
    border-radius: 4px;
    color:#fff; background: url('@/assets/images/bg-08.png') no-repeat center; background-size: 100% 100%;
    &.reset-btn{
      margin-right: size(16);
    }
  }
}

.xie-box{
  margin-top: size(-20); height:size(408); position: relative;
  background: url('@/assets/images/img-01.png') no-repeat center; background-size: size(408);
}

.rotate-box{
  overflow: hidden; position: absolute;
  width: 75vw; height: 75vw;   left:12.8vw; top:15.5vw; border-radius: 10vw; 
  transform: rotate(45deg); 

}
.esign-box{
  position: absolute;
  transform:rotate(-45deg); width:100vw; height:100vw;left:-12vw; top:-12vw;
}

.layer-ok{
  box-sizing: border-box;
  width:size(326); height:size(300); padding-top: size(52);
  div{
    text-align: center;
  }
  .iconfont{
    font-size: size(45); margin-bottom: size(28);
    color:#07C160;
  }
  .title{
    font-size: size(24); margin-bottom: size(55);
    color:#000;
  }
  .layer-btn{
  }
}
</style>