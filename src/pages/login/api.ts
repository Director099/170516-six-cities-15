import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {baseQuerySettings} from '../../shared/api';
import {Token} from '../../shared/utils';
import {UserProp} from "../../shared/types";
import {setRequireAuth} from "../../shared/utils/require-auth";
import {AuthorizationStatus} from "../../shared/config";

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: baseQuerySettings,
  endpoints: (builder) => ({
    postAuthorization: builder.mutation({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, {dispatch}) {
        dispatch(setRequireAuth(AuthorizationStatus.Auth));
      },
      transformResponse: (user: UserProp) => Token.Save(user.token),
    }),
  }),
});

export const {usePostAuthorizationMutation, useGetAuthorizationCheckQuery} = loginApi;
