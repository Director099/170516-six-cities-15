import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {baseQuerySettings} from "../../shared/api";

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery(({...baseQuerySettings})),
  endpoints: (builder) => ({
    postAuthorization: builder.mutation({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body,
      }),
    }),
  })
});

export const {usePostAuthorizationMutation} = loginApi;
