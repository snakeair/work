<template>
  <div class="black-bg">
    <img src="@/assets/images/img-07.png" class="bg" alt="">
  </div>
  <div class="reg-pages">
    <div class="z10">
    <h1 class="pages-title"><img class="logo" src="@/assets/images/img-06.png" alt=""></h1>
    <div class="banner">
      <h3 class="money" ><em class="icon">￥</em>200,000</h3>
      <p class="info">年化利率7.2%-24% <em>/</em> 循环额度 <em>/</em> 次日可还</p>
    </div>
    <div class="form-box" >
      <h3 class="form-title">请填写真实姓名和身份证</h3>
      <h3 class="form-title-two">根据监管要求身份证信息仅用于实名认证</h3>
      <form name="login" id="login-form" @submit.native.prevent >
        <div class="form-list">
          <input class="input" type="text" maxlength="11" v-model="loginForm.name" placeholder="请输入您的姓名" >
        </div>
        <div class="form-list form-code ">
          <input class="input code" type="text" maxlength="11" v-model="loginForm.mobile" placeholder="请输入您的手机号码">
          <p class="error" v-show="error.type" >{{error.msg}}</p>
        </div>
        <button class="form-btn"  type="submit"  @click="submitFn()">立即申请</button>
      </form>
      <div class="pact">
        <span class="checkbox" @click="checkboxFn" >
          <img v-show="!regCheck" class="img" src="@/assets/images/img-08.png" alt="">
          <img v-show="regCheck" class="img" src="@/assets/images/img-088.png" alt="">
        </span>
        我已阅读并同意<router-link to="/pact/person" >《个人信息共享授权书》</router-link>
      </div>
      <p class="reged">已注册用户<router-link class="a" to="/login" >点击登录</router-link></p>
    </div>
    <footer class="footer">
      <p class="footer-p">贷款有风险，借款需谨慎</p>
      <p class="footer-p">综合年化利率7.2%-24%（单利），具体以审批为准</p>
      <p class="footer-p">请根据个人能力合理贷款</p>
      <p class="footer-p">贷款额度、实际年化利率以放款机构审批结果为准</p>
    </footer>
    </div>

  </div> 
</template>

<script setup lang="ts">
import {phoneFn} from '@/assets/js/util'


const loginForm = reactive<tsRegForm>({
  name: '',
  mobile: ''
})
const regCheck = ref<boolean>(false)
const getCode = reactive<tsGetCode>({
  timer: 60,
  show: true,
})
const error = reactive<tsError>({
  msg: '',
  type: false,
});
const submitFn = () => {
  let bl = phoneFn(loginForm.mobile)
  if(!bl) {
     error.type = true;
     error.msg = '请输入正确的手机号码'
    return false;
  }
  
  if(!regCheck.value) {
    error.type = true;
    error.msg = '同意注册协议才可进行下一步'
    return false;
  }
  error.type = false;
  getCodeFn();
  layerShow.value = 'codeShow';
}

// 条款同意
const checkboxFn = () => {
  regCheck.value = !regCheck.value
}


const codeErr = ref<boolean>(false,)
// 获取验证码
const getCodeFn = () => {
  let url = ``
  getCode.show = false;
  setInterval(() => {
    if (getCode.timer === 1) {
      getCode.timer = 60;
      getCode.show = true;
    } else {
      getCode.timer--
    }
  }, 1000)
}

// 弹窗展示
const layerShow = ref<string>('');
const closeFn = () => {
  layerShow.value = ''
}


// 注册
const regFn = () => {
  let url = ``;
  
}

</script>

<style scoped lang="scss">
@media only screen and (min-width: 800px) {
  .reg-pages{
    width: 500px;
    margin: 0 auto 0
  }
}
.black-bg{
    position: absolute;
    z-index: 1; width: 100vw; height:size(230);
    .bg{
      display: block;
      width:100%; height:100%;
    }
  }
