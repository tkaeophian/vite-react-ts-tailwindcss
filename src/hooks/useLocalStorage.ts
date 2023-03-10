import { useState } from 'react';

const storagePrefix = `${import.meta.env.VITE_APP_NAME}_react_`;

export const useLocalStorage = () => {
  const [value, setValue] = useState<string | null>(null);

  const setItem = (key: string, value: string) => {
    localStorage.setItem(`${storagePrefix}_${key}`, value);
    setValue(value);
  };

  const getItem = (key: string) => {
    const value = localStorage.getItem(`${storagePrefix}_${key}`);
    setValue(value);
    return value;
  };

  const removeItem = (key: string) => {
    localStorage.removeItem(`${storagePrefix}_${key}`);
    setValue(null);
  };

  return {
    value,
    setItem,
    getItem,
    removeItem,
  };
};
