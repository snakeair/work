<template>
  <div class="pact-page" >
    <p style="text-align:center">
      <span style="font-size: 0.35rem; line-height:1.6; font-weight: bold; ">个人信息共享授权书</span>
    </p>
    <p style="text-align:justify;text-justify:inter-ideograph">
      <span style=" "><span
          style=" font-size: 0.35rem; line-height:1.6;">&nbsp;&nbsp;&nbsp;</span><span
          style=" font-size: 0.35rem; line-height:1.6;">重要提示：</span></span>
    </p>
    <p style="text-align:justify;text-justify:inter-ideograph">
      <span style=" "><span
          style=" font-size: 0.35rem; line-height:1.6;">&nbsp;&nbsp;&nbsp;</span><span
          style="font-size: 0.35rem; line-height:1.6; ">为维护您（以下简称“本人”或“您”）的合法权益，请在线签署《个人信息共享授权书》（以下简称“本授权书”）前，仔细阅读、充分理解本授权书各条款内容，特别是免除或减轻趣创业（北京）信息科技有限公司（以下简称“被授权人”）责任，或限制您权利的条款，其中免除或减轻责任条款将以黑体加粗形式提示您。您点击本授权书所在页面按钮并进入下一页面或勾选本授权书即视为您已阅读本授权书并同意接受本授权书条款的约束，本授权书即完成在线签署并生效。</span></span>
    </p>
    <p style="text-align:justify;text-justify:inter-ideograph">
      <span style=" "><span
          style=" font-size: 0.35rem; line-height:1.6;">&nbsp;&nbsp;&nbsp;</span><span
          style=" font-size: 0.35rem; line-height:1.6;">本人姓名：</span><span
          style=" font-size: 0.35rem; line-height:1.6;">{{ store.holder.name ? store.holder.name : '****'}}</span></span>
    </p>
    <p style="text-align:justify;text-justify:inter-ideograph">
      <span style=" "><span
          style=" font-size: 0.35rem; line-height:1.6;">&nbsp;&nbsp;&nbsp;</span><span
          style=" font-size: 0.35rem; line-height:1.6;">本人身份证号码：</span></span>
    </p>
    <p style="text-align:justify;text-justify:inter-ideograph">
      <span style=" "><span
          style=" font-size: 0.35rem; line-height:1.6;">&nbsp;&nbsp;&nbsp;</span><span
          style=" font-size: 0.35rem; line-height:1.6;">（为了保护您的个人信息，本授权书在向您展示时将部分隐藏您的身份信息，您的身份信息详情以您在本平台账户对应的实名信息为准）</span></span>
    </p>
    <p style="text-align:justify;text-justify:inter-ideograph">
      <span style="font-size: 0.35rem; line-height:1.6;  ">&nbsp;</span>
    </p>
    <p style="margin-left:28px;text-indent:0;text-align:justify;text-justify:inter-ideograph">
      <span style="font-size: 0.35rem; line-height:1.6;  ">一、定义</span>
    </p>
    <p style="margin-left:0.35rem; line-height:1.6;text-indent:0;text-align:justify;text-justify:inter-ideograph">
      <span style="font-size: 0.35rem; line-height:1.6;  ">1、个人信息，指您的如下信息：</span>
    </p>
    <p style="margin-left:0.35rem; line-height:1.6;text-align:justify;text-justify:inter-ideograph">
      <span style=" "><span
          style=" font-size: 0.35rem; line-height:1.6;">（</span><span
          style=" font-size: 0.35rem; line-height:1.6;">1</span><span
          style=" font-size: 0.35rem; line-height:1.6;">）</span><strong><span
            style="text-decoration: underline;  font-size: 0.35rem; line-height:1.6;">个人识别信息</span></strong><span
          style=" font-size: 0.35rem; line-height:1.6;">，指您的</span><strong><span
            style="text-decoration: underline;  font-size: 0.35rem; line-height:1.6;">手机号码</span></strong><span
          style=" font-size: 0.35rem; line-height:1.6;">，以及平台通过向您申请电话状态权限</span><span
          style=" font-size: 0.35rem; line-height:1.6;">/IDFA</span><span
          style=" font-size: 0.35rem; line-height:1.6;">、位置权限（如涉及）而收集的您的</span><strong><span
            style="text-decoration: underline;  font-size: 0.35rem; line-height:1.6;">唯一设备识别码（</span></strong><strong><span
            style="text-decoration: underline;  font-size: 0.35rem; line-height:1.6;">IMEI</span></strong><strong><span
            style="text-decoration: underline;  font-size: 0.35rem; line-height:1.6;">、</span></strong><strong><span
            style="text-decoration: underline;  font-size: 0.35rem; line-height:1.6;">IMSI</span></strong><strong><span
            style="text-decoration: underline;  font-size: 0.35rem; line-height:1.6;">）、</span></strong><strong><span
            style="text-decoration: underline;  font-size: 0.35rem; line-height:1.6;">IP</span></strong><strong><span
            style="text-decoration: underline;  font-size: 0.35rem; line-height:1.6;">地址、地理位置</span></strong><span
          style=" font-size: 0.35rem; line-height:1.6;">。</span></span>
    </p>
    <p>
      <span style=" "><span
          style=" font-size: 0.35rem; line-height:1.6;">&nbsp;&nbsp;</span><span
          style=" font-size: 0.35rem; line-height:1.6;">（</span><span
          style=" font-size: 0.35rem; line-height:1.6;">2</span><span
          style=" font-size: 0.35rem; line-height:1.6;">）</span><strong><span
            style="text-decoration: underline;  font-size: 0.35rem; line-height:1.6;">个人资质信息</span></strong><span
          style=" font-size: 0.35rem; line-height:1.6;">，指您的</span><strong><span
            style="text-decoration: underline;  font-size: 0.35rem; line-height:1.6;">姓名、年龄、房产情况、车辆情况、公积金情况、社保情况、月收入金额范围、保单情况、企业主情况（如涉及）、信用情况</span></strong><span
          style=" font-size: 0.35rem; line-height:1.6;">。</span><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">您已经充分认识到您的财产性信息对您而言是私密且重要的信息（本授权书项下的财产信息包括您的房产情况、公积金情况、社保情况、车辆情况、月收入范围、保单情况、企业主情况、信用情况），您已经充分理解并知悉提供和使用财产性信息的风险，这些风险包括但不限于：纳入这些信息对您的信用评级（评分）、信用报告等结果可能产生不利影响，该等信息被被授权人依法提供给第三方后被他人不当利用的风险，因您的信用状况较好而造成您被第三方推销产品或服务等打扰的风险等。</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;"></span></strong></span>
    </p>
    <p>
      <span style=" "><span
          style=" font-size: 0.35rem; line-height:1.6;">&nbsp;2</span><span
          style=" font-size: 0.35rem; line-height:1.6;">、贷款服务咨询机构</span><span
          style=" font-size: 0.35rem; line-height:1.6;">/</span><span
          style=" font-size: 0.35rem; line-height:1.6;">咨询顾问，指为您提供贷款咨询服务的机构及咨询顾问（如涉及），在本授权书下贷款服务咨询机构指【一起花贷款代理（东莞）有限公司北京分公司】及其前述机构的分支机构、关联方，咨询顾问指【</span><span
          style=" font-size: 0.35rem; line-height:1.6;">/</span><span
          style=" font-size: 0.35rem; line-height:1.6;">】。</span></span>
    </p>
    <p>
      <span style=" "><span
          style=" font-size: 0.35rem; line-height:1.6;">&nbsp;3</span><span
          style=" font-size: 0.35rem; line-height:1.6;">、广告及分析服务类提供商，指受被授权人委托对您的产品需求</span><span
          style=" font-size: 0.35rem; line-height:1.6;">/</span><span
          style=" font-size: 0.35rem; line-height:1.6;">偏好进行评估，并向您推荐您需要的贷款产品及服务的第三方机构。</span></span>
    </p>
    <p>
      <span style=" "><span
          style=" font-size: 0.35rem; line-height:1.6;">&nbsp;&nbsp;&nbsp;</span><span
          style=" font-size: 0.35rem; line-height:1.6;">二、授权内容</span></span>
    </p>
    <p>
      <span style=" "><span
          style=" font-size: 0.35rem; line-height:1.6;">&nbsp;1</span><span
          style=" font-size: 0.35rem; line-height:1.6;">、在平台为您提供服务的过程中，为了便于被授权人向您推荐适合您的贷款产品及贷款咨询服务，您授权被授权人收集并存储您提交的</span><strong><span
            style="text-decoration: underline;  font-size: 0.35rem; line-height:1.6;">个人信息</span></strong><span
          style=" font-size: 0.35rem; line-height:1.6;">。</span></span>
    </p>
    <p>
      <span style=" "><span
          style=" font-size: 0.35rem; line-height:1.6;">&nbsp;</span><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">2</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">、</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">为了便于贷款服务咨询机构</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">/</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">咨询顾问根据您的资质情况为您提供贷款咨询服务并根据您的资质情况向您推荐合适的贷款产品，您授权被授权人将您的手机号码及个人资质信息共享给贷款服务咨询机构</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">/</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">咨询顾问，同时授权贷款服务咨询机构</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">/</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">咨询顾问分析您的个人资质信息，通过给您拨打电话的方式向您推荐适合您的贷款产品。</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;"></span></strong></span>
    </p>
    <p>
      <span style=" "><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">&nbsp;3</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">、</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">为了对您的产品需求</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">/</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">偏好进行评估，并向您推荐平台产品及服务，您授权被授权人将您的个人识别信息共享给广告及分析服务类提供商，同时授权广告及分服务类提供商分析评估您的产品需求</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">/</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">偏好，并将分析评估结果反馈给被授权人或者直接根据分析评估结果向您拨打电话为您推荐产品。</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;"></span></strong></span>
    </p>
    <p>
      <span style=" "><span
          style=" font-size: 0.35rem; line-height:1.6;">&nbsp;&nbsp;&nbsp;</span><span
          style=" font-size: 0.35rem; line-height:1.6;">三、授权期限</span></span>
    </p>
    <p>
      <span style=" "><span
          style=" font-size: 0.35rem; line-height:1.6;">&nbsp;&nbsp;&nbsp;</span><span
          style=" font-size: 0.35rem; line-height:1.6;">本授权书自您签署时生效。授权期限自本授权书生效之日起至您与我们业务终止日为止，</span><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">但在授权有效期内我们已实施的行为及依其自身性质需在授权终止后实施或需持续实施的行为，不受授权终止的影响。本授权书具有独立发了效力，不因您签署的人和业务合同或协议成立与否、效力状态变化（包括但不限于部分或全部条款无效或被撤销而无效或失效）的影响。</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;"></span></strong></span>
    </p>
    <p style="margin-left:35px;text-indent:0">
      <span style=" "><span
          style=" font-weight: bold; font-size: 0.35rem; line-height:1.6;">四、</span><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">争议解决</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;"></span></strong></span>
    </p>
    <p>
      <span style=" "><span
          style=" font-size: 0.35rem; line-height:1.6;">&nbsp;&nbsp;</span><span
          style=" font-size: 0.35rem; line-height:1.6;">若本人与被授权人发生任何纠纷争议，应友好协商解决。协商解决不成的，本人同意将纠纷或争议提交至本授权书签订地（即北京市朝阳区）有管辖权的人民法院。</span></span>
    </p>
    <p style="margin-left:35px;text-indent:0">
      <span style=" "><span
          style=" font-weight: bold; font-size: 0.35rem; line-height:1.6;">五、</span><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">本人已知悉本授权书所有内容（特别是加粗字体内容）的意义及由此产生的发了效力，自愿作出上述授权，本授权书是本人真实意思的表示，本人同意承担由此带来的一切法律后果。</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;"></span></strong></span>
    </p>
    <p style="margin-left:35px">
      <span style=" "><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">&nbsp;</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;"></span></strong></span>
    </p>
    <p style="margin-left:35px">
      <span style=" "><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">您的登录账号：{{ store.holder.mobile ? store.holder.mobile.substring(0, 3) + "****" + store.holder.mobile.substring(7) : '****'}}</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;"></span></strong></span>
    </p>
    <p style="margin-left:35px">
      <span style=" "><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">您的</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">UID</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">：</span></strong><strong><span
            style=" font-size: 0.35rem; line-height:1.6;">{{ store.holder.id ? store.holder.id : '****'}}</span></strong></span>
    </p>
    <p>
      <br />
    </p>
  </div>
</template>

<script setup lang="ts">
import { indexStore } from '@/store/index'
import { isLoginFn } from '@/assets/js/mixins';
const store = indexStore()
onMounted(() => {
  window.scrollTo(0, 0)
})
</script>


<style scoped lang="scss">
.pact-page{
  width:90%; margin:0 auto; padding:15px 0;
  color:#333;
}
</style>