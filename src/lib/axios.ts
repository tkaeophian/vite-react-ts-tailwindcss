import Axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';

import { API_URL } from '@/config';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const authPrefix = 'AUTH_TOKEN';
function authRequestInterceptor(config: AxiosRequestConfig): any {
  const { getItem } = useLocalStorage();
  const token = getItem(authPrefix);
  if (token) {
    (config.headers as AxiosHeaders).set('authorization', `${token}`);
  }

  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.log(message);

    return Promise.reject(error);
  }
);
