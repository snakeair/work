export const phoneFn = (val: string): boolean => {
  const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g;
  if (!reg.test(val)) {
    return false;
  } else {
    return true;
  }
};

// 给 1-9 前面加 0
export function formatNumber(n: string | number) {
  n = n.toString();
  return n[1] ? n : "0" + n;
}

// yyyy-mm-dd
export function dateFn(date: any) {
  const year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate();
  return [year, month, day].map(formatNumber).join("-");
}

// yyy-mm-dd h:m:s
export function timeFn(date: any) {
  const year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();
  return (
    [year, month, day].map(formatNumber).join("-") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
}

// 深拷贝
export function clone(target: any, map = new Map()) {
  if (typeof target === "object") {
    let cloneTarget: any = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = clone(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
}

// cookie  尽量使用sessionStorage
export const setCookie = (cname: string, cvalue: string, exdays: number) => {
  let d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  if (exdays != 0) {
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
  } else {
    document.cookie = cname + "=" + cvalue + "; path =/";
  }
};
export const getCookie = (cname: string) => {
  let arr;
  let reg = new RegExp("(^| )" + cname + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))) return arr[2];
  else return null;
};
export const delCookie = (name: string) => {
  let exp: any = new Date();
  exp.setTime(exp.getTime() - 1);
  let cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};

// sessionStorage

export const sessionFn = (type: string, key: string, value: string = "") => {
  switch (type) {
    case "set":
      return sessionStorage.setItem(key, value);
      break;
    case "get":
      return sessionStorage.getItem(key);
      break;
    case "remove":
      return sessionStorage.removeItem(key);
      break;
    case "clear":
      return sessionStorage.clear();
      break;
  }
};

// 判断字符串是否为空
export const isNoneFn = (data: any) => {
  if (!data || data == "") {
    return true;
  } else {
    return false;
  }
};
