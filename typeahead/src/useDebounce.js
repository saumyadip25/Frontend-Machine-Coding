import { useRef } from "react";

const useDebounce = (callbackFunc, delay) => {
  let timerId = useRef(null);

  const debounce = (...args) => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      callbackFunc(...args);
    }, delay);
  };

  return debounce;
};

export default useDebounce;
