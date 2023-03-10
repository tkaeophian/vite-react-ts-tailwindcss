import { UserResponse } from '../types';

import { axios } from '@/lib/axios';

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const signupWithEmailAndPassword = (data: RegisterCredentialsDTO): Promise<UserResponse> =>
  axios.post('/auth/register', data);
