import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";

//页面
import index from "@/views/index/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/reg",
    name: "reg",
    component: () => import("@/views/reg/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/question",
    name: "question",
    component: () => import("@/views/question/index.vue"),
  },
  {
    path: "/result",
    name: "result",
    component: () => import("@/views/result/index.vue"),
  },
  {
    path: "/address",
    name: "address",
    component: () => import("@/views/address/index.vue"),
  },
  {
    path: "/pact/fq",
    name: "pactfq",
    component: () => import("@/views/pact/fq.vue"),
  },
  {
    path: "/pact/person",
    name: "pactperson",
    component: () => import("@/views/pact/person.vue"),
  },
  {
    path: "/pact/reg",
    name: "pactreg",
    component: () => import("@/views/pact/reg.vue"),
  },
  {
    path: "/pact/talk",
    name: "pacttalk",
    component: () => import("@/views/pact/talk.vue"),
  },
];

const router = createRouter({
  // linkActiveClass: "cur",
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes,
});

router.beforeEach((to: any, from, next) => {
  let source = from.query.source;
  if (source) {
    if (to.query.source) {
      next();
    } else {
      next({
        path: to.path,
        query: {
          ...to.query,
          source: source,
        },
      });
    }
  } else {
    next();
  }
});

export default router;
