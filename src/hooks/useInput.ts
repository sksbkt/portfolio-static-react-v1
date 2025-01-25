import React from "react";
import useLocalStorage from "./useLocalStorage";

const useInput = <T>(key: string, initValue: T) => {
  const [value, setValue] = useLocalStorage<T>(key, initValue);
  const reset = () => {
    setValue(initValue);
  };
  const attributeObj = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value as unknown as T);
    },
  };
  return [value, reset, attributeObj] as const;
};
export default useInput;
