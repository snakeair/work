import { ref } from "vue";
import cookie from "js-cookie";
import { $get } from "@/assets/js/axios";
import pinia from "@/store/store";
import { indexStore } from "@/store/index";
const store = indexStore(pinia);

export default function isLogin() {
  const router = useRouter();
  const isLoginFn = () => {
    let token = cookie.get("token");
    if (!token || token == "") {
      router.push({
        path: "/login",
      });
    } else {
      if (!store.holder.isLogin) {
        getHolderFn();
      }
    }
  };
  const getHolderFn = () => {
    let url = `/api.php/member/info`;
    $get(url).then((res: any) => {
      store.holder = {
        hasLucky: res.data.hasLucky,
        hasLottery: res.data.hasLottery,
        puzzleAnswerCount: res.data.puzzleAnswerCount,
        notLottery: res.data.notLottery,
        isLogin: true,
      };
    });
  };

  return {
    isLoginFn,
    getHolderFn,
  };
}
