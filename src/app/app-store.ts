import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import currentCitySliceReducer from '../entities/locations/model';
import requireAuthorizationSliceReducer from "../shared/utils/require-auth";
import {offersApi} from '../pages/main/api';
import {loginApi} from '../pages/login/api';

export const appStore = configureStore({
  reducer: {
    authorizationStatus: requireAuthorizationSliceReducer,
    currentCity: currentCitySliceReducer,
    [offersApi.reducerPath]: offersApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(offersApi.middleware, loginApi.middleware)
});

export type State = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
