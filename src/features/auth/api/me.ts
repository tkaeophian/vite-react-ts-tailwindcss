import { AuthUser } from '../types';

import { axios } from '@/lib/axios';

export const me = (): Promise<AuthUser> => axios.get('/auth/me');
