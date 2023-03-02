<template>
  <div v-load="loading" >
    <div class="common-pages" v-if="!loading" >
      <div @click="toPrizeFn" class="party-box" >
        <span class="text">已有{{ size.picNum }}名小伙伴参与</span>
      </div>
      <router-link to="/question/index" class="party-box two">
        <span class="text">已有{{ size.puzzleNum }}名小伙伴参与</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import isLogin  from '@/hooks/isLogin'
import { $get } from '@/assets/js/axios';
import { indexStore } from '@/store';
const store = indexStore()

let loading = $ref<boolean>(true)

let size = $ref<any>()
const router = useRouter()

const toPrizeFn = () => {
  if (store.holder.notLottery) {
    router.push({
      path: '/lottery/thanks'
    })
  } else if (store.holder.hasLottery) {
      router.push({
        path: '/photo/censor'
      })
  } else {
    router.push({
      path: '/photo/index'
    })
  }
}

const getDataFn = async () => {
  let url2 = `/api.php/site/join`
  let res2 = await $get(url2)
  size = res2.data
  loading = false;

}
getDataFn()
const { isLoginFn } = isLogin()
isLoginFn()
</script>

<style scoped lang="scss" >
.common-pages{
  @include flex(center);
}
.party-box{
  position: relative; display: block;
  width:size(338); height: size(301);
  background: url('@/assets/images/img-02.png') no-repeat center; background-size: 100%;
  &.two{
    background-image: url('@/assets/images/img-03.png');
  }
  .text{
    text-align: center; position: absolute;
    font-size: size(12); width:100%; top:size(125); 
    color:#000;
  }
}
</style>