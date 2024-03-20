import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {Token} from '../utils';

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const baseQuerySettings = fetchBaseQuery({
  baseUrl: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
  prepareHeaders: (headers) => Token.Get() ? headers.append('x-token', Token.Get()) : headers
});
