<template>
  <div class="result-page"  v-load="loading" >
    <div v-if="!loading" >
    <div class="pages-title"><img src="@/assets/images/img-12.png" class="logo" alt=""></div>
    <section class="goods-box">
      <h3 class="goods-title"><em class="img-box"><img class="img" :src="store.goods.logo" @error="errImgFn" alt=""></em>{{store.goods.name}}</h3>
      <div class="table-box">
        <table>
          <tr>
            <th class="money">10-20万</th>
            <th>365</th>
            <th>130</th>
          </tr>
          <tr>
            <td>贷款范围(元)</td>
            <td>服务天数</td>
            <td>当日咨询人数</td>
          </tr>
        </table>
      </div>
    </section>
    <section class="pack-main" >
      <p class="info">特别提示：趣融分期会根据您的资质，为您匹配专业的贷款咨询服务机构（包含：{{ store.goods.name }}），请查阅<router-link to="/pact/person">《个人信息共享授权书》</router-link></p>
      <div class="pack-show">
        <p style="text-align:center">
          <span style="font-size: 0.32rem; line-height:0.47rem; font-weight: bold; ">个人信息共享授权书</span>
        </p>
        <p style="text-align:justify;text-justify:inter-ideograph">
          <span style=" "><span style=" font-size: 0.32rem; line-height:0.47rem;">&nbsp;&nbsp;&nbsp;</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">重要提示：</span></span>
        </p>
        <p style="text-align:justify;text-justify:inter-ideograph">
          <span style=" "><span style=" font-size: 0.32rem; line-height:0.47rem;">&nbsp;&nbsp;&nbsp;</span><span
              style="font-size: 0.32rem; line-height:0.47rem; ">为维护您（以下简称“本人”或“您”）的合法权益，请在线签署《个人信息共享授权书》（以下简称“本授权书”）前，仔细阅读、充分理解本授权书各条款内容，特别是免除或减轻趣创业（北京）信息科技有限公司（以下简称“被授权人”）责任，或限制您权利的条款，其中免除或减轻责任条款将以黑体加粗形式提示您。您点击本授权书所在页面按钮并进入下一页面或勾选本授权书即视为您已阅读本授权书并同意接受本授权书条款的约束，本授权书即完成在线签署并生效。</span></span>
        </p>
        <p style="text-align:justify;text-justify:inter-ideograph"><strong>
          <span style=" "><span style=" font-size: 0.32rem; line-height:0.47rem;">&nbsp;&nbsp;&nbsp;</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">本人姓名：</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">{{store.holder.name}}</span></span></strong>
        </p>
        <p style="text-align:justify;text-justify:inter-ideograph"><strong>
          <span style=" "><span style=" font-size: 0.32rem; line-height:0.47rem;">&nbsp;&nbsp;&nbsp;</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">本人身份证号码：</span>/</span></strong>
        </p>
        <p style="text-align:justify;text-justify:inter-ideograph">
          <span style=" "><span style=" font-size: 0.32rem; line-height:0.47rem;">&nbsp;&nbsp;&nbsp;</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">（为了保护您的个人信息，本授权书在向您展示时将部分隐藏您的身份信息，您的身份信息详情以您在本平台账户对应的实名信息为准）</span></span>
        </p>
        <p style="text-align:justify;text-justify:inter-ideograph">
          <span style="font-size: 0.32rem; line-height:0.47rem;  ">&nbsp;</span>
        </p>
        <p style="margin-left:28px;text-indent:0;text-align:justify;text-justify:inter-ideograph">
          <span style="font-size: 0.32rem; line-height:0.47rem;  ">一、定义</span>
        </p>
        <p style="margin-left:0.35rem; line-height:0.47rem;text-indent:0;text-align:justify;text-justify:inter-ideograph">
          <span style="font-size: 0.32rem; line-height:0.47rem;  ">1、个人信息，指您的如下信息：</span>
        </p>
        <p style="margin-left:0.35rem; line-height:0.47rem;text-align:justify;text-justify:inter-ideograph">
          <span style=" "><span style=" font-size: 0.32rem; line-height:0.47rem;">（</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">1</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">）</span><strong><span
                style="text-decoration: underline;  font-size: 0.32rem; line-height:0.47rem;">个人识别信息</span></strong><span
              style=" font-size: 0.32rem; line-height:0.47rem;">，指您的</span><strong><span
                style="text-decoration: underline;  font-size: 0.32rem; line-height:0.47rem;">手机号码</span></strong><span
              style=" font-size: 0.32rem; line-height:0.47rem;">，以及平台通过向您申请电话状态权限</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">/IDFA</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">、位置权限（如涉及）而收集的您的</span><strong><span
                style="text-decoration: underline;  font-size: 0.32rem; line-height:0.47rem;">唯一设备识别码（</span></strong><strong><span
                style="text-decoration: underline;  font-size: 0.32rem; line-height:0.47rem;">IMEI</span></strong><strong><span
                style="text-decoration: underline;  font-size: 0.32rem; line-height:0.47rem;">、</span></strong><strong><span
                style="text-decoration: underline;  font-size: 0.32rem; line-height:0.47rem;">IMSI</span></strong><strong><span
                style="text-decoration: underline;  font-size: 0.32rem; line-height:0.47rem;">）、</span></strong><strong><span
                style="text-decoration: underline;  font-size: 0.32rem; line-height:0.47rem;">IP</span></strong><strong><span
                style="text-decoration: underline;  font-size: 0.32rem; line-height:0.47rem;">地址、地理位置</span></strong><span
              style=" font-size: 0.32rem; line-height:0.47rem;">。</span></span>
        </p>
        <p>
          <span style=" "><span style=" font-size: 0.32rem; line-height:0.47rem;">&nbsp;&nbsp;</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">（</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">2</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">）</span><strong><span
                style="text-decoration: underline;  font-size: 0.32rem; line-height:0.47rem;">个人资质信息</span></strong><span
              style=" font-size: 0.32rem; line-height:0.47rem;">，指您的</span><strong><span
                style="text-decoration: underline;  font-size: 0.32rem; line-height:0.47rem;">姓名、年龄、房产情况、车辆情况、公积金情况、社保情况、月收入金额范围、保单情况、企业主情况（如涉及）、信用情况</span></strong><span
              style=" font-size: 0.32rem; line-height:0.47rem;">。</span><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">您已经充分认识到您的财产性信息对您而言是私密且重要的信息（本授权书项下的财产信息包括您的房产情况、公积金情况、社保情况、车辆情况、月收入范围、保单情况、企业主情况、信用情况），您已经充分理解并知悉提供和使用财产性信息的风险，这些风险包括但不限于：纳入这些信息对您的信用评级（评分）、信用报告等结果可能产生不利影响，该等信息被被授权人依法提供给第三方后被他人不当利用的风险，因您的信用状况较好而造成您被第三方推销产品或服务等打扰的风险等。</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;"></span></strong></span>
        </p>
        <p>
          <span style=" "><span style=" font-size: 0.32rem; line-height:0.47rem;">&nbsp;2</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">、贷款服务咨询机构</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">/</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">咨询顾问，指为您提供贷款咨询服务的机构及咨询顾问（如涉及），在本授权书下贷款服务咨询机构指【一起花贷款代理（东莞）有限公司北京分公司】及其前述机构的分支机构、关联方，咨询顾问指【</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">/</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">】。</span></span>
        </p>
        <p>
          <span style=" "><span style=" font-size: 0.32rem; line-height:0.47rem;">&nbsp;3</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">、广告及分析服务类提供商，指受被授权人委托对您的产品需求</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">/</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">偏好进行评估，并向您推荐您需要的贷款产品及服务的第三方机构。</span></span>
        </p>
        <p>
          <span style=" "><span style=" font-size: 0.32rem; line-height:0.47rem;">&nbsp;&nbsp;&nbsp;</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">二、授权内容</span></span>
        </p>
        <p>
          <span style=" "><span style=" font-size: 0.32rem; line-height:0.47rem;">&nbsp;1</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">、在平台为您提供服务的过程中，为了便于被授权人向您推荐适合您的贷款产品及贷款咨询服务，您授权被授权人收集并存储您提交的</span><strong><span
                style="text-decoration: underline;  font-size: 0.32rem; line-height:0.47rem;">个人信息</span></strong><span
              style=" font-size: 0.32rem; line-height:0.47rem;">。</span></span>
        </p>
        <p>
          <span style=" "><span style=" font-size: 0.32rem; line-height:0.47rem;">&nbsp;</span><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">2</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">、</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">为了便于贷款服务咨询机构</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">/</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">咨询顾问根据您的资质情况为您提供贷款咨询服务并根据您的资质情况向您推荐合适的贷款产品，您授权被授权人将您的手机号码及个人资质信息共享给贷款服务咨询机构</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">/</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">咨询顾问，同时授权贷款服务咨询机构</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">/</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">咨询顾问分析您的个人资质信息，通过给您拨打电话的方式向您推荐适合您的贷款产品。</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;"></span></strong></span>
        </p>
        <p>
          <span style=" "><strong><span style=" font-size: 0.32rem; line-height:0.47rem;">&nbsp;3</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">、</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">为了对您的产品需求</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">/</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">偏好进行评估，并向您推荐平台产品及服务，您授权被授权人将您的个人识别信息共享给广告及分析服务类提供商，同时授权广告及分服务类提供商分析评估您的产品需求</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">/</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">偏好，并将分析评估结果反馈给被授权人或者直接根据分析评估结果向您拨打电话为您推荐产品。</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;"></span></strong></span>
        </p>
        <p>
          <span style=" "><span style=" font-size: 0.32rem; line-height:0.47rem;">&nbsp;&nbsp;&nbsp;</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">三、授权期限</span></span>
        </p>
        <p>
          <span style=" "><span style=" font-size: 0.32rem; line-height:0.47rem;">&nbsp;&nbsp;&nbsp;</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">本授权书自您签署时生效。授权期限自本授权书生效之日起至您与我们业务终止日为止，</span><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">但在授权有效期内我们已实施的行为及依其自身性质需在授权终止后实施或需持续实施的行为，不受授权终止的影响。本授权书具有独立发了效力，不因您签署的人和业务合同或协议成立与否、效力状态变化（包括但不限于部分或全部条款无效或被撤销而无效或失效）的影响。</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;"></span></strong></span>
        </p>
        <p style="text-indent:0">
          <span style=" "><span style=" font-weight: bold; font-size: 0.32rem; line-height:0.47rem;">四、</span><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">争议解决</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;"></span></strong></span>
        </p>
        <p>
          <span style=" "><span style=" font-size: 0.32rem; line-height:0.47rem;">&nbsp;&nbsp;</span><span
              style=" font-size: 0.32rem; line-height:0.47rem;">若本人与被授权人发生任何纠纷争议，应友好协商解决。协商解决不成的，本人同意将纠纷或争议提交至本授权书签订地（即北京市朝阳区）有管辖权的人民法院。</span></span>
        </p>
        <p style="text-indent:0">
          <span style=" "><span style=" font-weight: bold; font-size: 0.32rem; line-height:0.47rem;">五、</span><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">本人已知悉本授权书所有内容（特别是加粗字体内容）的意义及由此产生的发了效力，自愿作出上述授权，本授权书是本人真实意思的表示，本人同意承担由此带来的一切法律后果。</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;"></span></strong></span>
        </p>
        <p style="">
          <span style=" "><strong><span style=" font-size: 0.32rem; line-height:0.47rem;">&nbsp;</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;"></span></strong></span>
        </p>
        <p style="">
          <span style=" "><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">您的登录账号：{{ store.holder.mobile.substring(0, 3) + "****" + store.holder.mobile.substring(7) }}</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;"></span></strong></span>
        </p>
        <p style="">
          <span style=" "><strong><span style=" font-size: 0.32rem; line-height:0.47rem;">您的</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">UID</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">：</span></strong><strong><span
                style=" font-size: 0.32rem; line-height:0.47rem;">{{ store.holder.id }}</span></strong></span>
        </p>
        <p>
          <br />
        </p>
      </div>
    </section>
    <footer class="footer">
      <div class="footer-btn" @click="footerBtnFn" >同意并咨询</div>
    </footer>


    <div class="cloud" v-show="layerShow"></div>
    <div class="layer-box" v-if="layerShow">
      <div class="box">
        <header class="layer-header">
          <div class="img-box">
            <img src="@/assets/images/img-14.png" class="img" alt="">
          </div>
          <div>
            <h3 class="one-title">一个订单咨询成功</h3>
            <h3 class="two-title">请留意审核人员来电</h3>
          </div>
        </header>
        <p class="info one">稍后您的手机号码 {{ store.holder.mobile.substring(0, 3) + "****" + store.holder.mobile.substring(7) }}
          将收到贷款咨询机构工作人员电话，请保持手机畅通并核实对方信息</p>
        <section class="firm-box">
          <em class="icon"><img class="img" :src="store.goods.logo" @error="errImgFn" alt=""></em>
          <p class="name">{{store.goods.name}}</p>
        </section>
        <p class="info two">趣融分期不会以任何名义向您收取费用，更不会要求您进行转账、提供银行密码、缴纳保证金等，请您注意识别，谨防伪冒诈骗行为</p>
        <footer class="layer-footer">
          <div class="footer-btn" @click="backFn">返回首页</div>
        </footer>
      </div>
    </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { isLoginFn } from '@/assets/js/mixins';
