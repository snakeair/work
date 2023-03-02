import { ref } from "vue";

export default function useCode(
  num1: number,
  num2: number = 0,
  time: number = 1000
) {
  const code = ref<number>(num1);
  const codeFn = (): void => {
    let timer: number = setInterval(() => {
      if (code.value > num2) {
        code.value--;
      } else {
        code.value = num1;
        clearInterval(timer);
      }
    }, time);
  };
  return {
    code,
    codeFn,
  };
}
