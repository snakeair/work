import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";

import pinia from "../store/store";
import { indexStore } from "@/store/index";
const store = indexStore(pinia);
//页面
import index from "@/views/index/index.vue";

function timerFn(t: string) {
  let timer1 = Date.parse(`${t} 00:00`);
  let timer2 = Date.now();
  if (import.meta.env.VITE_ENV == "production") {
    return false;
  } else if (timer2 > timer1) {
    return true;
  } else {
    return false;
  }
}

const bl = timerFn("2023/1/4");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/speech",
    name: "speech",
    component: () => import("@/views/speech/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/fu/cue",
    name: "fucue",
    component: () => import("@/views/fu/cue.vue"),
  },
  {
    path: "/fu/index",
    name: "fuindex",
    component: () => import("@/views/fu/index.vue"),
  },
  {
    path: "/lottery/index",
    name: "lottery",
    component: () => import("@/views/lottery/index.vue"),
  },
  {
    path: "/lottery/end",
    name: "lotteryend",
    component: () => import("@/views/lottery/end.vue"),
  },
  {
    path: "/lottery/thanks",
    name: "lotterythanks",
    component: () => import("@/views/lottery/thanks.vue"),
  },
  {
    path: "/lottery/sorry",
    name: "lotterysorry",
    component: () => import("@/views/lottery/sorry.vue"),
  },
  {
    path: "/photo/index",
    name: "photo",
    component: () => import("@/views/photo/index.vue"),
  },
  {
    path: "/photo/take",
    name: "phototake",
    component: () => import("@/views/photo/take.vue"),
  },
  {
    path: "/photo/censor",
    name: "photocensor",
    component: () => import("@/views/photo/censor.vue"),
  },
  {
    path: "/photo/end",
    name: "photoend",
    component: () => import("@/views/photo/end.vue"),
  },
  {
    path: "/photo/eggs",
    name: "photoeggs",
    component: () => import("@/views/photo/eggs.vue"),
  },
  {
    path: "/question/index",
    name: "questionindex",
    component: () => import("@/views/question/index.vue"),
  },
  {
    path: "/question/one",
    name: "questionone",
    component: () => import("@/views/question/one.vue"),
  },
  {
    path: "/question/two",
    name: "questiontwo",
    component: () => import("@/views/question/two.vue"),
  },
  {
    path: "/question/three",
    name: "questionthree",
    component: () => import("@/views/question/three.vue"),
  },
  {
    path: "/question/rank",
    name: "questionrank",
    component: () => import("@/views/question/rank.vue"),
  },
];

const router = createRouter({
  // linkActiveClass: "cur",
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes,
});

router.beforeEach((to: any, from, next) => {
  // if (bl) {
  //   return;
  // }
  next();
});

export default router;
