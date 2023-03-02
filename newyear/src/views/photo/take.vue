<template>
  <div class="common-pages que-one" >
    <div class="common-logo"></div>
    <h3 class="page-title"><img class="img" src="@/assets/images/img-08.png" alt=""></h3>
    <div class="img-box">
      <img :src="imgSrc" class="img" alt="">
    </div>
    <div class="reply-box"  >
      <div class="common-btn" @click="layerSubmitFn"  btn>立即上传</div>
      <label class="pic common-btn"  >
        <input type="file" @change="upFn"  accept="image/*;">从照片库中选择
      </label>
      <label class="pic common-btn">
        <input type="file" @change="upFn" accept="image/*" capture="camera">{{ text ? '立即拍摄' : '重新拍摄'}}
      </label>
    </div>

    <div class="cloud"  v-show="layerShow || layerSubmit"></div>
    <div class="layer layer-eggs" v-show="layerShow" >
      <p class="info">恭喜您是第41（82、123、164）位提交的员工，与走过41年的泛捷有着不解之缘，特此送上隐藏奖励</p>
      <router-link to="/photo/eggs" class="common-btn">查看奖励</router-link>
      <div class="close-btn iconfont icon-close22"></div>
    </div>

    <div class="layer layer-submit" v-show="layerSubmit" >
      <p>确认上传吗？</p>
      <p>照片只有一次上传机会，</p>
      <p>若审核不通过将取消</p>
      <p>兑奖资格哦～</p>
      <div class="btn-box">
        <div class="close-btn " @click="closeFn" >返回重拍</div>
        <div class="up-btn " @click="submitFn" >确认上传</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { $upload } from '@/assets/js/upload';
import isLogin from '@/hooks/isLogin';
import $message from '@/cart/message';
const router = useRouter()
const {isLoginFn} = isLogin()
isLoginFn()

let layerShow = $ref<boolean>(false)
let text = $ref<boolean>(true);
let formData = new FormData();

let imgSrc = $ref<string>('')

const upFn = (e:any) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (temp:any) {
    imgSrc = temp.target.result
  }
  reader.readAsDataURL(file)
  formData.set('file', file)
  text = false;
}

let layerSubmit = $ref<boolean>(false);
const layerSubmitFn = () => {
  if(formData.get('file')) {
    layerSubmit = true;
  }
}
const closeFn = () => {
  layerSubmit = false;
}

const submitFn = async () => {
  let url = `/api.php/puzzle/group-photo`
  let res:any = await $upload(url, formData)
  if(res.code == 0) {
    if(res.data.rank && res.data.rank != '') {
      layerShow = true;
      layerSubmit = false;
    } else {
      router.push({
        path: '/photo/end'
      })
    }
  } else {
    $message({
      type: 'error',
      msg: res.message
    })
  }
  
}


</script>

<style scoped lang="scss" >
.que-one{
  padding-top: size(100);
}
.page-title{
  text-align: center;
  .img{
    display: block;
    margin:0 auto size(20); width:size(245); height:size(30);
  }
}

.img-box{
  @include flex(center);
  width:size(300); height:size(400); border-radius: 12px;  margin:0 auto size(40);
  background-color: $yellow;
  .img{
    display: block;
    max-width:100%; max-height:100%;
  }
}
.reply-box{
  margin-bottom: size(40);
  .pic{
    margin-top: size(12);
    input{
      position: absolute; display: none;
    }
  }
}


.layer-eggs{
  padding-top: size(30); width:size(390); height:size(473);
  background: url('@/assets/images/bg-10.png') no-repeat center; background-size: 100% ;
  .info{
    font-size:size(16); width:size(248); line-height: size(24); margin:0 auto size(14); line-height: size(24); padding-top: size(255);
    color:rgb(255, 247, 224);
  }
  .close-btn{
    position: absolute;
    width:size(30); height:size(30); border-radius: 50%; font-size: size(30);
    bottom:0; left:50%; transform: translateX(-50%); color:#fae4a3; opacity: 0.7;
  }
}

.layer-submit{
  box-sizing: border-box;
  width:size(326); height:size(292); padding-top: size(56);
  background-color: #fff;
  p{
    text-align: center;
    font-size: size(20); line-height: size(30);
    color:#000;
  }
  .btn-box{
    @include flex(both, center);
    width:size(283); margin:size(38) auto 0;
    .close-btn{
      text-align: center;
      width:size(131); height:size(54); line-height: size(50); font-size: size(18);
      color:#fff; background: url('@/assets/images/bg-08.png') no-repeat center; background-size: 100%;
    }
    .up-btn{
      @extend .close-btn;
    }
  }
}
</style>