.reg-pages{
  min-height: 100vh; margin:0 auto 0;
  background-color: #fff;
  
  .z10{
    position: relative;
    z-index: 10;
  }
  .pages-title{
    box-sizing: border-box;
    height:size(110); padding-left: size(30); padding-top: size(25);
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
  .form-box{
    width: size(630); margin:0 auto 0; padding-top: size(30); 
    .form-title{
      font-weight: bold;
      font-size: size(28);
      color:$orange;
    }
    .form-title-two{
      font-size: size(24); margin-bottom: size(40);
      color:#999
    }
    .form-list{
      margin-bottom: size(30);
      &:nth-of-type(2){
        margin-bottom: size(70);
      }
    }
    .input{
      box-sizing: border-box; 
      width:100%;  height:size(88); line-height: size(88); padding-left: size(30);  width:100%; font-size: size(28); 
      background-color: rgba($color: #fff, $alpha: 0); color:#666; border-bottom: 1px solid $border;
      transition: all .5s;
      &:focus{
        border-color:$web1;
      }
    }
    .error{
      position: absolute;
      font-size: size(20); line-height: 1; margin-top: size(10);
      color:$red;
    }
  .form-btn{
    text-align: center;
    width:100%; height:size(88); line-height: size(88); border-radius: size(44); font-size: size(34);
    background-color: $web3;  color:#fff; background-image: linear-gradient(94deg, #fd751c 0%, #f34638 100%);
    
  }
  
  .form-code{
    position: relative;
  }
  
}
  .pact{
    vertical-align: middle; 
    margin-top: size(40); font-size: size(22); margin-bottom: 20px;
    .checkbox{
      vertical-align: middle;  display: inline-block;
      margin-top: -2px; margin-right: 4px; width:size(25); height:size(25);
      .img{
        display: block;
        width:100%;
      }
    }
    a{
      font-size: size(22);
      color:$orange;
    }
  }
  .reged{
    text-align: center;
    font-size: size(26); margin-bottom: 60px;
    color:#000;
    .a{
      text-decoration: underline; 
      margin-left: 4px; font-size: size(26);
      color:$orange;
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
}
.layer-mobile{
  box-sizing: border-box;
  width:size(690); padding:0 size(30) size(50) size(30); height:size(380);
  background-color: #fff;
  .layer-title{
    text-align: center; vertical-align: middle; font-weight: bold;
    font-size: size(30); line-height: size(40); height:size(40); margin-top: size(44); margin-bottom: size(30);
    color:$orange;
    .icon{
      display: inline-block;  vertical-align: middle;
      width:size(40); height:size(40); margin-right: 5px; margin-top: -2px;
      .img{
        display: block;
        width:100%;
      }
    }
  }

  .code-form{
    position: relative;
    width:100%; margin-bottom: size(60);
    .input{
      box-sizing: border-box;
      width:100%; line-height: size(88); height: size(88); padding-left: size(30); font-size: size(28);
      color:#333; border-bottom:1px solid $border;
      transition: all 0.5s;
      &:hover{
        border-color:$orange;
      }
    }
    .error{
      position: absolute;
      font-size: size(22); margin-top: 4px;
      color:$red;
    }
    .get-code-btn{
      text-align: center;  position: absolute;
      font-size: size(28); width:size(220); height:size(88); line-height: size(88);  right:0; bottom:0;
      color:$web1;
        &:before{
        content: '';
        display: block; position: absolute;
        width:1px; height:20px; margin-top: 10px;
        background-color: $border;
      }
    }
    .wait-code{
      @extend .get-code-btn;
      color:#888888;
      em{
        color:#f34837;
      }
    }
  }
  .form-btn{
    text-align: center;
    width:100%; height:size(88); line-height: size(88); border-radius: size(44); font-size: size(34);
    background-color: $web3;  color:#fff; background-image: linear-gradient(94deg, #fd751c 0%, #f34638 100%);
    
  }
}
.layer-address{
  width:size(690); height:size(536);
  .layer-title{
    text-align: center; vertical-align: middle; font-weight: bold;
    font-size: size(35); line-height: size(40); height:size(40); margin-top: size(40); margin-bottom: size(15);
    color:$orange;
    .icon{
      display: inline-block;  vertical-align: middle;
      width:size(27); height:size(35); margin-right: 5px; margin-top: -2px;
      .img{
        display: block;
        width:100%;
      }
    }
  }
  .two-title{
    text-align: center;
    font-size: size(24); line-height: 1;
    color:#888888;
  }
  .address-select{
    margin-top: size(40);  padding-bottom: size(20);
    .addr-box{
      text-align: center; display: block;
      width:size(320); height:size(94); line-height: size(94);  border-radius: 8px; font-size: size(28); margin:0 auto  size(30);
      color:#fff; background-image: linear-gradient(94deg, #fd751c 0%,  #f34638 100%);
    }
  }
}
</style>