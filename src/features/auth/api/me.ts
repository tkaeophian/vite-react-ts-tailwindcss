import { AuthUser } from '../types';
import { axios } from '@/lib/axios';

export const me = (): Promise<AuthUser> => {
  return axios.get('/auth/me');
};
