<template>
  <div  v-load="loading">
  <div class="black-bg">
    <img src="@/assets/images/img-07.png" class="bg" alt="">
  </div>
  <div class="question-pages" id="realName">
    <div class="z10">
    <h1 class="pages-title" id="age"><img class="logo" src="@/assets/images/img-12.png" alt=""></h1>
    <div class="form-banner">
      <div>
        <div class="form-list"  >
          <span class="form-title">姓名</span>
          <input type="text" v-model="ruleForm.realName" class="input" placeholder="姓名" >
        </div>
        <div class="form-list">
          <span class="form-title">年龄</span>
          <input type="text" class="input" v-model="ruleForm.age"  placeholder="年龄">
        </div>
      </div>
      <div class="right-box">
        <span class="img-box"><img src="@/assets/images/img-11.png" class="img" alt=""></span>
        <span class="text">已推荐</span>
        <span class="text"><em class="red">10万+</em>人</span>
      </div>
    </div>
    <p class="banner-error" v-show="rules.age || rules.realName" >请输入姓名和年龄</p>
    
    <section class="question-main" >
      <section class="question-list" id="applyAmount" >
        <h3 class="que-title">您大约要借多少钱？</h3>
        <div class="list-box">
          <input type="text" v-model="ruleForm.applyAmount" placeholder="请输入贷款额度" class="input money">
          <p class="error" v-show="rules.applyAmount">请选择贷款额度</p>
        </div>
      </section>
      <h3 class="que-title p20">请选择您的资质 提高贷款成功率</h3>
      <section class="question-list" id="house">
        <h3 class="que-title-small">房产信息</h3>
        <div class="list-box">
          <label class="common-checkbox-txt"><input type="radio" class="input" value="1" v-model="ruleForm.house" ><div class="label ask-box">无</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="2" v-model="ruleForm.house"><div class="label ask-box br">有房产<br />不接受抵押</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="3" v-model="ruleForm.house"><div class="label ask-box br">有房产<br />可以接受抵押</div></label>
          <p class="error" v-show="rules.house">请选择房产信息</p>

        </div>
      </section>
      <section class="question-list" id="fund" >
        <h3 class="que-title-small">本地公积金</h3>
        <div class="list-box">
          <label class="common-checkbox-txt"><input type="radio" class="input" value="0" v-model="ruleForm.fund" ><div class="label ask-box">无</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="1" v-model="ruleForm.fund" ><div class="label ask-box">六个月以下</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="2" v-model="ruleForm.fund" ><div class="label ask-box">六月到十二月</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="3" v-model="ruleForm.fund" ><div class="label ask-box">十二月以上</div></label>
          <p class="error" v-show="rules.fund">请选择本地公积金</p>

        </div>
        <!-- <div class="que-form">
          <div>
            <p class="error">公积金缴纳金额不能为空</p>
            <span class="form-title">公积金缴纳金额</span>
            <input type="text" placeholder="请输入公积金缴纳金额" class="input">
          </div>
          <span class="size">元</span>
        </div> -->
      </section>
      
      <section class="question-list" id="cart" >
        <h3 class="que-title-small">车辆信息</h3>
        <div class="list-box" >
          <label class="common-checkbox-txt"><input type="radio" class="input" value="1" v-model="ruleForm.cart"><div class=" label ask-box">无</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="2" v-model="ruleForm.cart"><div class=" label ask-box">有车<br />不接受抵押</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="3" v-model="ruleForm.cart"><div class=" label ask-box br">有车<br />可接受抵押</div></label>
          <p class="error" v-show="rules.cart">请选择车辆信息</p>
        </div>
      </section>
      <!-- <section class="question-list">
        <h3 class="que-title-small">车辆价值</h3>
        <div class="list-box">
          <p class="error">请选择车辆价值</p>
          <div class="ask-box br">车辆估值<br />大于10万</div>
          <div class="ask-box br">车辆估值<br />小于10万</div>
        </div> -->
      <!-- </section> -->

      <!-- <section class="question-list">
        <h3 class="que-title-small">车龄情况</h3>
        <div class="list-box">
          <p class="error">请选择车龄情况</p>
          <div class="ask-box br">车龄<br />大于8年</div>
          <div class="ask-box br">车龄<br />小于8年</div>
        </div>
      </section> -->

      <section class="question-list" id="socialSecurity" >
        <h3 class="que-title-small">社保</h3>
        <div class="list-box">
          <label class="common-checkbox-txt"><input type="radio" class="input" value="0" v-model="ruleForm.socialSecurity"><div class="label ask-box">无</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="1" v-model="ruleForm.socialSecurity"><div class="label ask-box">六个月以下</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="2" v-model="ruleForm.socialSecurity"><div class="label ask-box">六月到十二月</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="3" v-model="ruleForm.socialSecurity"><div class="label ask-box">十二月以上</div></label>
          <p class="error" v-show="rules.socialSecurity">请选择本地社保</p>

        </div>
      </section>

      <section class="question-list" id="payrollType" >
        <h3 class="que-title-small">工资发放形式</h3>
        <div class="list-box">
          <label class="common-checkbox-txt"><input type="radio" class="input" value="0" v-model="ruleForm.payrollType"><div class="label ask-box ">现金发放</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="1" v-model="ruleForm.payrollType"><div class="label ask-box ">转账工资</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="2" v-model="ruleForm.payrollType"><div class="label ask-box ">银行代发</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="3" v-model="ruleForm.payrollType"><div class="label ask-box br ">部分打卡<br />部分现金</div></label>
          <p class="error" v-show="rules.payrollType">请选择打卡工资</p>

        </div>
        <!-- <div class="que-form">
          <div>
            <p class="error">打卡工资金额不能为空</p>
            <span class="form-title">打卡工资金额</span>
            <input type="text" placeholder="请输入打卡工资金额" class="input">
          </div>
          <span class="size">元</span>
        </div> -->
      </section>

      <section class="question-list" id="insurance" >
        <h3 class="que-title-small">保单信息</h3>
        <div class="list-box">
          <label class="common-checkbox-txt" @click="haveSafe = false" ><input type="radio" class="input" value="1" v-model="ruleForm.insurance"><div class="label ask-box ">无</div></label>
          <label class="common-checkbox-txt" @click="ruleForm.insurance = ''"><input type="radio" class="input" value="true" v-model="haveSafe"><div class="label ask-box br">有寿险或<br/>年险金</div></label>
          <label class="common-checkbox-txt" @click="haveSafe = false"><input type="radio" class="input" value="4" v-model="ruleForm.insurance"><div class="label ask-box ">其他保单</div></label>
          <p class="error" v-show="rules.insurance">请选择保单信息或缴纳时间</p>

        </div>
      </section>

      <section class="question-list" v-show="haveSafe" id="haveSafe" >
        <h3 class="que-title-small">保险缴纳时间</h3>
        <div class="list-box">
          <label class="common-checkbox-txt"><input type="radio" class="input" value="2" v-model="ruleForm.insurance"><div class="label ask-box ">缴纳未满一年</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="3" v-model="ruleForm.insurance"><div class="label ask-box br">缴纳满<br />一年以上</div></label>

        </div>
      </section>

      <section class="question-list" id="businessLicense" >
        <h3 class="que-title-small">企业主信息</h3>
        <div class="list-box" >
          <label class="common-checkbox-txt"><input type="radio" class="input" value="0" v-model="ruleForm.businessLicense"><div class="label ask-box ">无</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="1" v-model="ruleForm.businessLicense"><div class="label ask-box ">是</div></label>
          <p class="error" v-show="rules.businessLicense">请选择企业主信息</p>

        </div>
      </section>

      <!-- <section class="question-list" id="shui" >
        <h3 class="que-title-small">纳税情况</h3>
        <div class="list-box">
          <p class="error">请选择纳税信息</p>
          <div class="ask-box ">未交税</div>
          <div class="ask-box ">正常纳税</div>
        </div>
      </section> -->

      <section class="question-list" id="creditSituation" >
        <h3 class="que-title-small">信用情况</h3>
        <div class="list-box">
          <label class="common-checkbox-txt"><input type="radio" class="input" value="3" v-model="ruleForm.creditSituation"><div class="label ask-box ">无逾期</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="0" v-model="ruleForm.creditSituation"><div class="label ask-box br">无信用卡<br />或贷款</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="2" v-model="ruleForm.creditSituation"><div class="label ask-box long">1年内逾期少于3次且少于90天</div></label>
          <label class="common-checkbox-txt"><input type="radio" class="input" value="1" v-model="ruleForm.creditSituation"><div class="label ask-box long">1年内逾期超过3次且大于90天</div></label>
          <p class="error" v-show="rules.creditSituation" >请选择信用情况</p>

        </div>
      </section>

    </section>
    </div>
  </div> 

  <footer class="footer">
    <div class="pact">
      <span class="checkbox" @click="pactCheckFn">
        <img v-show="!pactCheck" class="img" src="@/assets/images/img-08.png" alt="">
        <img v-show="pactCheck" class="img" src="@/assets/images/img-088.png" alt="">
      </span>
      我已阅读并同意<router-link to="/pact/talk">《知情告知书》</router-link>
    </div>
    <div class="foot-btn" @click="getPointFn" >开户推荐</div>
  </footer>
  </div>
