import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseQuerySettings} from '../../../shared/api';
import {PreviewCardProps} from '../../../shared/types';

export const offersApi = createApi({
  reducerPath: 'offersApi',
  baseQuery: fetchBaseQuery(({...baseQuerySettings})),
  endpoints: (builder) => ({
    getOffers: builder.query<PreviewCardProps[], void>({
      query: () => ({
        url: 'offers'
      }),
    })
  })
});

export const {useGetOffersQuery} = offersApi;
