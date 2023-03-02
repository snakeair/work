<template>
  <div  >
    <div class="showbox" >
      <div class="loader">
        <svg class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const msg = ref<string>('')

// defineExpose 暴露子组件的属性，父级可以直接使用child.value.xxx 调用
defineExpose({
  msg
})

</script>

<style scoped lang="scss" >
$green: #008744;
$blue: #0057e7;
$red: #f54c34;
$yellow: #ffa700;
$white: #eee;

// scaling... any units
$width: 50px;

.loader {
  position: fixed;
  top: 50%; left: 50%; z-index:999;
  width: $width;
  transform: translate(-50%, -50%);
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
}

.circular {
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}

@keyframes color {
  100%,
  0% {
    stroke: $red;
  }
  40% {
    stroke: $blue;
  }
  66% {
    stroke: $red;
  }
  90% {
    stroke: $blue;
  }
}

// demo-specific
body {
  background-color: $white;
}
.showbox {
  position: fixed;
  top: 0;
  left: 0; z-index:999;
  width: 100vw; 
  height:100vh;
  background-color: rgba(255, 255, 255,  0.6);
}
</style>