</template>

<script setup lang="ts">
import { $message } from '@/cart/message/index'
import cookie from 'js-cookie'
import {$post} from '@/assets/js/axios'
import { isLoginFn } from '@/assets/js/mixins';
import { indexStore } from '@/store';
import { isNoneFn } from '@/assets/js/util';

onMounted(() => {
  window.scrollTo(0, 0)
})

const loading = ref<boolean>(false);

isLoginFn();
const store = indexStore()
const router = useRouter()

const pactCheck = ref<boolean>(false);

const ruleForm = reactive<any>({
  realName: '',
  age: '',
  applyAmount: '',
  house: '',
  fund: '',
  cart: '',
  socialSecurity: '',
  payrollType: '',
  insurance: '',
  businessLicense: '',
  creditSituation: '',
})
const rules = reactive<any>({
  realName: false,
  age: false,
  applyAmount: false,
  house: false,
  fund: false,
  cart: false,
  socialSecurity: false,
  payrollType: false,
  insurance: false,
  businessLicense: false,
  creditSituation: false,
  haveSafe: false,
})

const haveSafe = ref<boolean>(false)
const pactCheckFn = () => {
  pactCheck.value = !pactCheck.value
}

const getPointFn = () => {
  let vals = Object.values(ruleForm);
  let keys = Object.keys(ruleForm)
  let size = keys.find( (el, index) => {
    rules[el] = false;
    return (!ruleForm[el] || ruleForm[el] == '')
  })
  console.log(size);
  if(size ) {
    scrollFn(size);
    rules[size] = true;
    return;
  }

  if (!pactCheck.value) {
    $message({msg: '同意告知书才可进行下一步', type: 'error'})
    return
  }

  let url = `/api.php/center/member/save_userInfo`
  let data:tsAny = {
    "token": cookie.get('token'),
    "client": "pc",
    "package": "h5",
    "ver": "v1.1",
    dynamic: ruleForm
  }
  loading.value = true;
  $post(url, data).then((res: any) => {
    loading.value = false;
    if (res.result == 1) {
      store.holder.name = ruleForm.realName;
      store.goods = {
        name: res.data.Name,
        logo: res.data.Logurl
      }
      router.push({
        path: '/result'
      })
    } else {
      $message({
        type: 'error',
        msg: res.message
      })
    }
  })
}

