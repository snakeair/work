import axios from "axios";
import qs from "qs";
import cookie from "js-cookie";
import $message from "@/cart/message/index";

let url = window.location.href;

const baseURL: string = import.meta.env.VITE_BASE_URL;
// const apikey: string = import.meta.env.VITE_API;

interface reqTs {
  [key: string]: any;
}

const pendingRequest = new Map();

// 获取当前请求信息并组合成为一个字符串返回
function generateReqKey(config: reqTs) {
  const { method, url, params, data } = config;
  return [method, url, qs.stringify(params), qs.stringify(data)].join("&");
}

// 判断当前请求是否已经发送过，如果没有加入列表
function addPendingRequest(config: reqTs) {
  const requestKey = generateReqKey(config);
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel: reqTs) => {
      if (!pendingRequest.has(requestKey)) {
        pendingRequest.set(requestKey, cancel);
      }
    });
}

function removePendingRequest(config: reqTs) {
  const requestKey = generateReqKey(config);
  if (pendingRequest.has(requestKey)) {
    const cancel = pendingRequest.get(requestKey);
    // cancel axios 的内置方法 用于取消上一次的请求
    cancel(requestKey);

    pendingRequest.delete(requestKey);
  }
}

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "X-Token": cookie.get("token"),
    "content-type": "application/json",
  },
  timeout: 20000,
});

// 请求拦截器
instance.interceptors.request.use(
  function (config) {
    removePendingRequest(config); // 检查是否存在重复请求，若存在则取消请求
    addPendingRequest(config); // 把当前请求添加到pendingRequest对象中
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截器
instance.interceptors.response.use(
  (response) => {
    console.log(response);
    if (response.status === 200) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  (error) => {
    console.log(error);
    removePendingRequest(error.config || {}); // 从pendingRequest对象中移除请求
    if (!axios.isCancel(error)) {
      // 添加异常处理
      $message({
        type: "error",
        msg: "服务器异常",
      });
    }
    return Promise.resolve({
      code: 444,
      url: `${error.config.url}`,
      msg: error.message,
    });
  }
);

export const $get = (url: string, data?: object) => {
  return instance.get(url, { params: data });
};

export const $post = (url: string, data: object) => {
  return instance.post(url, qs.parse(data));
};