import cookie from 'js-cookie'
import {$post} from '@/assets/js/axios'
import { isNoneFn } from '@/assets/js/util'
import { indexStore } from '@/store/index';
import $message from '@/cart/message';
isLoginFn();
const store = indexStore();




const layerShow = ref<boolean>(false)
const router = useRouter();
const route = useRoute()
const user = ref<tsAny>({})

const errImgFn = async (el:any) => {
  let img = await import('../../assets/images/img-13.png')
  console.log(img.default);
  
  el.target.setAttribute('src', img.default);
}


const loading = ref<boolean>(true)
setTimeout(() => {
  loading.value = false;
}, 500);

const backFn = () => {
  router.push({
    path: '/'
  })
}

const footerBtnFn = () => {
  let url = `/api.php/center/member/save_notarize`
  let data = {
    token: cookie.get('token'),
    client: 'h5',
    package: 'pc',
    ver: 'v1.1'
  }
  loading.value = true;
  $post(url, data).then((res:any) => { 
    loading.value = false;
    if(res.result == 1) {
      layerShow.value = true;
      cookie.set('result', '1', { expires: 0.04 });
    } else {
      $message({
        type: 'error',
        msg: res.message
      })
    }
  })
}



onMounted( () => {
  let query = route.query;
  if (query.ok) {
    if (cookie.get('result')) {
      setTimeout(() => {
        layerShow.value = true;
      }, 500);
    } else {
      router.push({
        path: '/address'
      })
    }
  }
}) 


