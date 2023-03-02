<template>
  <div class="" >
  <div class="login-pages common-pages">
    <div class="z10">
    <h1 class="title"></h1>
    <div class="form-box" >
      <h3 class="login-title">登录</h3>
        <div class="form-list">
          <span class="form-title">姓名</span>
          <input class="input" type="text"  v-model="loginForm.nickname" placeholder="" >
        </div>
        <div class="form-list">
          <span class="form-title">员工号</span>
          <input class="input" type="text"  v-model="loginForm.username" placeholder="">
          <p class="error" v-show="error.type" >*{{error.msg}}</p>
        </div>
        <div class="form-btn common-btn"  type="submit"  @click="submitFn()">立即登录</div>
      </div>
    </div>
  </div>

  <div class="cloud" v-show="layerShow" ></div>
  <div class="layer layer-pact" v-show="layerShow">
    <div class="scroll-box">
      <h3 class="title">2023泛捷国际集团迎新活动活动规则</h3>
      <p class="p1">2023已经悄悄到来，在这辞旧迎新之际，泛捷国际集团提前预祝大家新年快乐。 欢迎大家参与2023泛捷国际集团迎新活动，赢取丰厚奖品。</p>
      <br />
      <p class="p1">本活动是由泛捷国际集团主办的活动，具体活动规则及玩法以活动⻚面展示为准。参与本活动前，请详细阅读活动规则及相关条款，参与本活动即视为您已阅读并同意本活动规则，理解并愿意接受本活动规则及相关条款的全部内容。</p>
      <h3 class="h1">一、迎新活动活动规则</h3>
      <h3 class="h2">一)规则概述</h3>
      <p class="p2">1. 活动时间:【2023】年【1】月【6】日。</p>
      <p class="p2">2. 参与对象:泛捷国际集团全体员工。</p>
      <p class="p2">3. 活动入口:您可通过扫【活动入口】二维码进入活动⻚面参与活动。</p>
      <p class="p2">4. 本活动采用实名登记，非本集团员工不得参与本次活动。如经核查发现活动非本人参与，主办方有权利取消其活动资格、获奖资格等。</p>
      <h3 class="h2">(二)活动玩法</h3>
      <p class="p3">1.本次活动采用双线任务制，完成【心有千千“捷”】任务即可有机会解锁抽奖机会，完成【泛捷最强大脑】并排名前5的员工将获得特殊奖品。</p>
      <p class="p3">2.抽奖采用可视化奖池机制，各等级奖品数量有限，抽完即止。</p>
      <h3 class="h2">(三)奖励说明</h3>
      <p class="p3" >1. 上海地区员工请与【2023】年【1】月【12】日-【1】月【13】日【 中午12:00-13:00】前往【宝矿大厦9楼行政处】，凭活动中奖⻚面兑换奖品奖励。</p>
      <p class="p3" >2. 外地地区员工请与【2023】年【1】月【13】日【 中午12:00】前在OA系统中上传【中奖截图】，填写收件信息并成功提交后方视为领奖成功。 特别提示:请谨慎填写收件信息，仅有一次填写机会，提交后不可二次更改。</p>
      <p class="p3" >3. 奖品不支持退换货，按以上方式成功领取并签收奖品后视为领奖成功。具体快递时间根据快递区域、快递期间天气、快递期间具体安检
      政策、收件人签收情况等⻓短不一，均不保证具体送达时间。</p>
    </div>
    <footer class="layer-footer">
      <div class="common-btn" @click="pactFn" >我知道了</div>
      <div class="pact-check" >
        <label class="common-checkbox" ><input v-model="pactCheck" type="checkbox" class="input" ><span class="label"></span></label>我已阅读了相关信息
      </div>
    </footer>
  </div>
</div>
</template>

<script setup lang="ts">
import { $get, $post } from '@/assets/js/axios'
import {indexStore} from '@/store/index'
import $message from '@/cart/message';
import cookie from 'js-cookie';
import isLogin  from '@/hooks/isLogin';
const { getHolderFn } = isLogin()



const route = useRoute()
const router = useRouter()

const store = indexStore()

let layerShow = $ref<boolean>(false);
let pactCheck = $ref<boolean>(false)

const pactFn = () => {
  if(!pactCheck) {
    $message({
      type: 'error',
      msg: '请先浏览并同意活动规则'
    })
    return false;
  }
  
  cookie.set('pact', 'true', { expires: 7 })
  if(store.holder.hasLucky) {
    router.push({
      path: '/'
    }) 
  } else {
    router.push({
      path: '/fu/cue'
    })
  }
}


// 登陆相关
const error = reactive<tsError>({
  msg: '',
  type: false,
})

