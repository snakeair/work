import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/sass/reset.scss"; // 初始化样式
import router from "./router";
import pinia from "./store/store";

import loadingDirective from "@/cart/loading/loading";

// 使用自动引入的时候部分组件会出现样式丢失，所以在这里全局引入，但是不知道打包的时候会不会重复打包
// import "@/assets/sass/element.scss";

import "animate.css/animate.min.css"; //引入动画

import "@/assets/js/resize.js";

const app = createApp(App);

app.use(router);
app.use(pinia);
// app.use(UI);
app.directive("load", loadingDirective);
app.mount("#app");
