import cookie from "js-cookie";
import $message from "@/cart/message";
import { $post } from "@/assets/js/axios";
import { isNoneFn } from "./util";
import qs from "qs";

import pinia from "@/store/store";
import { indexStore } from "@/store/index";
const store = indexStore(pinia);

export function isLoginFn() {
  const router = useRouter();
  let token = cookie.get("token");
  if (!token || token.length === 0) {
    $message({ type: "error", msg: "登陆已过期，请重新登陆" });
    if (cookie.get("result")) {
      cookie.remove("result");
    }
    setTimeout(() => {
      router.push({
        path: "/login",
      });
    }, 2000);
    return false;
  } else {
    if (isNoneFn(store.holder.id)) {
      let url = `/api.php/center/member/info`;
      let data = {
        token: cookie.get("token"),
        client: "pc",
        package: "h5",
        ver: "v1.1",
      };
      $post(url, data).then((res: any) => {
        if (res.result == 1) {
          store.holder.id = res.data.ID;
          store.holder.mobile = `${res.data.Mobile}`;
          store.holder.name = res.data.TrueName;
          store.holder.addr = {
            regProvince: res.data.regProvince,
            regCity: res.data.regCity,
          };
          store.goods = {
            name: res.data.CrmName,
            logo: res.data.Logurl,
          };
        }
      });
    }
    return true;
  }
}
