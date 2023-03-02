<template>
  <div class="speech-page" >
    <div class="talk-box">
      <p>2023已经悄悄到来，在这辞旧迎新之际，泛捷国际集团提前预祝大家新年快乐。 欢迎大家参与2023泛捷国际集团迎新活动，赢取丰厚奖品。</p>
      <p class="p1" >本活动是由泛捷国际集团主办的活动，具体活动规则及玩法以活动⻚面展示为准。参与本活动前，请详细阅读活动规则及相关条款，参与本活动即视为您已阅读并同意本活动规则，理解并愿意接受本活动规则及相关条款的全</p>
      <br />
      <p>2. 外地地区员工请与【2023】年【1】月【13】日【 中午12:00】前在OA系统中上传【中奖截图】，填写收件信息并成功提交后方视为领奖成功。 特别提示:请谨慎填写收件信息，仅有一次填写机会，提交后不可二次更改。</p>
      <p>3. 奖品不支持退换货，按以上方式成功领取并签收奖品后视为领奖成功。具体快递时间根据快递区域、快递期间天气、快递期间具体安检</p>
      <p>政策、收件人签收情况等⻓短不一，均不保证具体送达时间。</p>
      <p>领奖成功。具体快递时间根据快递区域、快递期间天气、快递期间具体安检</p>
      <p>政策、收件人签收情况等⻓短不一，均不保证具体送达时间。</p>
    </div>
    <div class="btn-box">
      <a href="/src/assets/images/down.png" download="speech.png"  class="down-btn">下载</a>
      <router-link class="link-btn" to="/" >下一页</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">

// import { $get } from '@/assets/js/axios';

// const getDataFn = async () => {
//   let url = `/api.php/site/speech`
//   let res:any = await $get(url, {})
//   console.log(res);
  
// }
// getDataFn()
import isLogin from '@/hooks/isLogin';
const { isLoginFn } = isLogin()
isLoginFn()
</script>

<style scoped lang="scss" >
.speech-page{
  overflow: hidden;
  width:100vw; min-height:100vh;
  background: url('@/assets/images/img-14.png') no-repeat top center; background-size: 100%;
}
.talk-box{
  width:size(335); margin-top:size(134); margin-left: size(28);
  line-height: size(18); font-size: size(12);
  color: rgb(141, 4, 15);
  .p1{
    text-indent: size(12);
  }
}
.btn-box{
  @include flex(both, center);
  width:size(283);  margin:size(23) auto 0;
  .down-btn{
    text-align: center;
    width:size(131); height:size(54); line-height: size(50); font-size: size(20);
    background: url('@/assets/images/bg-08.png') no-repeat center; color:#fff; background-size: 100%;
  }
  .link-btn{
    @extend .down-btn;
  }
}
</style>