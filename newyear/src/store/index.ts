import { defineStore } from "pinia";

export const indexStore = defineStore("main", {
  state: () => {
    return {
      puser: "jisujin_2",
      isLogin: false,
      holder: {} as tsHolder,
      prize: {} as tsAny,
    };
  },
  getters: {
    // 和vue中的computed一样
  },
  actions: {
    // actionMsg(msg: string) {
    //   this.msg = msg;
    // },
  },
});
