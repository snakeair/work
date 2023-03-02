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
  if (!token || token == "") {
    router.push({
      path: "/login",
    });
  }
}