const scrollFn = (name: string) => {
  let back = (document.querySelector(`#${name}`) as HTMLElement).offsetTop;
  (document.documentElement.scrollTop as any) = back
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
.question-pages{
  min-height: 100vh; margin:0 auto 0; padding-bottom: size(200);
  background-color: $bg;
  
  .z10{
    position: relative;
    z-index: 10;
  }
  .pages-title{
    box-sizing: border-box;
    height:size(110); padding-top: size(25); width:size(690); margin:0 auto 0;
    .logo{
      width:size(613); height:size(42);
    }
  }
  .banner-error{
    position:absolute; margin-left: size(30); margin-top: size(5);
    color:$orange;
  }
  .form-banner{
    @include flex(both, center); @extend %shadow;
    box-sizing: border-box;
    width:size(690);   margin:0 auto 0; padding-left: size(34);  border-radius: 8px; padding-right: size(30); padding-top: size(10); padding-bottom: size(10);
    background-color: #fff;
    
    .form-list{
      @include flex(left, center);
      padding-left: size(20);
      .form-title{
        height:size(60); line-height: size(60); width:size(80); font-size: size(30);
        color:#000;
      }
      .input{
        height:size(60); line-height: size(60); width:size(300);font-size: size(30);
        color:$orange;
      }
    }
    .right-box{
      span{
        display: block; text-align: center; 
        margin:0 auto size(8);  
      }
      .img-box{
        width:size(29);height:size(34);
        .img{
          display: block;
          width:100%;
        }
      }
      .text{
        font-size: size(21); line-height: 1;
        color:#868686;
        .red{
          color:$orange;
        }
      }
    }
  }

  .question-main{
    box-sizing: border-box;
    width:size(690); padding:size(30) 0 size(60) size(30);  border-radius: 10px; margin: size(60) auto 0;
    background-color: #fff;
    .question-list{
      width:100%; padding-top: size(10);
    }
    .que-title{
      font-size: size(30); line-height: 1; margin-top:size(20);
      color:#161616;
      &.p20{
        padding-top: size(20); margin-bottom: size(11);
      }
    }
    .que-title-small{
      font-size: size(26); line-height: 1;
      color:#161616;
    }
    .list-box{
      @include flex(left, top);
      position: relative; 
      padding-bottom: size(40); width:100%; padding-top: size(20);
      .error{
        position: absolute; 
        font-size: size(26); width:100%; bottom:size(20);
        color:$orange;
      }
      .ask-box{
        text-align: center; box-sizing: border-box; overflow: hidden;
        width:size(194); height:size(94); line-height: size(94); border-radius: 6px; font-size: size(28); margin-bottom: size(24); margin-right: size(24);
        color:#666; border:1px solid #666;
        &:nth-of-type(3){
          margin-right: 0;
        }
        &.br{
          line-height: size(36); padding-top: size(8);
        }
        &.long{
          width: auto; padding:0 size(20)
        }
        
      }
      .common-checkbox-txt{
        .input:checked~.label {
          border-color: $orange;  color: $orange;       background-color: #ffedeb;
        }
      }
    }
    // .que-form{
    //   @include flex(both, center);
    //   position: relative;
    //   width:100%; padding-top: size(20); margin-bottom: size(15); 
    //   .error{
    //     position: absolute;
    //     font-size: size(26); top:calc(size(10) * -1); left:0;
    //     color:$orange;
    //   }
    //   .form-title{
    //     font-size: size(28);
    //     color:#666;
    //   }
      
    //   .size{
    //     font-size: size(28); padding-right: size(70);
    //     color:#666;
    //   }
    // }
    .input{
      box-sizing: border-box;
      height:size(60); line-height: size(60); padding-left: size(20); font-size: size(24);
      color:#666; border-bottom:1px solid $border;
      &.money{
        width:calc(100% - size(30)); margin-bottom: size(20);
      }
    }
  }
}
.footer{
  position: fixed;
  bottom:0; left:0; z-index:20; width:100vw;
  background-color: $bg; 
  .pact{
    vertical-align: middle; 
    font-size: size(22); padding-left: size(30); width:size(690); margin:size(20) auto 0;
    .checkbox{
      vertical-align: middle;  display: inline-block;
      margin-top: -2px; margin-right: 4px; width:size(25); height:size(25);
      .img{
        display: block;
        width:100%;
      }
    }
    a{
      font-size: size(24);
      color:$orange;
    }
  }
  .foot-btn{
    text-align: center;
    width:size(690); height:size(98); line-height: size(98); border-radius: size(50); font-size: size(34); margin:size(20) auto 0;
    background-image: linear-gradient(94deg,   #fd751c 0%,     #f34638 100%); color:#fff;
  }
}
</style>