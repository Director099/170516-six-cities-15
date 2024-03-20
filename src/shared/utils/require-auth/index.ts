import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthorizationStatus} from "../../config";

export const requireAuthorizationSlice = createSlice({
  name: 'utils/requireAuthorization',
  initialState: AuthorizationStatus.Unknown,
  reducers: {
    setRequireAuth: (_, {payload}: PayloadAction<AuthorizationStatus>) => payload
  }
});

export const {setRequireAuth} = requireAuthorizationSlice.actions;
export default requireAuthorizationSlice.reducer;
