import {createAsyncThunk} from '@reduxjs/toolkit';
import {PromiseProps, UserLoginProps} from '@/shared/types';
import {token} from '../../utils/token';

export const checkAuthAction = createAsyncThunk<UserLoginProps, undefined, PromiseProps>
('user/checkAuth', async (_arg, {extra: api }) => {
  const { data } = await api.get<UserLoginProps>('/login');
  return data;
});

export const logoutAction = createAsyncThunk<void, void, PromiseProps> (
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete('/logout');
    token.drop();
  }
);