</script>

<style scoped lang="scss">
.result-page{
  position: relative;box-sizing: border-box;
  min-height:100vh; padding-bottom: size(150); z-index:10;
  background:$bg url('@/assets/images/img-07.png') no-repeat top center; background-size: 100%;
  .pages-title{
    box-sizing: border-box;
    height:size(104); padding-left: size(30); padding-top: size(34); width:size(750); margin:0 auto 0; 
    .logo{
      width:size(613); height:size(42);
    }
  }
}
.goods-box{
  box-sizing: border-box;
  width:size(690); min-height:size(240);  border-radius: 10px; margin:0 auto size(30); padding-top: size(30); padding-bottom: size(30);
  background-image: linear-gradient(94deg, #fd751c 0%,  #f34638 100%);
  .goods-title{
    box-sizing: border-box; position: relative;
    font-size: size(26); min-height:size(74);  line-height: size(34); margin:0 auto size(30); width:size(630); border-radius: size(38);  padding:size(20) size(20) size(20) size(80);
    color:#fff3e6; background-color: rgba($color: #fec5aa, $alpha: 0.2);
    .img-box{
      overflow: hidden; display: inline-block; vertical-align: middle; position: absolute;
      width:size(50); height:size(50); border-radius: 50%; margin-right: size(10); left:size(20); top:size(14);
      .img{
        display: block;
        width:100%;
      }
    }
  }
  .table-box{
    width:size(590); margin: 0 auto 0;
    table{
      width:100%;
    }
    th{
      text-align: left; box-sizing: border-box;
      font-size: size(34);  line-height: 1;  padding-bottom: size(10);
      color:#fff;
      &:first-of-type{
        width:size(250)
      }
      &:nth-of-type(2){
        width:size(230); 
      }
      &:nth-of-type(3){
        width:size(180); 
      }
    }
    .money{
      font-weight: bold;
      color:#fff3e6;
    }
    td{
      text-align: left;
      font-size: size(24); line-height: 1;
      color:#fec5aa;
      &:first-of-type{
        width:size(250)
      }
      &:nth-of-type(2){
        width:size(230); 
      }
      &:nth-of-type(3){
        width:size(180); 
      }
    }
  }
}
.pack-main{
  box-sizing: border-box;
  width:size(690); padding:size(26) size(30); margin:0 auto; border-radius: 10px; min-height: calc(100vh - size(540));
  box-shadow: 0 0 8px rgb(93, 148, 239, 0.3 ); background-color: #fff;
  .info{
    font-size: size(24); line-height: size(36); margin-bottom: size(30);
    color:#666;
    a{
      font-size: size(24);
      color:$orange; 
    }
  }
  .pack-show{
    overflow-y: scroll; box-sizing: border-box;
    height: calc(100vh - size(750)); width:size(630);  padding:size(30); margin:0 auto;
    border:1px solid $border; background-color: $bg;
  }
}
.footer{
  position: fixed; 
  width: 100vw; height:size(140); left:0;bottom:0; z-index:10;
  background-color: $bg;
  .footer-btn{
    text-align: center;
    width:size(690); height:size(98); line-height: size(98); border-radius: size(50); font-size: size(34); margin:size(20) auto 0;
    background-image: linear-gradient(94deg,   #fd751c 0%,     #f34638 100%); color:#fff;
  }
}

.layer-box{
  position: fixed;
  bottom:0; left:0; width:100vw; z-index:110; 
  background-color: #fff;
  .box{
    width:size(750); margin:0 auto;
  }
  .layer-header{
    @include flex(left, center);
    padding-left: size(130); padding-top: size(50);
    .img-box{
      width:size(119); height:size(108); margin-right: size(20);
      .img{
        display: block;
        width:100%;
      }
    }
    .one-title{
      font-size: size(46); line-height: 1; margin-bottom: size(10);
      color:$orange;
    }
    .two-title{
      font-size: size(30); line-height: 1;
      color:$orange
    }
    
  }
  .info{
    text-align: center;
    font-size: size(22); width:size(570); line-height: 1.6; margin:size(40) auto 0;
    color:#888;
  }
  .firm-box{
    box-sizing: border-box; position: relative;
    width:size(630); margin:size(30) auto 0; min-height: size(100); border-radius: 10px; padding:size(30) size(40) size(30) size(100);
    background-color: rgba($color: #fec5aa, $alpha: 0.2);
    .name{
      font-size: size(26); line-height: size(40);
      color:#333;
    }
    .icon{
      position: absolute; 
      left:size(45); top:size(30); width:size(40); height:size(40);
      .img{
        display: block;
        width:100%;
      }
      
    }
  }
  .footer-btn{
    text-align: center;
    width:size(690); height:size(98); line-height: size(98); border-radius: size(50); font-size: size(34); margin:size(40) auto 0;
    background-image: linear-gradient(94deg,   #fd751c 0%,  #f34638 100%); color:#fff;
  }
}
</style>