const loginForm = reactive<tsLoginForm>({
  username: '',
  nickname: ''
})


// 提交表单 注册
const submitFn = async () => {
  if (loginForm.nickname == '') {
    error.type = true;
    error.msg = '请输入姓名'
    return false;
  }
  if (loginForm.username == '') {
    error.type = true;
    error.msg = '请输入员工号'
    return false;
  }
  error.type = false;

  let url = `/api.php/site/login`

  loginForm.username.trim();
  loginForm.nickname.trim();
  
  let res:any = await $post(url, loginForm)
  if(res.code == 0) {
    cookie.set('username', res.data.username, { expires: 1 })
    cookie.set('nickname', res.data.nickname, { expires: 1 })
    cookie.set('mobile', res.data.mobile, { expires: 1 })
    cookie.set('token', res.data.token, { expires: 1 })
    window.location.reload();
  } else {
    $message({
      type: 'error',
      msg: res.message
    })
  }
}



// 登陆相关  -- end


// 判断登陆
const isLoginFn = () => {
  let token = cookie.get('token');
  if (token) {
    getHolderFn();
    let pact: any = cookie.get('pact')
    if (!pact || pact == '') {
      layerShow = true;
    } else {
      router.push({
        path: '/'
      })
    }
    
  }
}
isLoginFn();



</script>

<style scoped lang="scss">
.login-pages{
  box-sizing: border-box;
  min-height: 100vh; margin:0 auto 0; padding-top: size(235); 
  background-image: url('@/assets/images/bg-02.png') ;
}



.form-box{
    box-sizing: border-box;
    width: size(326); height:size(338); margin:0 auto 0; padding-top: size(34); padding-bottom: size(48);  border-radius: 12px; 
    background: url('@/assets/images/bg-03.png') no-repeat center ; background-size: 100%;
    .login-title{
      text-align: center;
      font-size: size(20); margin:0 auto 0; padding-bottom: size(24);
      color:#000;
    }
    .form-list{
      @include flex(left, center);
      position: relative;
      margin-bottom: size(15); 
      &:nth-of-type(2){
        margin-bottom: size(60);
      }
    }
    .form-title{
      display: block; text-align: right; box-sizing: border-box;
      font-size: size(16); padding-right: size(12); width:size(100);
      color: rgb(34, 34, 34);
    }
    .input{
      box-sizing: border-box; 
      width:size(188);  height:size(37); line-height: size(37); padding-left: size(10); font-size: size(16); 
      color:#666; border-bottom: 1px solid #CBCED4;  background-color: rgba(255, 255, 255, 0);
      transition: all .5s;
      &:focus{
        border-color:#C80D0A;
      }
    }
    .error{
      position: absolute;
      font-size: size(12); line-height: 1;  left: size(99);  bottom:calc(size(20) * -1);
      color:$red;
    }
}


.layer-pact{
  box-sizing: border-box; overflow: hidden;
  width:size(325); height:80vh; border-radius: 12px; padding-top: size(33);
  background: url('@/assets/images/bg-06.png') no-repeat top center ; background-size: 100%;
  transform: translate(-50%, -50%);
  .scroll-box{
    overflow-y: scroll; box-sizing: border-box;
    width:100%; height:100%; padding:0 size(15) size(200);
    .title{
      font-weight: bold; text-align: center;
      font-size: size(16); line-height: size(24); margin-bottom: size(9); 
      color:rgb(34, 34, 34);
    }
    .p1{
      font-size: size(12); line-height: size(20);
      color:#222;
    }
    .h1{
      font-size: size(14); line-height: size(20);
      color:#222;
    }
    .h2{
      font-size: size(10); line-height: size(20);
      color:#222;
    }
    .p2{
      font-size: size(10); line-height: size(20);
      color:#4C4F54;
    }
    .p3{
      font-size: size(10); line-height: size(20);
      color:#222;
    }
  }
  .layer-footer{
    position: absolute; box-sizing: border-box;
    left:0; bottom:0; width:100%; height:size(170); padding-top: size(60);
    background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 253, 238, 1) 19%, rgba(255, 253, 239, 1) 33%, rgba(255, 251, 230, 1) 100%);
    .pact-check{
      text-align: center; vertical-align: middle;
      font-size: size(10); margin-top: size(16);
      color:#7C8087;
      .common-checkbox{
        display: inline-block; vertical-align: middle;
        margin-right: 4px;
        .label{
          width:size(15); height:size(15); border-radius: 50%;
          &:before{
            border-color:#fff;
          }
        }
        .input:checked + .label{
          background-color: #0084FF; border-color:#fff;
        }
      }
    }
  }
}
</style>