import axios from "axios";
import qs from "qs";
import cookie from "js-cookie";

export const $upload = (url: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}${url}`, data, {
        headers: {
          //文件上传的类型
          "Content-Type": "multipart/form-data",
          "X-Token": cookie.get("token"),
        },
      })
      .then((res) => {
        resolve(res.data);
      });
  });
};
