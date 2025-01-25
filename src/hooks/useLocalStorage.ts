import React, { useEffect, useState } from "react";
/**
 * Retrieves the value from localStorage or returns the initial value.
 *
 * @template T - The type of the value.
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {T | (() => T)} initValue - The initial value to use if there is no value in localStorage.
 * @returns {T} - The value from localStorage or the initial value.
 *
 * @remarks
 * This function checks if the code is running in a browser environment and attempts to retrieve and parse the value from localStorage.
 * If there is an error or the value does not exist in localStorage, it returns the initial value.
 */
const getLocalValue = <T>(key: string, initValue: T | (() => T)): T => {
  // browser environment check or SSR (eg:nextJS)
  if (typeof window === undefined) {
    return initValue instanceof Function ? initValue() : initValue;
  }

  try {
    const localValue = localStorage.getItem(key);
    if (localValue !== null) {
      return JSON.parse(localValue) as T;
    }
  } catch (error) {
    console.error("Error reading localStorage", key, error);
  }

  return initValue instanceof Function ? initValue() : initValue;
};

/**
 * Custom hook to manage state synchronized with localStorage.
 *
 * @template T - The type of the state value.
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {T} initValue - The initial value to use if there is no value in localStorage.
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>]} - An array containing the current state value and a function to update it.
 *
 * @example
 * const [name, setName] = useLocalStorage<string>('name', 'John Doe');
 *
 * @remarks
 * This hook uses `useState` to manage the state and `useEffect` to update localStorage whenever the state changes.
 * It handles JSON parsing and stringifying of the stored value.
 * If there is an error reading from or writing to localStorage, it logs the error to the console.
 */
const useLocalStorage = <T>(
  key: string,
  initValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    return getLocalValue(key, initValue);
    // try {
    //   const storedValue = localStorage.getItem(key);
    //   return storedValue ? (JSON.parse(storedValue) as T) : initValue;
    // } catch (error) {
    //   console.error("Error parsing stored value", key, error);
    //   return initValue;
    // }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to localstorage:", key, error);
    }
    return () => {};
  }, [key, value]);
  return [value, setValue];
};

export default useLocalStorage;
